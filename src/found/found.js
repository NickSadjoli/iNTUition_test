import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
const util = require('util');

export class Group extends React.Component {
	static navigationOptions = {
		title: "hello"
	};
	render() {
		//var {params} = this.props.navigation.state;
		return (
			<View>
				<Text> Testing Home page </Text>
			//	<Text> Maximum pieces to buy: {params.max-params.alloc}</Text>
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
export default class Found extends React.Component {
	static navigationOptions = {
		title: "Halloween Horror Nights"
	};
	render() {
		//var {params} = this.props.navigation.state;
    var {navigate} = this.props.navigation;
		return (
			<View>
				<Text>Halloween Horror Nights Ticket </Text>
				<Text> 2017</Text>
      {/*  <Button
          onPress={() => navigate("Group", {alloc=2, max=4})}
          title="2/4 Full"
        />
        <Button
          onPress={() => navigate("Group", {alloc=3, max=4})}
          title="3/4 Full"
        />*/}
        <Button
					raised
            		textStyle={{textAlign: 'center'}}
            		title={`3 out of 4 signed in`}
                  onPress = {
                    () => navigate("Group", {alloc:"3", max:"4"})
                  }
          		/>
              <Button
      					raised
                  		textStyle={{textAlign: 'center'}}
                  		title={`2 out of 4 signed in`}
                        onPress = {
                          () => navigate("Group", {alloc:"2", max:"4"})
                        }
                		/>
			</View>
		);
	}
}
