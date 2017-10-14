import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { TabNavigator } from 'react-navigation';
//import { SearchPage } from './search_page';
//import { Login } from '../login/login';

const util = require('util');

export class SearchPage extends React.Component {
	static navigationOptions = {
		title: "Search Page"
	};
	render() {
		var {params} = this.props.navigation.state;
		return (
			<View>
				<Text> Testing Home page </Text>
				<Text> Params: {params.name}, email = {params.email}</Text>
			</View>
		);
	}
}
