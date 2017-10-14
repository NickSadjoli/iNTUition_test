import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
const util = require('util');


export default class HomePage extends React.Component {
	static navigationOptions = {
		title: "Home screen"
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
