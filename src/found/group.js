import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
const util = require('util');


export default class Group extends React.Component {
	static navigationOptions = {
		title: "hello"
	};
	render() {
		var {params} = this.props.navigation.state;
		return (
			<View>
				<Text> Testing Home page </Text>
				<Text> Maximum pieces to buy: {params.max-params.alloc}</Text>
        <Text> Enter piece to buy:</Text>
        {/*<TextInput
 style={styles.textInput}
 keyboardType = 'numeric'
 onChangeText = {(text)=> this.onChanged(text)}
 value = {this.state.myNumber}
 maxLength = {params.max}  //setting limit of input
*/}
			</View>
		);
	}
}
