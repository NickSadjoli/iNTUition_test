import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
const util = require('util');


export default class Group extends React.Component {
  state = {
    inputValue: "You can change me!"
  };

  _handleTextChange = inputValue => {
    this.setState({ inputValue });
  };

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
        <TextInput
          value={this.state.inputValue}
          onChangeText={this._handleTextChange}
          keyboardType={'numeric'}
          style={{ width: 200, height: 44, padding: 8 }}
        />
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
