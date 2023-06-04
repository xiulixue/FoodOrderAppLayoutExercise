import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';
import MenuScreen from './MenuScreen';
import TableScreen from './TableScreen';
import Productpage from './Productpage';
import Userprofile from './Userprofile';
import UserCart from './UserCart';
import Placeorder from './Placeorder';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
      <Stack.Navigator 
          screenOptions={{headerShown: false}}
          //initialRouteName='welcome'
          > 
          <Stack.Screen name="welcome" component={WelcomeScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="placeorder" component={Placeorder} />
        <Stack.Screen name="usercart" component={UserCart} />
        <Stack.Screen name="menu" component={MenuScreen} />
        <Stack.Screen name="productpage" component={Productpage} />
        <Stack.Screen name="userprofile" component={Userprofile} />
        <Stack.Screen name="table" component={TableScreen} />
      </Stack.Navigator>
  )
}

export default AuthNavigation