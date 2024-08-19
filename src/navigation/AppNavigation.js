import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View, Image} from 'react-native';
import Service1Screen from '../Screen/Service1Screen';
import Service2Screen from '../Screen/Service2Screen';
import Service3Screen from '../Screen/Service3Screen';
import Service4Screen from '../Screen/Service4Screen';
import Welcome from '../Screen/Welcome';
import SignInScreen from '../Screen/SignInScreen';
import SignUpScreen from '../Screen/SignUpScreen';
import Home from '../Screen/Home';
import ManageTime from '../Screen/ManageTime';
import Setting from '../Screen/Setting';
import Task from '../Screen/Task';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
import {useDispatch, useSelector} from 'react-redux';
import UserNavigation from './UserNavigation';
import MainNavigation from './MainNavigation';

export default function AppNavigation() {
  const appState = useSelector(state => state.app);
  console.log(appState);
  return (
    <NavigationContainer>
      {appState.user !== null ? <MainNavigation /> : <UserNavigation />}
    </NavigationContainer>
  );
}
