import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

import { StackNavigator} from 'react-navigation';
import  Login  from './src/login/login';
import {ScreenNavigator} from './src/HomePage/HomePage';

import firebase from 'firebase';

class App extends React.Component {
  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyBZmUiXalld1BGOOCjkgJbdzT5u1CrUCt4",
      authDomain: "vouchtogether-5dd86.firebaseapp.com",
      databaseURL: "https://vouchtogether-5dd86.firebaseio.com",
      projectId: "vouchtogether-5dd86",
      storageBucket: "vouchtogether-5dd86.appspot.com",
      messagingSenderId: "402729487258"
    });
  }
}

const Navigation = StackNavigator({
  Login: {screen: Login},
  HomePage: { screen: ScreenNavigator },

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
