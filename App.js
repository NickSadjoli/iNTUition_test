import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

import { StackNavigator } from 'react-navigation';
import Login from './src/login/login'
import Found from './src/found/found'
import Group from './src/found/group'
import HomePage from './src/Home_page/Home_page'

const Navigation = StackNavigator({
  Found: {screen: Found},
  Group: {screen: Group},
  Login: {screen: Login},
  HomePage: {screen: HomePage},
  //Found: {screen: Found},


});

export default Navigation;

/*
export default class App extends React.Component {

  render() {

    return (

    );
  }
}
*/
