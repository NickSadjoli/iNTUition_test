import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Picker } from 'react-native';
import { Button } from 'react-native-elements';
import { CardSection } from '../style/CardSection';
import { Input } from '../style/input';
const util = require('util');


export default class Group extends React.Component {

  state = {
    people:[]
  };

  _handleTextChange = inputValue => {
    this.setState({ inputValue });
  };

  static navigationOptions = {
		title: "Join Group"
	};
  renderPeople()
  {
    var data=[];
    for (let i=1;i<3;i++)
    { obj = {};
      obj["person"] = String(i);
      //console.log("people:" + obj);
      data.push(obj);
    }
    this.setState({people: data});
    return this.state.people.map(p =>
      <Picker.Item label={p.person} value={p.person} />);
  }
	render() {
		var {params} = this.props.navigation.state;
    	var arnum=[];
  		for (let i=1;i<=(params.max-params.alloc);i++)
    	{
      		let a=String(i);
      		arnum.push(
        	<Picker.Item label={a} value={a} />
      		);
    	}

	return (
      <View>
      <Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text>
    <CardSection>
      <Input
        label="Name"
        placeholder="Jane"
        value={this.props.name}
        onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
      />
    </CardSection>

    <CardSection>
      <Input
        label="Phone"
        placeholder="555-555-5555"
        value={this.props.phone}
        onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
      />
    </CardSection>

    <CardSection style={{ flexDirection: 'column' }}>
      <Text style={styles.pickerTextStyle}>Shift</Text>
      <Picker
        style={{ flex: 1 }}
        selectedValue={this.props.shift}
      >
      {arnum}
      {/*
        <Picker.Item label="Monday" value="Monday" />
        <Picker.Item label="Tuesday" value="Tuesday" />
        <Picker.Item label="Wednesday" value="Wednesday" />
        <Picker.Item label="Thursday" value="Thursday" />
        <Picker.Item label="Friday" value="Friday" />
        <Picker.Item label="Saturday" value="Saturday" />
        <Picker.Item label="Sunday" value="Sunday" />
      */}
      </Picker>
    </CardSection>
  {/*}</View>

			{/*<View>
      <CardSection>
         <Input
           label="Name"
           placeholder="Jane"
           value={this.props.name}
         />
       </CardSection>
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

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};
