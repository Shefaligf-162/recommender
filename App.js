import React, { Component, useEffect,useState } from 'react';
import { Text, View, SafeAreaView, ScrollView, Dimensions, Image, StyleSheet} from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegistrationScreen from './screens/RegistrationScreen'
import Rough from './screens/Rough'
import { Container, Content, Icon, Header, Body } from 'native-base'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from './screens/LoadingScreen'; 

const Stack = createStackNavigator();

const App= ({ navigation }) => {
   const [isloggedin,setLogged] = useState(null)

   const detectLogin= async ()=>{
      const token = await AsyncStorage.getItem('token')
      if(token){
          setLogged(true)
      }else{
          setLogged(false)
      }
   }
  useEffect(()=>{
     detectLogin()
  },[])


  return (
    <NavigationContainer>
      <Stack.Navigator
      headerMode="none"
      >      
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="home" component={HomeScreen} />           
            <Stack.Screen name="rough" component={Rough} />
            <Stack.Screen name="loading" component={LoadingScreen} />
            <Stack.Screen name="signup" component={RegistrationScreen} />
        
        
      </Stack.Navigator>
    </NavigationContainer>

  );
};


export default App;