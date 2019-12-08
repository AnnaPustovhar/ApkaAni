import React, { Component } from 'react';
import { View, Image, Text, Button, StyleSheet, TouchableOpacity, AppRegistry } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import NavButton from './ActionButton';

class HomeScreen extends Component  {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
    <View style={styles.container}>
      
       <TouchableOpacity style={styles.Avatar} activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('CameraScreen')} title="Came">
           <Image source={require('../src/Avatar.jpg')} style = {styles.ImageClass}/>
       </TouchableOpacity>

      <View style={styles.ViewOne}></View> 
      {/* <View style={styles.ViewTwo}> */}
        <NavButton style={styles.ViewTwo} />  
      {/* </View>  */}

     {/*<Button  style={Button} onPress={() => this.props.navigation.navigate('ActionButton')} title="ActionButton"/> */}

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

    Avatar:
 {
  top: -250
 },
  
  ImageClass:
   {
     width: 80,
     height: 80,
     borderRadius: 125,
     borderWidth: 2,
     borderColor: 'grey',
   },

  //  ViewOne:{
  //   backgroundColor: 'white',
  //    width: '100%',
  //    height: 80,
  //  },

   ViewTwo:{
     position: 'absolute',
     bottom: 10,
     right: 10,    },


})


export default HomeScreen;