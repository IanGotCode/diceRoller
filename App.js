import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';

export default class App extends React.Component {
  playButtonPressed = () => {
    Alert.alert("Hey")
  }
  render(){
    return (
      <View style={styles.container}>
        <Image 
        source={require('./src/images/dice1.png')}
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
