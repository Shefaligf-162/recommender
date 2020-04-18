import React, { Component } from 'react';
import { Text,Linking, TouchableOpacity,ScrollView, Image, View, StyleSheet } from 'react-native';
import { Header, Left, Right } from 'native-base';
import CustomHeader from '../Components/CustomHeader'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SearchBar } from 'react-native-elements';
import StarRating from 'react-native-star-rating';
import { Stitch, RemoteMongoClient } from "mongodb-stitch-react-native-sdk";
 
export default class HomeScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
        title: "home",
        headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
        drawerIcon:
            <Image
                source={require('/home/shefali/Desktop/major/recommendation/assests/download.png')}
                style={{height: 24, width: 24}}
            />

    });
  state = {
    search: ''
  };
  updateSearch = search => {
    this.setState({ search });
  };
  render() {
  	const { search } = this.state;
    return (
      <View >
      <ScrollView style={{backgroundColor: '#F5FCFF'}}>
        <CustomHeader
                    title="HomeScreen"
                    drawerOpen={() => this.props.navigation.navigate("DrawerOpen")}
                />
                <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
      <TouchableOpacity style={styles.card}>
      <Image style={{height: 60, width: 100,flexDirection:"row", marginTop: 10}} 
   source = {require('/home/shefali/Desktop/major/recommendation/assests/download.png')} />
     <Text style={{color: 'blue', marginLeft: 30, marginTop: 30, flexDirection:"row"}}
      onPress={() => Linking.openURL('https://www.udemy.com')}>
  Udemy
</Text>
     <Text style={{marginLeft: 110, fontSize:18}}>Course 1st: React Native</Text>  
     <StarRating
       starStyle={{marginBottom:20}}
       starSize={20}
       fullStarColor={'red'}
        disabled={true}
        maxStars={5}
        rating={4}
      />
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
      <Image style={{height: 60, width: 100,flexDirection:"row", marginTop: 10}} 
   source = {require('/home/shefali/Desktop/major/recommendation/assests/download.png')} />
     <Text style={{color: 'blue', marginLeft: 30, marginTop: 30}}
      onPress={() => Linking.openURL('https://www.coursera.org')}>
  Coursera
</Text>
     <Text style={{marginLeft: 110, fontSize:18,flexDirection: "row"}}>Course 2nd: React Native</Text>  
     <StarRating
       starStyle={{marginBottom:20}}
       starSize={20}
       fullStarColor={'red'}
        disabled={true}
        maxStars={5}
        rating={2.5}  //update with the help of state
      />
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
      <Image style={{height: 60, width: 100,flexDirection:"row", marginTop: 10}} 
   source = {require('/home/shefali/Desktop/major/recommendation/assests/download.png')} />
     <Text style={{color: 'blue', marginLeft: 30, marginTop: 30}}
      onPress={() => Linking.openURL('https://www.udemy.com')}>
  Udemy
</Text>
     <Text style={{marginLeft: 110, fontSize:18,flexDirection: "row"}}>Course 3rd: React Native</Text>  
     <StarRating
       starStyle={{marginBottom:20}}
       starSize={20}
       fullStarColor={'red'}
        disabled={true}
        maxStars={5}
        rating={3.5}
      />
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
      <Image style={{height: 60, width: 100,flexDirection:"row", marginTop: 10}} 
   source = {require('/home/shefali/Desktop/major/recommendation/assests/download.png')} />
     <Text style={{color: 'blue', marginLeft: 30, marginTop: 30}}
      onPress={() => Linking.openURL('https://www.coursera.org')}>
  Coursera
</Text>
     <Text style={{marginLeft: 110, fontSize:18,flexDirection: "row"}}>Course 4th: React Native</Text>  
     <StarRating
       starStyle={{marginBottom:20}}
       starSize={20}
       fullStarColor={'red'}
        disabled={true}
        maxStars={5}
        rating={4}
      />
      </TouchableOpacity>
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





</Text>
     <Text style={{marginLeft: 110, fontSize:18,flexDirection: "row"}}>{cldb[0]}</Text>  
     <StarRating
       starStyle={{marginBottom:20}}
       starSize={20}
       fullStarColor={'red'}
        disabled={true}
        maxStars={5}
        rating={2.5}  //update with the help of state
      />



      <View> 
   <ScrollView style={{backgroundColor: '#F5FCFF'}}>
   <Header color='#005ce6'>
                <Left><Icon name="ios-menu" /></Left>
                <Body>
                    <Title>HomeScreen</Title>
                </Body>
                <Right />
                </Header>
   <Button onPress={this.sendCred}>"Press Me"</Button>
   </ScrollView>
   </View>









   
/*
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
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

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      people: [
        {
          id: 1,
          name: "David Davidson",
          company: "Some Company, Inc",
          description: "Met at a party. Will connect with later"
        },
        {
          id: 2,
          name: "Mark Markson",
          company: "Some Company, Inc",
          description: "Met at a party. Will connect with later"
        },
        {
          id: 3,
          name: "Judy Judyson",
          company: "Some Company, Inc",
          description: "Met at a party. Will connect with later"
        },
        {
          id: 4,
          name: "James Jameson",
          company: "Some Company, Inc",
          description: "Met at a party. Will connect with later"
        }
      ]
    }
  }

  

  render () {
    let courseCards = this.state.people.map(person => {
      return (
          <CourseCard person={person} />
      )
    })
    return (
      
        <View>
          {courseCards}
        </View>
  
    )
  }
}
*/