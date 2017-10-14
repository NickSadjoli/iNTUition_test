import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
//import { TabNavigator } from 'react-navigation';
import SearchPage  from './SearchPage';

export class HomeActual extends React.Component {
	static navigationOptions = {
		title: "Home Screen"
	};
	render() {
		var {params} = this.props.navigation.state;
		var {navigate} = this.props.navigation;
		return (
			<View>
				<Text> Testing Home page </Text>
				<Text> Params: {params.name}, email = {params.email}</Text>
				{/*
				<Button 
					raised
            		textStyle={{textAlign: 'center'}}
            		title={`Back`}
            		onPress = {
            			() => navigate("Login", {})
            		}
          		/>
          	   */}
			</View>
		);
	}	
}
