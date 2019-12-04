import React, { Component } from 'react';
import { View, Image, Text, Button, StyleSheet, TouchableOpacity, AppRegistry } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';


class HomeScreen extends Component  {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
    <View style={styles.container}>
      
       <TouchableOpacity activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('CameraScreen')} title="Came">
           <Image source={require('../src/Avatar.jpg')} style = {styles.ImageClass}/>
       </TouchableOpacity>
      <View style={styles.SeparatorLine} />
      <Button  style={Button} onPress={() => this.props.navigation.navigate('ActionButton')} title="ActionButton"/>
      
    </View>
    )
  }
}



const styles = StyleSheet.create ({
  
container:
{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},

   SeparatorLine: {
    backgroundColor: '#fff',
    width: 1,
    height: 20,
  },
   
  
  ImageClass:
   {
     width: 80,
     height: 80,
     borderRadius: 125,
     borderWidth: 2,
     borderColor: 'grey',
    
   },

   Button: {
    color: 'red'
  }

   
 

})


export default HomeScreen;