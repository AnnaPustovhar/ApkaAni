import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import AppNavigator from './Navigator';
import SplashScreen from './SplashScreen';

const InitialNavigator = createSwitchNavigator({
    Splash: SplashScreen,
    App: AppNavigator
  });
  
  export default createAppContainer(InitialNavigator);
  