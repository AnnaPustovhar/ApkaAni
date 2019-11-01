import React, { Component } from 'react';
import { View, Image, Text, Button, StyleSheet, TouchableOpacity, AppRegistry } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (

  <View style={styles.container}>
      
<TouchableOpacity activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('SettingScreen')} title="Settings"
>
 <Image source={require('../src/Avatar.jpg')} style = {styles.ImageClass}/>
</TouchableOpacity>
<View style={styles.SeparatorLine} />

        <Button  style={Button} onPress={() => this.props.navigation.navigate('CatalogScreen')} title="Catalog"/>
      </View>
    )
  }
}



const styles = StyleSheet.create ({
  container: {
    flex:1,
        backgroundColor: "#fff",
        justifyContent:"center",
        alignSelf:"center",
        flexDirection: "column",
        padding:100
       


    },


    title: {
      color: '#41cdf4',

   },
   
   
   ImageClass:
   {
     width: 80,
     height: 80,
     borderRadius: 125,
     borderWidth: 2,
     borderColor: 'grey'
   },


   SeparatorLine: {
    backgroundColor: '#fff',
    width: 1,
    height: 20,
  },

  Button: {
    color: 'red'
  }





})


export default HomeScreen;