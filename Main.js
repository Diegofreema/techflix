import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import Home from './screens/Home';

import Search from './screens/Search';
import Download from './screens/Download';

import Favorite from './screens/Favorite';

import MovieDetail from './screens/MovieDetail';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#000000' },
        headerStyle: { backgroundColor: '#000000' },
        headerTintColor: 'white',
        headerTitleAlign: 'center',
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
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({ color, focused, size }) => {
            return (
              <Ionicons
                name={focused ? 'heart' : 'heart-outline'}
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
          title: 'Favorite',
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
            contentStyle: { backgroundColor: '#000000' },
          }}
        >
          <Stack.Screen
            name="Main"
            component={BottomTab}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Details"
            component={MovieDetail}
            options={{
              headerStyle: { backgroundColor: '#000000' },
              headerTitleAlign: 'center',
              headerTintColor: 'white',
              title: '',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Main;
