import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Text,Linking, TouchableOpacity,ScrollView, Image, View, StyleSheet } from 'react-native';
import { Header, Left, Right } from 'native-base';
import CustomHeader from '../Components/CustomHeader'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SearchBar } from 'react-native-elements';
import StarRating from 'react-native-star-rating';
import { Stitch, RemoteMongoClient } from "mongodb-stitch-react-native-sdk";
export default class CourseCard extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    let { Website, Class, CourseName, Url } = this.props.courseDetails;
    return (
      <View>
      <TouchableOpacity style={styles.card}>
      <Image style={{height: 60, width: 100,flexDirection:"row", marginTop: 10}} 
   source = {require('/home/shefali/Desktop/major/recommendation/assests/download.png')} />
     <Text style={{color: 'blue', marginLeft: 30, marginTop: 30}}
      onPress={() => Linking.openURL(Url)}>
  {Website}
</Text>
     <Text style={{marginLeft: 110, fontSize:18,flexDirection: "row"}}>{CourseName}</Text>  
     <StarRating
       starStyle={{marginBottom:20}}
       starSize={20}
       fullStarColor={'red'}
        disabled={true}
        maxStars={5}
        rating={3.5}
      />
      </TouchableOpacity></View>
    )
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




