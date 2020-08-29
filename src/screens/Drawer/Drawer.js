/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import DrawerInfo from './Info/Info';
import DrawerOrderHistory from './OrderHistory/OrderHistory';
import DrawerAuth from './Auth/Auth';
import DrawerForgotPass from './Auth/ForgotPass/ForgotPassword';

import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import {Neomorph} from 'react-native-neomorph-shadows';

const Stack = createStackNavigator();

const Drawer = ({navigation}) => (
  <SafeAreaView style={{flex: 1}}>
    <StatusBar barStyle={'dark-content'} backgroundColor="#0E8CFE" />

    <Stack.Navigator
      screenOptions={{
        headerTitle: '',
        headerStyle: {
          elevation: 0,
          backgroundColor: '#E3F1FA',
          height: 60,
        },
        headerLeft: () => (
          <Neomorph
            swapShadows // <- change zIndex of each shadow color
            style={{
              shadowRadius: 7,
              borderRadius: 20,
              backgroundColor: '#E3F1FA',
              width: 40,
              height: 40,
              marginLeft: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <HeaderBackButton
              onPress={() => {
                navigation.goBack();
              }}
            />
          </Neomorph>
        ),
      }}>
      <Stack.Screen name="Auth" component={DrawerAuth} />
      <Stack.Screen name="Info" component={DrawerInfo} />
      <Stack.Screen name="OrderHistory" component={DrawerOrderHistory} />
      <Stack.Screen name="ForgotPassword" component={DrawerForgotPass} />
    </Stack.Navigator>
  </SafeAreaView>
);

export default Drawer;
