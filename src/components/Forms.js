
import React, {Component} from 'react';
import { Text, View, StyleSheet,  TextInput, TouchableOpacity } from 'react-native';

export default class Logo extends Component <{}> {



    render(){
        return(
         <View style={styles.container}>
             <TextInput style={styles.inputBox} 
                    underlineColorAndroid='rgba(0,0,0,0)' 
                    placeholder="E-mail"
                    placeholderTextColor= 'rgb(230, 245, 244)'             
                  />
              <TextInput style={styles.inputBox} 
                 underlineColorAndroid='rgba(0,0,0,0)' 
                 placeholder="Password"
                 secureTextEntry={true}
                 placeholderTextColor='rgb(230, 245, 244)'             
                  />
             <TouchableOpacity style={styles.button}> 
                 <Text style= {styles.buttonText}>{this.props.type}</Text>
             </TouchableOpacity>
        </View>
        )
    }
}

const styles =  StyleSheet.create ({
    container : {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
      
    },
    
    inputBox: {
        width : 300,
        backgroundColor: 'rgba(62, 183, 194, 0.6)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color : 'rgb(230, 245, 244)',
        marginVertical: 7

    },

    button: {
      width: 300,
      backgroundColor:'rgba(23, 83, 82, 0.6)',
      borderRadius:25,
      marginVertical: 10,
      paddingVertical: 12

    },
    
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: 'rgb(230, 245, 244)',
        textAlign: 'center'
    
    }
   
})
