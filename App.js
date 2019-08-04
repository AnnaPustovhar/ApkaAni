import React, {Fragment} from 'react';
import {SafeAreaView, Image, StyleSheet, ScrollView, View, Text, StatusBar,} from 'react-native';
import {Header, Colors, } from 'react-native/Libraries/NewAppScreen';

// const HeaderMy = () => (
//   <ImageBackground
//     accessibilityRole={'image'}
//     source={require('./logo.png')}
//     style={styles.background}
//     imageStyle={styles.logo}>
//     <Text style={styles.tFext}>Siema tu Ania</Text>
//   </ImageBackground>
// );

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic"  style={styles.scrollView}>
    <Image style={styles.imgAnia} source={require('./src/Ania.jpg')} />

          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>  Czesc jestem Ania</Text>
              <Text style={styles.sectionDescription}>
                A to jest moja apka
              </Text>
            </View>


          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor:'#cccc',
  },
  imgAnia:{
    width: 100,
    height:100,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor:'#ccc',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    backgroundColor:'red',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
    backgroundColor:'pink',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
    
  },
});

export default App;
