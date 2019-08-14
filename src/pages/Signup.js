
import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, StatusBar, Image } from 'react-native';

import Logo from '../components/Logo';
import Forms from '../components/Forms' 

export default class Signup  extends Component <{}> {
    render () {
        return (
            <View style={styles.container}> 
                <Logo/>
                <Forms type="Sign up"/>
                <View style={styles.signupTextCont}> 
                    <Text style={styles.signupText}> Already have an account? </Text>
                    <Text style={styles.signupButton} > Sign in</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor : '#1d9ea9',
        flex : 1,
        alignItems : 'center',
        justifyContent: 'center'
    } ,
    signupTextCont: {
        flexGrow : 1,
        alignItems : 'flex-end',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection: 'row'

    },
    
    signupText: {
        color: 'rgb(230, 245, 244)',
        fontSize: 16

    },

    signupButton: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '700',
        
    
    }

});