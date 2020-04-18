import React,{Component, useState, useEffect} from 'react';
import { Button ,TextInput} from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import CourseCard from './CourseCard';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground
} from 'react-native';
import StarRating from 'react-native-star-rating';
import { Header, Body, Title, Content, Left, Icon, Right } from 'native-base';
var db=[];
var wdb=[],cldb=[],cndb=[],urldb=[];
export default class HomeScreen extends Component{
   constructor(props){
    super(props)
  this.state = {
    dataCourse:["hhs"],
  };
  console.log("uyd"+this.state.dataCourse);
}

  sendCred=async ()=>{
    fetch("https://63c18fe0.ngrok.io/home",{
       method:"GET"
     })
     .then(res=>res.json())
     .then(async (dc)=>{
      this.setState({dataCourse:dc});
      
     })
  }

render(){
  this.sendCred();
  const { navigation } = this.props;
  const itemId = navigation.getParam('itemId', 'NO-ID');
  const otherParam = navigation.getParam('otherParam', 'some default value');
  let courseCards = this.state.dataCourse.map(courseDetails => {
      return (
          <CourseCard courseDetails={courseDetails} />
      )
    })  
return (
  <View>
  <ScrollView style={{backgroundColor: '#F5FCFF'}}>
  <Header color='#005ce6'>
                <Left><Icon name="ios-menu" /></Left>
                <Body>
                    <Title>LogIn</Title>
                </Body>
                <Right />
                </Header>
                <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
{courseCards}
</ScrollView>
  </View>
  );
}

}
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: '2%',
    width: '96%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      width:3,
      height:3
    }
  },
  cardImage:{
    width:'100%',
    height:200,
    resizeMode:'cover'
  },
  cardText:{
    padding:10,
    fontSize:16
  },
  icon: {
        height: 24,
        width: 24
    }
});




