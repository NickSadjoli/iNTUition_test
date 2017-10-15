import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
const util = require('util');

export default class Found extends React.Component {
  state = { groups: [{'persons':2}, {'persons':3}]};
	static navigationOptions = {
		title: "Halloween Horror Nights"
	};


  renderGroups(obj){
    var {navigate} = obj.props.navigation;
    return obj.state.groups.map(group => <Button raised textStyle={{textAlign: 'center'}} key={group.persons} 
                                                  title = {String(group.persons) + " out of 4 persons signed in"}
                                                  onPress = {
                                                              () => navigate('Group', {alloc: group.persons, max: "4"})
                                                  }> 
                                            </Button>
                                                );
  }

	render() {
		var payments = [];
		var arraynum = [];
    var {navigate} = this.props.navigation;
		
    /*
		for (let i=0;i<numberPpl.length;i++){
			arraynum.push(
				<View>
						<Button
							raised
							textStyle={{textAlign: 'center'}}
							title={<Text>{String(numberPpl[i])} out of 4 signed in</Text>}
								onPress = {
									() => navigate("Group", {alloc:numberPpl[i], max:"4"})
								}
						/>
				</View>
			)
    }
    */
		
		return (
			<View>
			<Text>Halloween Horror Nights Ticket </Text>
			<Text> 2017</Text>
      {this.renderGroups(this)}

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

