import React from 'react';
import {Image, ImageBackground, StyleSheet, ScrollView, View, Text, StatusBar,} from 'react-native';


const App = () => {
  
  return (
    <ImageBackground  source={require('./src/coffee.jpg')} style={styles.container}>
      <StatusBar barStyle="dark-content" /> 
   
        <ScrollView  contentInsetAdjustmentBehavior="automatic"  style={styles.scrollView}> 
          
          <View style={styles.scrollwidth}>
            
            <Image style={styles.imgAnia} source={require('./src/Ania.jpg')} />

            
            <Text>Hi My name is Ania P</Text>

          </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollwidth:{
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: { 
    width: '100%',
    height:'100%',
  },
  imgAnia:{
    width: 200,
    height:200,
  },

});

export default App;
