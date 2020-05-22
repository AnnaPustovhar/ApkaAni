import React, { Component } from 'react';
import { View, Image,  StyleSheet, TouchableOpacity,Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CalendarList} from 'react-native-calendars';
import NavButton from './ActionButton';

class HomeScreen extends Component  {
   static navigationOptions = {
    header: null,
   }
 

  render() {
    return (
    <View style={styles.container}>
        <View style={styles.Header}>
            <Icon name='bars' style={styles.Bars} size={21} />
        </View>

         <View style={styles.ViewOne}>
             <TouchableOpacity style={styles.Avatar} activeOpacity = { .5 } onPress={() => this.props.navigation.navigate('CameraScreen')} title="Came">
               <Image source={require('../src/Avatar.jpg')} style = {styles.ImageClass}/>
             </TouchableOpacity>
         </View>
    
         <CalendarList style={styles.Calendar}
         // Callback which gets executed when visible months change in scroll view. Default = undefined
        onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
        // Max amount of months allowed to scroll to the past. Default = 50
       // pastScrollRange={4}
        // Max amount of months allowed to scroll to the future. Default = 50
        // futureScrollRange={2}
         // Enable or disable scrolling of calendar list
        // scrollEnabled={true}
         // Enable or disable vertical scroll indicator. Default = false
        // showScrollIndicator={true}
         />
          <NavButton style={styles.ViewTwo} />  
        
    </View>
    )
  }
}


const styles = StyleSheet.create ({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  Avatar:{
    top: 10,
    backgroundColor: 'black',
    position: 'absolute',
  },
  ImageClass:{
    width: 80,
    height: 80,
    borderRadius: 125,
    borderWidth: 2,
    borderColor: 'grey',
  },
  Bars:{
    position: 'absolute',
    right : 7,
  },
  Header: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 30,
  backgroundColor: 'white'
  },
  ViewOne:{
    position: 'absolute',
    top: 25,
    width: '100%',
    height: 90,
    backgroundColor: 'red',
    alignItems: 'center',
  },
  Calendar :{
    //position : 'absolute',
    top : 110,
    width: '100%'   },
    ViewThree:{
    width: '100%',
    backgroundColor: 'red',
  },
  ViewTwo:{
    position: 'absolute',
    bottom: 10,
    right: 10,   
    width: '100%',
    height: 300,
  },
})


export default HomeScreen;