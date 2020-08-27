/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {DrawerItem} from '@react-navigation/drawer';

const Home = ({navigation}) => {
  const [isSignIn, setIsSignIn] = useState(true);
  const isSignInJSX = (
    <SafeAreaView style={{flex: 1}}>
      <DrawerItem
        label="Info"
        onPress={() => navigation.navigate('Drawer', {screen: 'Info'})}
      />
      <DrawerItem
        label="Order History"
        onPress={() => navigation.navigate('Drawer', {screen: 'OrderHistory'})}
      />
      <DrawerItem label="Sign Out" onPress={() => setIsSignIn(false)} />
    </SafeAreaView>
  );

  const isSignOutJSX = (
    <SafeAreaView style={{flex: 1}}>
      <DrawerItem
        label="Sign In"
        onPress={() => navigation.navigate('Drawer', {screen: 'Auth'})}
      />
    </SafeAreaView>
  );

  const MainJSX = isSignIn ? isSignInJSX : isSignOutJSX;

  return MainJSX;
};

export default Home;
