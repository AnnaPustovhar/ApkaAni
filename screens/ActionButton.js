import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Animated, TouchableOpacity, TouchableWithoutFeedback, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



export default class App extends React.Component{
  animation = new Animated.Value (0);
  toggleMenu = () => {
    const toValue = this.open ? 0 : 1;
 
    Animated.spring(this.animation, {
      toValue,
      friction: 5
   }).start();
 
    this.open = !this.open;

  
    
    
  };
   
 
  render() {
    const calendarStyle = {
    transform: [
        { scale: this.animation},
          {
            translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -80]
          })
        }
      ]
    };
    const homeStyle = {
      transform: [
          { scale: this.animation},
            {
              translateY: this.animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, -140]
            })
          }
        ]
      };

      const chatStyle = {
        transform: [
            { scale: this.animation},
              {
                translateY: this.animation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -200]
              })
            }
          ]
        };

    const rotation = {
      transform: [
        {
          
          rotate: this.animation.interpolate({

            inputRange: [0, 1],
            outputRange: ["0deg", "45deg"]
          })
        }
      ]

    }
    return (
          <View style={[styles.container, this.props.style]}>
             

              <TouchableWithoutFeedback>
                   <Animated.View style={[styles.button, chatStyle]}>
                      <Icon name='comments'color='#f50'size={20}/>
                   </Animated.View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback>
                   <Animated.View style={[styles.button, homeStyle]}>
                      <Icon name='home'color='#f50'size={20}/>
                   </Animated.View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback>
                   <Animated.View style={[styles.button, calendarStyle]}>
                      <Icon name='calendar'color='#f50'size={20}/>
                   </Animated.View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={this.toggleMenu}>
                   <Animated.View style={[styles.button, rotation]}>
                       <Text style={styles.text}>+</Text>
                   </Animated.View>
              </TouchableWithoutFeedback>
          </View>
    );
  }
}
const styles = StyleSheet.create({
    button:{
    height: 50,
    width: 50,
    borderRadius: 200,
    position: 'absolute',
    bottom: 20,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    
  },
  text:{
    fontSize:40,
    color:'green'
  },


});


