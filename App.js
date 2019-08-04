import React, {Fragment} from 'react';
import {SafeAreaView, Image, StyleSheet, ScrollView, View, Text, StatusBar,} from 'react-native';
import {Header, Colors, } from 'react-native/Libraries/NewAppScreen';


const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
   
        <ScrollView contentInsetAdjustmentBehavior="automatic"  style={styles.scrollView}>
          <Image style={styles.imgAnia} source={require('./src/Ania.jpg')} />
 
          <Text>Hi My name is Ania</Text>

        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignItems: 'center',

  },
  scrollView: {
    flexGrow : 1, 
    width: '100%',
    height:'100%',
    
  },
  imgAnia:{
    width: 100,
    height:100,
  },

});

export default App;
