import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TextInput, TouchableHighlight} from 'react-native';
import { Button } from 'react-native-elements';
const util = require('util');

export default class Voucher extends React.Component {
	static navigationOptions = {
		title: "Halloween Horror Nights"
	};
	render() {
		//var {params} = this.props.navigation.state;
    var {navigate} = this.props.navigation;
		return (
			<ScrollView style={{flex: 1}}>
				<Text>List of tickets </Text>
        <View style={{flex: 1}}>
          <TouchableHighlight onPress={() => navigate("Found", {})}>
            <Image
              style={styles.button}
              source={require('../images/Voucher1.png')}
            />
          </TouchableHighlight>
          <Text style={{textAlign: 'center'}}> Sentosa Family Vouchers for 4 </Text>
        </View>
				<View style={{flex: 1}}>
					<TouchableHighlight onPress={() => navigate("Found", {})}>
						<Image
							style={styles.button}
							source={require('../images/halloween.jpg')}
						/>
					</TouchableHighlight>
					<Text style={{textAlign: 'center'}}> Halloween Family Vouchers for 4 </Text>
				</View>
			</ScrollView>
		);
	}
}


const styles = StyleSheet.create({
  button: {
    width: 300,
    height: 200
  },

});
