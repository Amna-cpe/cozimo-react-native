import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Cart from '../pages/CartPage'
import Address from '../pages/AddressPage'
const Stack = createStackNavigator();


export default function CartStack() {
    return (

            <Stack.Navigator>

              <Stack.Screen component={Cart} name='cartpage' options={{title:'Shopping Cart'}} />
              <Stack.Screen component={Address} name='Address' />

           
            </Stack.Navigator>
     
    )
}
