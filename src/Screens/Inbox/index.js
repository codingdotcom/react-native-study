import React, { Component } from 'react';
import {StyleSheet, View, Text } from 'react-native';

class Inbox extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Inbox </Text>
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

export default Inbox;