import React, { Component } from 'react';
import {StyleSheet, View, Text } from 'react-native';

class Saved extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Saved </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default Saved;