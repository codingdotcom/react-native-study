/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './src/Screens/Home';
import Explore from './src/Screens/Explore';
import Saved from './src/Screens/Saved';
import Inbox from './src/Screens/Inbox';

const tabIconWidth = 22;
const tabIconHeight = 22;

const tabActiveColor = '#e91e63';
const tabInActiveColor = '#464444';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

class App extends Component {
  render() {
    return (
      /********************/
      /** 기본 네비게이션 뷰 **/
      /********************/

      // <NavigationContainer>
      //   {
      //     <Tab.Navigator
      //       initialRouteName="Home"
      //       tabBarOptions={{
      //         activeTintColor: tabActiveColor,
      //         inactiveTintColor: tabInActiveColor,
      //         labelStyle: {fontSize: 10},
      //       }}>
      //       <Tab.Screen
      //         name="Home"
      //         component={Home}
      //         options={{
      //           tabBarLabel: 'Home',
      //           tabBarIcon: ({focused}) => (
      //             <Image
      //               source={
      //                 focused
      //                   ? require('./Assets/Icons/home.png')
      //                   : require('./Assets/Icons/home_out_line.png')
      //               }
      //               style={{
      //                 width: tabIconWidth,
      //                 height: tabIconHeight,
      //                 tintColor: focused ? tabActiveColor : tabInActiveColor,
      //               }}
      //             />
      //           ),
      //         }}
      //       />
      //       <Tab.Screen
      //         name="Explore"
      //         component={Explore}
      //         options={{
      //           tabBarLabel: 'Explore',
      //           tabBarIcon: ({focused}) => (
      //             <Image
      //               source={
      //                 focused
      //                   ? require('./Assets/Icons/explore.png')
      //                   : require('./Assets/Icons/explore_out_line.png')
      //               }
      //               style={{
      //                 width: tabIconWidth,
      //                 height: tabIconHeight,
      //                 tintColor: focused ? tabActiveColor : tabInActiveColor,
      //               }}
      //             />
      //           ),
      //         }}
      //       />
      //       <Tab.Screen
      //         name="Saved"
      //         component={Saved}
      //         options={{
      //           tabBarLabel: 'Saved',
      //           tabBarIcon: ({focused}) => (
      //             <Image
      //               source={
      //                 focused
      //                   ? require('./Assets/Icons/save.png')
      //                   : require('./Assets/Icons/save_out_line.png')
      //               }
      //               style={{
      //                 width: tabIconWidth,
      //                 height: tabIconHeight,
      //                 tintColor: focused ? tabActiveColor : tabInActiveColor,
      //               }}
      //             />
      //           ),
      //         }}
      //       />
      //       <Tab.Screen
      //         name="Inbox"
      //         component={Inbox}
      //         options={{
      //           tabBarLabel: 'Inbox',
      //           tabBarIcon: ({focused}) => (
      //             <Image
      //               source={
      //                 focused
      //                   ? require('./Assets/Icons/inbox.png')
      //                   : require('./Assets/Icons/inbox_out_line.png')
      //               }
      //               style={{
      //                 width: tabIconWidth,
      //                 height: tabIconHeight,
      //                 tintColor: focused ? tabActiveColor : tabInActiveColor,
      //               }}
      //             />
      //           ),
      //         }}
      //       />
      //     </Tab.Navigator>
      //   }
      // </NavigationContainer>

      /****************************/
      /** reanmation2 사용한 탭메뉴 **/
      /***************************/
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Explore" component={Explore} />
          <Tab.Screen name="Saved" component={Saved} />
          <Tab.Screen name="Inbox" component={Inbox} />
        </Tab.Navigator>
      </NavigationContainer>
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
});

export default App;
