import React, { Component } from 'react';
import { Text, TextInput, View, Picker, TouchableOpacity, StyleSheet, Button, Alert } from 'react-native';
import { Header, Left, Right } from 'native-base';

export default class Inputtext extends Component {
  constructor(props) {
    super(props);
    this.state = {text: '' , language: "vsjh"};
  }

  render() {
    return (
      <View style={styles.container}>   
      <TouchableOpacity style={styles.card}>
      <Text>Branch</Text>
          <Picker
  selectedValue={this.state.language}
  style={{height: 25, width: 200}}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({language: itemValue})
  }>
  <Picker.Item label="Computer Science" value="cs" />
  <Picker.Item label="Mechanical" value="mech" />
  <Picker.Item label="Biomedical" value="bm" />
  <Picker.Item label="Industrial Production" value="ip" />
</Picker>
        </TouchableOpacity>
       </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		marginTop:0,
		backgroundColor: '#F5FCFF',
	},
	card: {
		backgroundColor: '#fff',	
		marginBottom: 20,
		marginTop: 20,
		marginLeft: '6%',
		width: '90%',
		shadowColor: '#000',
		shadowOpacity: 0.2,
		shadowRadius: 1,
		shadowOffset: {
			width:3,
			height:3
		}
	}
});

