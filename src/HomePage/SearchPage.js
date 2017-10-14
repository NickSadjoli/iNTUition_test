import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import Found from '../found/found'
import Group from '../found/group'
import Voucher from '../found/voucher'
import { StackNavigator } from 'react-navigation';
//import { SearchPage } from './search_page';
//import { Login } from '../login/login';

const SearchNav = StackNavigator({

	Voucher: {
		screen: Voucher,
		navigationOptions:{
			header: null,
		}
	},

  	Found: {
  		screen: Found,
  		navigationOptions: {
  			header: null,
  		}
  	},

  	Group: {
  		screen: Group,
  		navigationOptions: {
  			header: null,
  		}
  	},
});

export default SearchNav;
