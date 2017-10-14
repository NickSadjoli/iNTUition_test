import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';



const util = require('util');

export class HomeActual extends React.Component {
	static navigationOptions = {
		header: null,
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