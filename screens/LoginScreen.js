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
  const [email,setEmail] = useState('');
  const [password,setPassword]=useState('');
  
 
  sendCred=async ()=>{
    console.log(email+"  "+password);
    fetch("https://63c18fe0.ngrok.io/login",{
       method:"POST",
       headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        "email":email,
        "password":password
      })
     })
     .then(res=>res.json())
     .then(async (data)=>{
      console.log(data);
            try {
              await AsyncStorage.setItem('token',data.token)
              props.navigation.navigate("home",{
            itemId: 86,
            otherParam: 'anything you want here',
          })
            } catch (e) {
              console.log("error hai",e)
            }
     })
  }

return (
   <View> 
   <ImageBackground style={{height: 650, width: 375}} 
   source = {require('/home/shefali/Desktop/major/recommendation/assests/logimg.jpg')} >
   <Header color='#005ce6'>
                <Left><Icon name="ios-menu" /></Left>
                <Body>
                    <Title>LogIn</Title>
                </Body>
                <Right />
                </Header>
   <KeyboardAvoidingView behavior="position">
      
      <View
      
       />

      <TextInput
        label='Email'
        mode="outlined"
        value={email}
        style={{marginLeft:18,marginRight:18,marginTop:158}}
        theme={{colors:{primary:"blue"}}}
        onChangeText={(text)=>setEmail(text)}
     
      />
      <TextInput
        label='password'
        mode="outlined"
        secureTextEntry={true}
        value={password}
        onChangeText={(text)=>{setPassword(text)}}
        style={{marginLeft:18,marginRight:18,marginTop:18}}
        theme={{colors:{primary:"blue"}}}
     
      />
      <Button 
        mode="contained"
        style={{marginLeft:108,marginRight:18,marginTop:18,width:200}}
       color='#3333ff' 
       onPress={sendCred}>
        Login
      </Button>
      <TouchableOpacity>
        <Text
      style={{
        fontSize:18,marginLeft:228,marginTop:20,fontWeight: 'bold'
      }}
      onPress={()=>props.navigation.replace("signup")}
      >Register here!</Text>
      </TouchableOpacity>
      
      </KeyboardAvoidingView>
      </ImageBackground>
   </View>
  );

}
export default LoginScreen;