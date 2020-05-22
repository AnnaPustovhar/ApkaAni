import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback, Animated } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Cam extends Component {
  state = {
    avatarSource: null
  }

  handleAddImagePicker() {

    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
    
  }
  
  handleAddGalery () {
  ImagePicker.openPicker({
    multiple: true
  }).then(images => {
    console.log(images);
  });

}
        
render () {
  return (
    <View style={styles.container}>
      {
        this.state.avatarSource && <Image source={{uri:this.state.avatarSource}} style={{width:80, height:200, resizeMode:'contain'}}/>
      } 

      <TouchableOpacity  style={styles.Avatar} onPress={this.handleAddImagePicker}>
           <Image source={require('../src/Avatar.jpg')} style = {styles.ImageClass}/>
     </TouchableOpacity> 
     
     <TouchableOpacity  style={styles.Avatar} onPress={this.handleAddGalery}>
           <Image source={require('../src/Avatar.jpg')} style = {styles.ImageClass}/>
     </TouchableOpacity> 
     
      {/* <TouchableWithoutFeedback onPress={this.selectImage}>
      <Animated.View style={styles.Button}>
            <Icon name='camera'color='black'size={10}/>
      </Animated.View>
      </TouchableWithoutFeedback>  */}

    </View>
  );
}
}



const styles = StyleSheet.create ({
  
  container: {
    flex:1,
    backgroundColor: "#fff",
    justifyContent:"center",
    alignItems:"center"
    },

    ImageClass:
   {
     width: 80,
     height: 80,
     borderRadius: 125,
     borderWidth: 2,
     borderColor: 'grey',
     shadowColor: '#000',
     shadowOffset: { width: 0, height: 2 },
     shadowOpacity: 0.8,
     shadowRadius: 5,
     marginLeft: 10,
     marginRight: 5,
     marginTop: 10,
   },

   Avatar:
   {
    top: 200,
    
    
   },



   Button:{
    height: 25,
    width: 25,
    borderRadius: 200,
    position: 'absolute',
    top: 75,
    right: 155,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#DCDCDC',
    borderColor: "white",
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
   


});















