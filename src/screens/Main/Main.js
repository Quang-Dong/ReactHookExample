/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import MainHome from './Home/Home';
import MainCart from './Cart/Cart';
import MainNotifi from './Notifi/Notifi';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Main = () => (
  <SafeAreaView style={{flex: 1}}>
    <StatusBar barStyle={'dark-content'} backgroundColor="#E4E5E9" />
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MainHome} />
      <Tab.Screen name="Cart" component={MainCart} />
      <Tab.Screen name="Notifi" component={MainNotifi} />
    </Tab.Navigator>
  </SafeAreaView>
);

export default Main;
