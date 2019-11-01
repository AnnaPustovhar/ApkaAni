import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Image  } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class App extends Component {
  state = {
    avatarSource: null
  }

  selectImage = async () => {
    ImagePicker.showImagePicker({noData:true, mediaType:'photo'}, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        
    
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    
        this.setState({
          avatarSource: response.uri,
        });
      }
    });

  }
render () {
  return (
    <View style={styles.container}>
      {
        this.state.avatarSource && <Image source={{uri:this.state.avatarSource}} style={{width:80, height:200, resizeMode:'contain'}}/>
      }
     <Button title="Select image" onPress={this.selectImage}/>
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

});















