import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';



 class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      
      <View style={styles.container}>
       <Button
       color="#f194ff"
       onPress={() => this.props.navigation.navigate('SettingScreen')} title="Settings"/>
        
        <Button onPress={() => this.props.navigation.navigate('CatalogScreen')} title="Catalog"/>
      </View>
    )
  }
}



const styles = StyleSheet.create ({
  container: {
    flex:1,
        backgroundColor: "#fff",
        justifyContent:"center",
        alignItems:"flex-start",
        flexDirection: "column",
        
        
      
    },
   
   
    title: {
      color: '#41cdf4',
      
   },

})


export default HomeScreen;