import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import Home from './screens/Home';
import ComingSoon from './screens/ComingSoon';
import Search from './screens/Search';
import Download from './screens/Download';
import { Avatar } from 'react-native-paper';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#000000' },
        headerStyle: { backgroundColor: '#000000' },
        headerTintColor: 'white',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={color}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 15,
          },
          tabBarIconStyle: {
            marginTop: 5,
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Soon"
        component={ComingSoon}
        options={{
          tabBarIcon: ({ color, focused, size }) => {
            return (
              <Ionicons
                name={focused ? 'videocam-sharp' : 'videocam-outline'}
                size={size}
                color={color}
              />
            );
          },
          tabBarLabelStyle: {
            fontSize: 15,
          },
          tabBarIconStyle: {
            marginTop: 5,
          },
          title: 'Coming Soon',
          headerTitleAlign: 'center',
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, focused, size }) => {
            return (
              <MaterialCommunityIcons
                name={focused ? 'magnify-close' : 'magnify'}
                size={size}
                color={color}
              />
            );
          },
          tabBarLabelStyle: {
            fontSize: 15,
          },
          tabBarIconStyle: {
            marginTop: 5,
          },
        }}
      />
      <Tab.Screen
        name="Download"
        component={Download}
        options={{
          tabBarIcon: ({ color, focused, size }) => {
            return (
              <Ionicons
                name={focused ? 'download' : 'download-outline'}
                size={size}
                color={color}
              />
            );
          },
          tabBarLabelStyle: {
            fontSize: 15,
          },
          tabBarIconStyle: {
            marginTop: 5,
          },
        }}
      />
    </Tab.Navigator>
  );
};

const Main = () => {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: '#000000' },
          }}
        >
          <Stack.Screen name="Main" component={BottomTab} options={{}} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Main;
