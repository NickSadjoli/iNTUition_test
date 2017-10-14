import React from 'react';
import { Platform, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

import { TabNavigator } from 'react-navigation';
import  {SearchPage} from './SearchPage';
//import { Login } from '../login/login';
import {HomeActual} from './HomeActual';
//import { Navigation } from '../../App';

const util = require('util');


export const ScreenNavigator = TabNavigator({
	Search: { 
		screen: SearchPage,
		navigationOptions: {
			tabBarLabel: 'Search',
			tabBarIcon: ({ tintColor}) => (
				<Image
					source={require('../images/search.png')}
					style={[styles.icon1, {tintColor: tintColor}]}
				/>
			)

		} 
	},
	Home: { 
		screen: HomeActual,
		navigationOptions: {
			tabBarLabel: 'Home',
			tabBarIcon: ({ tintColor}) => (
				<Image
					source={require('../images/Home.png')}
					style={[styles.icon2, {tintColor: tintColor}]}
				/>
			)

		}  }, 
	
});

export default ScreenNavigator;

const styles = StyleSheet.create({

  icon1: {
  	width: 50,
  	height: 50
  },

  icon2: {
  	width: 30,
  	height: 30
  }

});



