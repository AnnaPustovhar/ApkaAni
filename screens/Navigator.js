import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import Camera from './Camera';
import HomeScreen from './Home';
import ActionButton from './ActionButton';

const AppNavigator = createStackNavigator({
  
    Home: { 
        screen: HomeScreen,
    },
   CameraScreen: { 
      screen: Camera,
      headerBackTitleVisible: true ,  // - ?
  },

  ActionButton: {
      screen : ActionButton,
      
  },

  
 

  });



  const Nav = createAppContainer(AppNavigator);
  export default Nav;