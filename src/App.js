import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import ScreenMain from './screens/Main/Main';
import ScreenDrawer from './screens/Drawer/Drawer';
import DrawerHome from './screens/Drawer/Home/Home';

const Drawer = createDrawerNavigator();

const App = () => (
  <SafeAreaView style={{flex: 1}}>
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerHome {...props} />}>
        <Drawer.Screen name="Main" component={ScreenMain} />
        <Drawer.Screen name="Drawer" component={ScreenDrawer} />
      </Drawer.Navigator>
    </NavigationContainer>
  </SafeAreaView>
);

export default App;
