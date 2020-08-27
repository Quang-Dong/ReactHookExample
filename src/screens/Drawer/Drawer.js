import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import DrawerInfo from './Info/Info';
import DrawerOrderHistory from './OrderHistory/OrderHistory';
import DrawerAuth from './Auth/Auth';

import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Drawer = ({navigation}) => (
  <SafeAreaView style={{flex: 1}}>
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <HeaderBackButton
            onPress={() => {
              navigation.goBack();
            }}
          />
        ),
      }}>
      <Stack.Screen name="Auth" component={DrawerAuth} />
      <Stack.Screen name="Info" component={DrawerInfo} />
      <Stack.Screen name="OrderHistory" component={DrawerOrderHistory} />
    </Stack.Navigator>
  </SafeAreaView>
);

export default Drawer;
