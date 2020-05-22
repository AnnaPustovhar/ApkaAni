import React ,{ Component } from 'React';
import { StyleSheet, Text, View } from 'react-native';
// import InitialNavigator from './screens/InitialNavigator';
//import SplashScreen from './screens/SplashScreen';
import Nav from './screens/Navigator';

export default class App extends Component {

  render() {
    return (
        // <InitialNavigator />
          <Nav />  
    );
  }
}