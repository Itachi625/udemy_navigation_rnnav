import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, Text,View, Image } from 'react-native'

import Home from './src/home';
import Users from './src/users';
import LogoTitle from './src/utils/logoTitle';
import MyCustomDrawer from './src/utils/customDrawer';

const Tab = createBottomTabNavigator();

import Logo from './src/images/paypal-logo.png';
import Logo_red from './src/images/paypal-logo-red.png';

const CustomTabBar = (props) => {
  return(
    <View style={{ flexDirection:'row'}}> 
      <Button title="Home" />
      <Button title="User"/>
    </View>
  )
}


const App = () => {
  return(
    <NavigationContainer>
      <Tab.Navigator
      tabBar={ props => <CustomTabBar {...props}/>}
        screenOptions={({route})=>({
          tabBarIcon: ({focused,color,size}) => {

            if(route.name === 'Home'){
              return focused ?
                <Image source={Logo} style={{width:50,height:50}}/>
              :
                <Image source={Logo_red} style={{width:50,height:50}}/>
            }

            return null
          }
        })}
        tabBarOptions={{
          activeTintColor:'red',
          inactiveTintColor:'green',
          activeBackgroundColor:'blue',
          style:{
            backgroundColor:'grey'
          },
          labelStyle:{
            fontSize:20
          }
        }}
      >
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen 
          name="Users" 
          component={Users}
          options={{
            tabBarLabel:'dog'
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;