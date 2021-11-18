import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator();
import ProfilePage from '../pages/ProfilePage'
import OrderPage from '../pages/OrderPage'
import SingleOrderPage from '../pages/SingleOrderPage'




export default function ProfileStack() {
  

  return (

    <Stack.Navigator>
      <Stack.Screen component={ProfilePage} name='profile-page' options={{ title: 'Profile' }}/>
      <Stack.Screen component={OrderPage} name='orders' />
      <Stack.Screen component={SingleOrderPage} name='order' />

    </Stack.Navigator>




  )
}
