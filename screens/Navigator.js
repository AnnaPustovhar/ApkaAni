import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import Settings from './Settings';
import HomeScreen from './Home';
import Catalog from './Catalog';

const AppNavigator = createStackNavigator({
  
  Home: { 
      screen: HomeScreen,
  },

  SettingScreen: { 
      screen: Settings,
      headerBackTitleVisible: false
  },

  CatalogScreen : {
    screen : Catalog
  },

 

  });



  const Nav = createAppContainer(AppNavigator);
  export default Nav;