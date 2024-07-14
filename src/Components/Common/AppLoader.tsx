import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const AppLoader = () => {
  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size="large" color="orange" />
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#grey',
  },
});

export default AppLoader;
