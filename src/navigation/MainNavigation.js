import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {  Image} from 'react-native';
import Service1Screen from '../Screen/Service1Screen';
import Service2Screen from '../Screen/Service2Screen';
import Service3Screen from '../Screen/Service3Screen';
import Service4Screen from '../Screen/Service4Screen';
import Welcome from '../Screen/Welcome';

import Home from '../Screen/Home';
import ManageTime from '../Screen/ManageTime';
import Setting from '../Screen/Setting';
import Task from '../Screen/Task';
import {createStackNavigator} from '@react-navigation/stack';
import TaskDetail from '../Screen/TaskDetail';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BotTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assets/img/home.png')}
              style={{width: 30, height: 30, marginTop: 10}} // Thay đổi kích thước theo ý muốn
            />
          ),
          tabBarStyle: {backgroundColor: '#2a0749', borderColor: '#2a0749'},
          tabBarLabel: '',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="TaskScreen"
        component={Task}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assets/img/task.png')}
              style={{width: 30, height: 30, marginTop: 10}} // Thay đổi kích thước theo ý muốn
            />
          ),
          tabBarStyle: {backgroundColor: '#2a0749', borderColor: '#2a0749'},
          tabBarLabel: '',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ManageTimeScreen"
        component={ManageTime}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assets/img/calender.png')}
              style={{width: 30, height: 30, marginTop: 10}} // Thay đổi kích thước theo ý muốn
            />
          ),
          tabBarStyle: {backgroundColor: '#2a0749', borderColor: '#2a0749'},
          tabBarLabel: '',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="SettingScreen"
        component={Setting}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assets/img/setting.png')}
              style={{width: 30, height: 30, marginTop: 10}} // Thay đổi kích thước theo ý muốn
            />
          ),
          tabBarStyle: {backgroundColor: '#2a0749', borderColor: '#2a0749'},
          tabBarLabel: '',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomTab" component={BotTab} />
      <Stack.Screen name="Welcome" component={Welcome} />
      
      <Stack.Screen name="Detail" component={TaskDetail} />
    </Stack.Navigator>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
