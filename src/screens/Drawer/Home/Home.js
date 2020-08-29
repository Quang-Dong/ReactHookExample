/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar, Text, Pressable} from 'react-native';

import styles from './DrawerHomeStyle';
import DrawerButton from '../../../modules/DrawerButton';

import {Neomorph} from 'react-native-neomorph-shadows';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Home = ({navigation}) => {
  const [isSignIn, setIsSignIn] = useState(true);

  //Sign In JSX
  const isSignInJSX = (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor="#E3F1FA" />

      <Neomorph
        swapShadows // <- change zIndex of each shadow color
        style={{
          shadowOpacity: 0.2,
          shadowRadius: 10,
          borderRadius: 80,
          backgroundColor: '#E3F1FA',
          width: 160,
          height: 160,
          marginVertical: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon name="user-circle" size={140} color="gray" />
      </Neomorph>
      <Text style={{fontSize: 20, color: 'gray', marginVertical: 10}}>
        Trinh Quang Dong
      </Text>
      <DrawerButton navigation={navigation} title="Infomation" screen="Info" />
      <DrawerButton
        navigation={navigation}
        title="Order History"
        screen="OrderHistory"
      />

      <Pressable onPress={() => setIsSignIn(false)}>
        {({pressed}) => (
          <Neomorph
            inner={pressed ? true : false}
            swapShadows // <- change zIndex of each shadow color
            style={styles.neomorph}>
            <Text style={styles.txt}>Sign Out</Text>
          </Neomorph>
        )}
      </Pressable>
    </SafeAreaView>
  );
  //Sign Out JSX
  const isSignOutJSX = (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor="#E3F1FA" />
      <DrawerButton
        navigation={navigation}
        title="Sign in"
        screen="Auth"
        marginVertical={50}
      />
    </SafeAreaView>
  );

  const MainJSX = isSignIn ? isSignInJSX : isSignOutJSX;

  return MainJSX;
};

export default Home;
