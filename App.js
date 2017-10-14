import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

class TextBox extends React.Component {
  render(){
    return <Text> Your waifu looks like {this.props.name}! </Text> 
  }
}


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: '', heroname: ''};
  }

  changeHeroName(name){
    this.setState({
      text: name
    });
  }

  ChangeNameOnPress(){
    this.setState({
      heroname: this.state.text
    })
    this.setState({
      text: ''
    })
  }

  render() {

    
    let pic = {
       uri: 'https://feheroes.gamepedia.com/media/feheroes.gamepedia.com/1/13/Full_Portrait_Eirika.png'
    };
    
    return (
      //<View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.menu}>
          <Text> Hero name:</Text>
          <TextInput
            style={{height: 40, borderColor: 'green', borderWidth: 2, justifyContent: 'center'}}
            placeholder="Type here to input hero's name!"
            name = {this.state.text}
            onChangeText={(text) => this.changeHeroName(text)}
          />
          <Button
            raised
            icon={{name: 'home', size: 16}}
            buttonStyle={{backgroundColor: 'red', borderRadius: 10}}
            textStyle={{textAlign: 'center'}}
            title={`Change Hero name`}
            onPress = {() => this.ChangeNameOnPress()}
          />
          </View>

        <View style={styles.content}>
          <Text style={{backgroundColor: 'rgba(52, 52, 52, 0.0)'}}> {this.state.heroname} </Text>
          <Image source={pic} style={{width: 300, height: 400}}/>
          </View>

        <View style={{flex: 1, backgroundColor: 'cyan'}}>
          <Text> Description: Princess of Renais. </Text>
          </View>
        
      {/*<Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <TextBox name = 'Eirika' />
        <Image source={pic} style={{width: 200, height: 200}}/>
      */}
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  menu: {
    flex: 1, 
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    flex: 5, 
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',

  },

  desc: {
    flex: 1,
    backgroundColor: 'powderblue'
  }
});
