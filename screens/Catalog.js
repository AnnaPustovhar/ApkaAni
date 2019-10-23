import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'


export class Catalog extends Component {
  static navigationOptions = {
    header: null,
  } 
  render() {
    return (
      <View style= {styles.container}>
       <Icon.Button name='facebook' onPress={() => this.props.navigation.navigate('Home')} />
    <Icon name='home' size={32} />
      </View>

    )
  }
};

const styles = StyleSheet.create ({
  container: {
    flex:1,
        backgroundColor: "#fff",
        justifyContent:"center",
        alignItems:"center"
    },
})
export default Catalog;