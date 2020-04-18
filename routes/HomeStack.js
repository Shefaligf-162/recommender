import React, { Component } from 'react';
import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from "../screens/HomeScreen";
import RegistrationScreen from "../screens/RegistrationScreen";


const screens={
	HomeScreen:{
		screen: HomeScreen
	},
	RegistrationScreen:{
		screen:RegistrationScreen
	}
}
const HomeStack = createStackNavigator(screens);


export default createAppContainer(HomeStack);