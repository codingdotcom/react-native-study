import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';

function Label({label}) {
  retun(<Text>{label}</Text>);
}

class TabBar extends Component {
  render() {
    return (
      <TouchableWithoutFeedback>
        <View styles={styles.container}>
          <Image />
          <Label />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {},
  icon: {},
  text: {},
});

export default TabBar;
