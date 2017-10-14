import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
//import { Button } from 'react-native-elements';
const util = require('util');


export default class Login extends React.Component {
	static navigationOptions = {
		title: "Login screen"
	};
	render() {

		console.log("this.props.navigation = " + util.inspect(this.props.navigation, false, null));
		var {navigate} = this.props.navigation;
		return (
			<View style={styles.container}>
				<View style={styles.logoContainer}>
					<Image
						style={styles.logo}
						source={require('../../logo_snipped.png')}
					/>
				</View>

				<Button 
					raised
            		textStyle={{textAlign: 'center'}}
            		title={`Touch here to begin`}
            		onPress = {
            			() => navigate("HomePage", {name: "nicholas_sadjoli", email: "nick.sadjoli@gmail.com"})
            		}
          		/>
			</View>

			

		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1abc9c',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoContainer: {
  	alignItems:'center' ,
  	flexGrow: 1,
  	justifyContent: 'center'
  	
  },

  logo: {
  	width: 100,
  	height: 100
  }

});