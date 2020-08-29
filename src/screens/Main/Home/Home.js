/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home = () => (
  <SafeAreaView style={{flex: 1}}>
    <StatusBar barStyle={'dark-content'} backgroundColor="#0E8CFE" />

    <Text>MainHome</Text>
  </SafeAreaView>
);

export default Home;
