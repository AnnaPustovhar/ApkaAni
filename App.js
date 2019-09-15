
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { createStackNavigator, createAppContainer} from "react-navigation";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
          title="go to first page"
           onPress={()=>this.props.navigation.navigate('About')}         
        />
         </View>
    );
  }
}

class AboutScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>first page</Text>
        </View>
      );
    }
  }

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },


});

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create ({
    container: {
        flex:1,
        backgroundColor: "#fff",
        justifyContent:"center",
        alignItems:"center"
    },
})