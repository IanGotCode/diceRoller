import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Image 
        source={require('./src/images/dice1.png')}
        />
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
});
