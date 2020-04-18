import React,{useState} from 'react';
import { Button ,TextInput} from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  ImageBackground
} from 'react-native';
import { Header, Body, Title, Content, Left, Icon, Right } from 'native-base';

const LoginScreen=(props)=>{
  const [website,setWebsite] = useState('hello');
  
  sendCred=async ()=>{
    fetch("https://d8caafe6.ngrok.io/home",{
       method:"GET"
     })
     .then(res=>res.json())
     .then(async (data)=>{
      console.log(data);
      return setWebsite(data[0].Website);
            
     })
  }

return (
   <View> 
   <Button onPress={sendCred}>{website}</Button>
   <Button onPress={sendCred}>{website}</Button>
   </View>
  );

}
export default LoginScreen;