import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Convert from '../screens/Convert';
import Chart from '../screens/Chart';
import {Image, Text, View} from 'react-native';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 110,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: '#201F20',
        },
      }}>
      <Tab.Screen
        name="Convert"
        component={Convert}
        options={{
          topBar: {
            backgroundColor: '#FFFFFF',
          },
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('../assets/icons/HorizontalTopButton.png')}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#D5FEAF' : '#B7B7B7',
                }}
              />
              <Text style={{color: focused ? '#D5FEAF' : '#B7B7B7'}}>
                Convert
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Chart"
        component={Chart}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('../assets/icons/chartIcon.png')}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#D5FEAF' : '#B7B7B7',
                }}
              />
              <Text style={{color: focused ? '#D5FEAF' : '#B7B7B7'}}>
                Chart
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
