import React, { useState } from "react";
import { Text, TextInput, View, Picker, TouchableOpacity, StyleSheet, Button, Alert, ScrollView, Image} from 'react-native';
import SingleChoice from "react-native-single-choice";
/*import CompleRegis from "./CompleRegis";*/
import { Header, Icon, Left, Right } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import HomeScreen from "./HomeScreen";
const RegistrationScreen = (props) => {
  const[email,setemail]=useState('');
  const[password,setpassword]=useState('');
  const[mlv,setmlv]=useState('');
  const[ccv,setccv]=useState('');
  const[ntv,setntv]=useState('');
  const[jav,setjav]=useState('');
  const[dbv,setdbv]=useState('');

  sendCred=async ()=>{
    console.log(email+"  "+password+" "+mlv);
    fetch("https://63c18fe0.ngrok.io/signup",{
       method:"POST",
       headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        "email":email,
        "password":password,
        "ML":mlv,
        "Net":ntv,
        "CC":ccv,
        "Java":jav,
        "Db":dbv
      })
     })
     .then(res=>res.json())
     .then(async (data)=>{
      console.log(data);
            try {
              await AsyncStorage.setItem('token',data.token)
              props.navigation.replace("home")
            } catch (e) {
              console.log("error hai",e)
            }
     })
  }





  return (
    <View >
    <ScrollView style={{backgroundColor: '#F5FCFF'}}>
      <TouchableOpacity style={styles.card}>
      <Text style={{fontSize: 20, marginTop: 20, marginLeft: 5}}>Email</Text>   
       <TextInput
          style={{height: 40, marginTop: 5}}
          placeholder="Email"
          onChangeText={(email) => setemail(email)}
          value={email}/>  
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
      <Text style={{fontSize: 20, marginTop: 20, marginLeft: 5}}>Password</Text>        
       <TextInput
          style={{height: 40, marginTop: 20}}
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={(password) => setpassword(password)}
          value={password}/> 
        </TouchableOpacity>
<TouchableOpacity style={styles.card}>   
<Text style={{fontSize: 20, marginTop: 20, marginLeft: 5}}>ML</Text>   
         <Picker
  selectedValue={mlv}
  style={{height: 40, width: 200}}
  onValueChange={(mlValue) =>
    setmlv(mlValue)
  }>
  <Picker.Item label="One" value="1" />
  <Picker.Item label="Two" value="2" />
  <Picker.Item label="Three" value="3" />
  <Picker.Item label="Four" value="4" />
  <Picker.Item label="Five" value="5" />
</Picker>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>   
<Text style={{fontSize: 20, marginTop: 20, marginLeft: 5 }}>Networks</Text>   
         <Picker
  selectedValue={ntv}
  style={{height: 40, width: 200}}
  onValueChange={(ntValue) =>
    setntv(ntValue)
  }>
  <Picker.Item label="One" value="1" />
  <Picker.Item label="Two" value="2" />
  <Picker.Item label="Three" value="3" />
  <Picker.Item label="Four" value="4" />
  <Picker.Item label="Five" value="5" />
</Picker>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>   
<Text style={{fontSize: 20, marginTop: 20, marginLeft: 5}}>Cloud Computing</Text>   
         <Picker
  selectedValue={ccv}
  style={{height: 40, width: 200}}
  onValueChange={(ccValue) =>
    setccv(ccValue)
  }>
  <Picker.Item label="One" value="1" />
  <Picker.Item label="Two" value="2" />
  <Picker.Item label="Three" value="3" />
  <Picker.Item label="Four" value="4" />
  <Picker.Item label="Five" value="5" />
</Picker>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>   
<Text style={{fontSize: 20, marginTop: 20, marginLeft: 5}}>Java</Text>   
         <Picker
  selectedValue={jav}
  style={{height: 40, width: 200}}
  onValueChange={(javValue) =>
    setjav(javValue)
  }>
  <Picker.Item label="One" value="1" />
  <Picker.Item label="Two" value="2" />
  <Picker.Item label="Three" value="3" />
  <Picker.Item label="Four" value="4" />
  <Picker.Item label="Five" value="5" />
</Picker>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>   
<Text style={{fontSize: 20, marginTop: 20, marginLeft: 5}}>Database</Text>   
         <Picker
  selectedValue={dbv}
  style={{height: 40, width: 200}}
  onValueChange={(dbValue) =>
    setdbv(dbValue)
  }>
  <Picker.Item label="One" value="1" />
  <Picker.Item label="Two" value="2" />
  <Picker.Item label="Three" value="3" />
  <Picker.Item label="Four" value="4" />
  <Picker.Item label="Five" value="5" />
</Picker>
        </TouchableOpacity>

       <Button style={{height: 10, marginBottom: 100, width: 50}} title="Register" onPress={sendCred}></Button>

 
    </ScrollView>  
    </View>
  );
};
 const styles = StyleSheet.create({
  
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

export default RegistrationScreen;
