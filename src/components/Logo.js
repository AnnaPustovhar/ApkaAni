
import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, StatusBar, Image } from 'react-native';

export default class Logo extends Component <{}> {
    render(){
        return(
         <View style={styles.container}>
            <Image style={{width:80, height:80}} 
            source={require('../img/logo.png')}/>
        <Text style={styles.logoText}>Anna's first app</Text>
        </View>
        )
    }
}

const styles =  StyleSheet.create ({
    container : {
        flexGrow: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
      
    },
    logoText : {
        fontSize: 10,
        color : 'rgba(0, 0, 153, 0.4)',
        textShadowOffset: {width: -3, height: 2},
        textShadowRadius: 13
    }
})
