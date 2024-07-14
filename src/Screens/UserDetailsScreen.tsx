import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import { IMAGES } from '../assets/Images';
const {width, height} = Dimensions.get('screen');

const UserDetailScreen = (props: any) => {
  const users = props?.route?.params?.user;

  const sortAndFormatEmails = (emails: any, maxLength = 15) => {
    const sortedEmails = emails.sort((a: any, b: any) => b.length - a.length);
    return sortedEmails.map((email: any) => {
      if (email.length > maxLength) {
        return `${email.slice(0, 15)}...${email.slice(-3)}`;
      }
      return email;
    });
  };

   const formattedEmail = sortAndFormatEmails([users?.email])[0];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}
        onPress={()=>{props?.navigation?.goBack()}}
        >
          <Image style={{height:40,width:40,resizeMode:'contain'}} source={IMAGES.BackIcon}/>
        </TouchableOpacity>
        <Text style={styles.headerText}>User Details</Text>
      </View>
      <View style={styles.itemContainer}>
        <Image source={{uri: users?.picture.medium}} style={styles.image} />
        <View style={styles.fristnameView}>
          <Text style={styles.itemText}>First Name:</Text>
          <Text style={styles.itemText1} numberOfLines={1}>
            {users?.name.first}
          </Text>
        </View>
        <View style={styles.fristnameView}>
          <Text style={styles.itemText}>Last Name:</Text>
          <Text style={styles.itemText1} numberOfLines={1}>
            {users?.name.last}
          </Text>
        </View>
        <View style={styles.fristnameView}>
          <Text style={styles.itemText}>Email ID: </Text>
          <Text style={styles.itemText1} numberOfLines={1}>
            {formattedEmail}
          </Text>
        </View>
        <View style={styles.fristnameView}>
          <Text style={styles.itemText}>Phone Number: </Text>
          <Text style={styles.itemText1}>{users?.phone}</Text>
        </View>
        <View style={styles.fristnameView}>
          <Text style={styles.itemText}>Gender: </Text>
          <Text style={styles.itemText1}>{users?.gender}</Text>
        </View>
        <View style={styles.fristnameView}>
          <Text style={styles.itemText}>Age: </Text>
          <Text style={styles.itemText1}>{users?.dob.age}</Text>
        </View>
      </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    position: 'relative',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    position: 'absolute',
    left: 20,
  },
  itemContainer: {
    width: width * 0.9,
    alignSelf: 'center',
    borderRadius: 7,
    marginTop: '2%',
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
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 10,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});



export default UserDetailScreen