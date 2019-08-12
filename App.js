import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Switch} from 'react-native';

export default class ApkaAni extends Component <{}> {

    constructor(props){
        super(props)
        this.state = {
            switchValue : false
        }
    }

switchChange(switchValue) {
    this.setState({
        switchValue
    })
}

 render(){
        return(
            <View style={styles.container}>
                <Switch value={this.state.switchValue} onValueChange={(value) =>{
                    this.switchChange(value)
                }}/> 
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
  });
AppRegistry.registerComponent('ApkaAni', () => ApkaAni);