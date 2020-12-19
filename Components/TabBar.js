import React, {Component, useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import {Transition, Transitioning} from 'react-native-reanimated';

import TabIcon from '../Assets/Icons';

const bgColors = {
  Home: '#FF7272',
  Explore: '#FF35F9',
  Saved: '#356FFF',
  Inbox: '#35CBFF',
};

const textColors = {
  Home: 'white',
  Explore: 'white',
  Saved: 'white',
  Inbox: 'white',
};

function TabBar({label, image, accessibilityState, onPress}) {
  const focused = accessibilityState.selected;
  const icon = !focused
    ? TabIcon.icons[image]
    : TabIcon.icons[`${image}Focused`];

  const transition = (
    <Transition.Sequence>
      <Transition.Out type="fade" durationMs={0} />
      <Transition.Change interpolation="easeInOut" durationMs={100} />
      <Transition.In type="fade" durationMs={10} />
    </Transition.Sequence>
  );

  const ref = useRef();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        ref.current.animateNextTransition();
        onPress();
      }}>
      <Transitioning.View
        focused={focused}
        label={label}
        ref={ref}
        transition={transition}
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: focused ? bgColors[label] : 'white',
          borderRadius: 100,
          margin: 6,
        }}>
        <Image
          source={icon}
          style={{
            width: 18,
            height: 18,
            tintColor: focused ? textColors[label] : 'black',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
        {focused && (
          <Text
            style={{
              color: focused ? textColors[label] : 'black',
              marginLeft: 5,
              fontSize: 12,
            }}>
            {label}
          </Text>
        )}
      </Transitioning.View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TabBar;
