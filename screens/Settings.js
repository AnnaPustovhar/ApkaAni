import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Image  } from 'react-native';



export class Settings extends Component {
  static navigationOptions = {
    headerMode: 'float',
    title: `home`,
    
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Button onPress={() => this.props.navigation.navigate('Home')} title="Home"/>
        <Image style={styles.imgLogo} source={require('../src/logo.png')} />
        
      </View>

    )
  }
}




const styles = StyleSheet.create ({
container: {
flex:1,
backgroundColor: "#fff",
justifyContent:"center",
alignItems:"center"
},

imgLogo:{
  width: 100,
  height:100,
},

})

export default Settings;