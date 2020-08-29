/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';

const DrawerButton = (
  {navigation, title, screen, marginVertical} = this.props,
) => (
  <TouchableOpacity
    onPress={() => navigation.navigate('Drawer', {screen: screen})}>
    <Neomorph
      swapShadows // <- change zIndex of each shadow color
      style={{
        shadowRadius: 10,
        borderRadius: 10,
        backgroundColor: '#E3F1FA',
        width: 220,
        height: 60,
        marginVertical: marginVertical || 10,
        justifyContent: 'center',
      }}>
      <Text style={{color: 'gray', fontSize: 25, marginLeft: 20}}>{title}</Text>
    </Neomorph>
  </TouchableOpacity>
);

export default DrawerButton;
