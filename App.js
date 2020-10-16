import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Text,View } from 'react-native'

import Home from './src/home';
import Users from './src/users';
import LogoTitle from './src/utils/logoTitle';

const Stack = createStackNavigator();

const defaultHeader = {
  headerTitleAlign:'center',
  headerBackTitle:'rock',
  headerStyle:{
    backgroundColor:'red',
    borderBottomWidth:6,
    borderBottomColor:'black'
  },
  headerTintColor:'#ffffff',
  headerTitleStyle:{
    fontWeight:'bold',
    fontStyle:'italic',
    textDecorationLine:'line-through'
  }
}

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        mode="modal"
        screenOptions={{
          ...defaultHeader,
          headerTitle: props => LogoTitle(props)
        }}
      >
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen 
          name="Users" 
          component={Users} 
          initialParams={{ id:1, codeName:'Iron horse'}}
          options={({navigation})=>({
            headerLeft:()=> <Button
              title="do back"
              onPress={()=> navigation.navigate('Home')}
            />,
          })}
          //   {
          //   headerLeft:()=> <Button
          //     title="do less"
          //     onPress={()=> alert('less')}
          //   />,
          //   headerRight:()=> <Button
          //   title="do more"
          //   onPress={()=> alert('more')}
          // />
            //headerTitle: props => LogoTitle(props)
            //title:'x-users'
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;