import React from 'react';

import { Provider } from 'react-redux';
import AppNavigator from './src/Screens/AppNavigator';
import store from './src/Components/ReduxConfig/Store';
import FlashMessage from 'react-native-flash-message';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <Provider store={store}>
    <SafeAreaView style={{flex:1}}>
      <StatusBar
        translucent={true}
        backgroundColor={'#000'}
        barStyle={'light-content'}
      />
      <AppNavigator />
      <FlashMessage position={'top'} style={styles.safeArea} />  
    </SafeAreaView>
  </Provider>


  );
};

export default App;

const styles = StyleSheet.create({
  safeArea: {
    marginTop: StatusBar.currentHeight,
  },
});
