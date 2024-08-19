import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from '../Screen/SignInScreen';
import SignUpScreen from '../Screen/SignUpScreen';
import Service1Screen from '../Screen/Service1Screen';
import Service2Screen from '../Screen/Service2Screen';
import Service3Screen from '../Screen/Service3Screen';
import Service4Screen from '../Screen/Service4Screen';


const UserNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Service1" component={Service1Screen} />
      <Stack.Screen name="Service2" component={Service2Screen} />
      <Stack.Screen name="Service3" component={Service3Screen} />
      <Stack.Screen name="Service4" component={Service4Screen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default UserNavigation;

const styles = StyleSheet.create({});
