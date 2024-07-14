import React, { useEffect } from 'react';
import { View, Image, StyleSheet, SafeAreaView } from 'react-native';
import { IMAGES } from '../assets/Images';


const Splash = (props:any) => {

    
  useEffect(() => {
    
    setTimeout(() => {
      props.navigation.navigate('UserListScreen');
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={IMAGES?.Logo}
        style={styles.image}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '40%',
    height: '40%',
    resizeMode:'contain',
  },
});

export default Splash;
