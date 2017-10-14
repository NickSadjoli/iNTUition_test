import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
const util = require('util');

export default class Found extends React.Component {
	static navigationOptions = {
		title: "Halloween Horror Nights"
	};
	render() {
		//var {params} = this.props.navigation.state;
		var payments = [];
		var arraynum = [];
		var {navigate} = this.props.navigation;
		var numberPpl = [2,3];
		for (let i=0;i<numberPpl.length;i++){
			arraynum.push(
				<View>
					<View>
						<Button
							raised
										textStyle={{textAlign: 'center'}}
										title={<Text>{numberPpl[i]} out of 4 signed in</Text>}
											onPress = {
												() => navigate("Group", {alloc:numberPpl[i], max:"4"})
											}
						/>
					</View>
				</View>
			)
}
		var initialArr = [["blue","text1"],["red","text2"],["df","s"]];
		return (
			<View>
			<Text>Halloween Horror Nights Ticket </Text>
			<Text> 2017</Text>
			{arraynum}
			 {/*{initialArr.map((prop, key) => {
         return (
           <Button style={{borderColor: prop[0]}}  key={key}raised
             		textStyle={{textAlign: 'center'}}
             		title={`3 out of 4 signed in`}
                   onPress = {
                     () => navigate("Group", {alloc:"3", max:"4"})
                   }>{prop[1]}</Button>

         );
      })}
      {/*  <Button
          onPress={() => navigate("Group", {alloc=2, max=4})}
          title="2/4 Full"
        />
        <Button
          onPress={() => navigate("Group", {alloc=3, max=4})}
          title="3/4 Full"
        />*/}{/*
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
        />*/}
				<Button
      		raised
          			textStyle={{textAlign: 'center'}}
            		title={`Create New Group`}
                  onPress = {
                    () => navigate("Group", {alloc:"0", max:"4"})
                  }
        />
			</View>
		);
	}
}
