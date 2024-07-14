import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserListScreen from './UserListScreen';
import UserDetailScreen from './UserDetailsScreen';
import Splash from './Splash';
import { SafeAreaView } from 'react-native';

const Stack = createStackNavigator();

const AppNavigator = () => (

    <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash"
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="UserListScreen" component={UserListScreen} />
            <Stack.Screen name="UserDetailScreen" component={UserDetailScreen} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default AppNavigator;