/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import AuthSignIn from './SignIn/SignIn';
import AuthSignUp from './SignOut/SignUp';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Auth = () => {
  const [SignIn, setSignIn] = useState(true);

  const MainJSX = SignIn ? <AuthSignIn /> : <AuthSignUp />;

  return (
    <SafeAreaView style={{flex: 1}}>
      {MainJSX}
      <TouchableOpacity onPress={() => setSignIn(!SignIn)}>
        <Text>Click Me</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Auth;
