import React from 'react';
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
import TaskDetail from '../Screen/TaskDetail';

// Bottom Tab Navigator
function BottomTabNavigator() {
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
        component={TaskDetail}
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
}

// Stack Navigator
function RootStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen
        name="BottomTabs"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={SignInScreen} />
      <Stack.Screen name="Register" component={SignUpScreen} />
      <Stack.Screen name="Service1" component={Service1Screen} />
      <Stack.Screen name="Service2" component={Service2Screen} />
      <Stack.Screen name="Service3" component={Service3Screen} />
      <Stack.Screen name="Service4" component={Service4Screen} />
    </Stack.Navigator>
  );
}

export default function AppNavigation() {
  const appState = useSelector(state => state.app);
  console.log(appState);
  return (
    <NavigationContainer>
      {appState.user !== null ? <BottomTabNavigator /> : <RootStackNavigator />}
    </NavigationContainer>
  );
}
