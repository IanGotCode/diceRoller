import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      uri: require('./src/images/dice1.png')
    }
  }

  getRandomValue = () => {
   return Math.floor(Math.random() * 6) + 1
  }

  playButtonPressed = () => {
    Alert.alert("Hey" + this.getRandomValue())
  }
  render(){
    return (
      <View style={styles.container}>
        <Image 
        source={this.state.uri}
        />
        <TouchableOpacity
        onPress={this.playButtonPressed}
        >
          <Text style={styles.gameButton}>Play Game</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D63031',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameButton: {
    marginTop: 35,
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    borderWidth: 2,
    paddingVertical: 8,
    paddingHorizontal: 40,
    borderRadius: 5,
    borderColor: "#fff"
  }
});
