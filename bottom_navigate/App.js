/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Image,View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from './src/home/HomeScreen';
import Setting from './src/setting/Setting';
import Detail from './src/home/Detail';

const homeStack = createNativeStackNavigator();
const settingStack = createNativeStackNavigator();
const tab = createBottomTabNavigator();

const HomeNavigation =()=>{
  return(
    <homeStack.Navigator>
      <homeStack.Screen name='HomeScreen' component={HomeScreen} />
      <homeStack.Screen name='Detail' component={Detail} />
    </homeStack.Navigator>
  )
}

const SettingStack =()=>{
  return(
    <settingStack.Navigator>
      <settingStack.Screen name='Setting' component={Setting} />
    </settingStack.Navigator>
  )
}

const App=()=>{
  return(
    <NavigationContainer>
      <tab.Navigator 
      initialRouteName="Feed"
      screenOptions={{headerShown:false,
      tabBarActiveTintColor: '#e91e63'
      }}
      >
        <tab.Screen name='homeStack' 
        component={HomeNavigation}
        options={{
          tabBarLabel:'Home',
          tabBarIcon:({focused})=>(
            <View >
            <Image
            style={{width:25,height:25}}
                source={focused?require('./assets/icons_home_focused.png')
                :require('./assets/icons_home_unfocused.png')}
              />
            
        </View>
          )
        }}
        />
        <tab.Screen name='SettingStack' component={SettingStack} 
        options={{
          tabBarLabel:'setting',
          tabBarIcon:({focused})=>(
            <View >
            <Image
            style={{width:25,height:25}}
                source={focused?require('./assets/account_focused.png')
                :require('./assets/account_unfocussed.png')}
              />
        </View>
          )
        }}/>  
      </tab.Navigator>
    </NavigationContainer>
  )
}

export default App