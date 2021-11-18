import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStack from './HomeStack'
import CartStack from './CartStack'
import ProfileStack from './ProfileStack'
import MenuPage from '../pages/MenuPage'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'



const Tab = createBottomTabNavigator();


export default function BottomTabNav() {
    return (
      
            <Tab.Navigator tabBarOptions={{showLabel:false, activeTintColor:'#f9784b' , inactiveTintColor:'#8f919f' , style:{backgroundColor:'#000',borderColor:'#000'}}}>                
              
              <Tab.Screen component={HomeStack} name='Home'
                options={{
                    tabBarIcon: ({color})=>(
                    <Entypo name='home' color={color} size={25}/>
                    )
                }}
              />
              <Tab.Screen component={ProfileStack} name='profile'
               options={{
                tabBarIcon: ({color})=>(
                <Entypo name='user' color={color} size={25}/>
                )
            }}
              />
              <Tab.Screen component={CartStack} name='cart'
               options={{
                tabBarIcon: ({color})=>(
                <Entypo name='shopping-cart' color={color} size={25}/>
                )
            }}
              />
              <Tab.Screen component={MenuPage} name='Setting' 
                 options={{
                    tabBarIcon: ({color})=>(
                    <AntDesign name='setting' color={color} size={25}/>
                    )
                }}
              />
           
            </Tab.Navigator>
       
    )
}
