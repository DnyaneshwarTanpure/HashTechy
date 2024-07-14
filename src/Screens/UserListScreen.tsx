import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  TextInput,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {showMessage} from 'react-native-flash-message';
import {fetchUsers} from '../Components/ReduxConfig/userSlice';
import {RootState, AppDispatch} from '../Components/ReduxConfig/store';
import EmptyComponent from '../Components/Common/EmptyComponent';
const {width} = Dimensions.get('screen');

const UserListScreen = (props: any) => {
  const dispatch = useDispatch<AppDispatch>();

  const users = useSelector((state: RootState) => state.users.users);
  const status = useSelector((state: RootState) => state.users.status);
  const error = useSelector((state: RootState) => state.users.error);
  const page = useSelector((state: RootState) => state.users.page);

  const ErrMsg = error == null ? 'Something went wrong' : error;

  

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers(page));
    }
  }, [status, dispatch, page]);

  useEffect(() => {
   
    if (status === 'failed') {
      showMessage({
        message: ErrMsg,
        type: 'danger',
        duration: 2000,
      });
    }
  }, [status, error]);

  const handleLoadMore = () => {
    dispatch(fetchUsers(page));
  };

  const handleRefresh = () => {
    if (status !== 'loading') {
      dispatch(fetchUsers(1));
    }
  };

  const sortAndFormatEmails = (emails: any, maxLength = 15) => {
    const sortedEmails = emails.sort((a: any, b: any) => b.length - a.length);
    return sortedEmails.map((email: any) => {
      if (email.length > maxLength) {
        return `${email.slice(0, 10)}...${email.slice(-3)}`;
      }
      return email;
    });
  };

  const renderItem = ({item}: any) => {
    const formattedEmail = sortAndFormatEmails([item.email])[0];
    return (
      <View style={styles.itemContainer}>
        <View style={styles.fristnameView}>
          <Text style={styles.itemText}>First Name:</Text>
          <Text style={styles.itemText1} numberOfLines={1}>
            {item.name.first}
          </Text>
        </View>
        <View style={styles.fristnameView}>
          <Text style={styles.itemText}>Last Name:</Text>
          <Text style={styles.itemText1} numberOfLines={1}>
            {item.name.last}
          </Text>
        </View>
        <View style={styles.fristnameView}>
          <Text style={styles.itemText}>Email: </Text>
          <Text style={styles.itemText1} numberOfLines={1}>
            {formattedEmail}
          </Text>
        </View>
        <View style={styles.fristnameView}>
          <Text style={styles.itemText}>Phone: </Text>
          <Text style={styles.itemText1}>{item.phone}</Text>
        </View>
        <View style={styles.fristnameView}>
          <Text style={styles.itemText}>Gender: </Text>
          <Text style={styles.itemText1}>{item.gender}</Text>
        </View>
        <View style={styles.fristnameView}>
          <Text style={styles.itemText}>Age: </Text>
          <Text style={styles.itemText1}>{item.dob.age}</Text>
        </View>
        <TouchableOpacity style={styles.viewButton}
        onPress={()=>{props.navigation.navigate('UserDetailScreen',{user:item})}}
        >
          <Text style={styles.viewText}>View Detail</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>User List</Text>
      </View>
      <FlatList
        data={users}
        renderItem={renderItem}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        refreshing={status === 'loading'}
        onRefresh={handleRefresh}
        contentContainerStyle={{marginTop:'4%'}}
        showsVerticalScrollIndicator={false}
        bounces={false}
        ListEmptyComponent={<EmptyComponent/>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#000',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: '#808080',
    width: width * 0.9,
    alignSelf: 'center',
    borderRadius: 7,
    marginBottom: '2%',
  },
  itemText: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '400',
  },
  itemText1: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '400',
    width: width * 0.45,
    textAlign: 'right',
  },
  fristnameView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '2%',
  },
  viewText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '400',
  },
  inputFiled: {
    borderColor: '#808080',
    padding: '2%',
    borderWidth: 1,
    marginVertical: '4%',
    width: width * 0.9,
    alignSelf: 'center',
    borderRadius: 7,
    fontSize: 16,
    color: '#000000',
    fontWeight: '400',
  },
  viewButton: {
    backgroundColor: '#ffA500',
    padding: '2.5%',
    alignItems: 'center',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    marginTop: '1%',
  },
});


export default UserListScreen;