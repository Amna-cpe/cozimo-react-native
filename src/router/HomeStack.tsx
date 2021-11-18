import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../pages/HomePage'
import ProductPage from '../pages/ProductPage/index'
const Stack = createStackNavigator();
import { SafeAreaView, Text, TextInput, View } from 'react-native'
import Feather from "react-native-vector-icons/Feather"

interface HeaderProps{
  search : string;
  setSearch:()=>void; 
}

const HeaderComponent = ({ search, setSearch }:HeaderProps) => {

  return (
    <SafeAreaView style={{ backgroundColor: '#774d94' }}>
      <View style={{
        backgroundColor: "#fff",
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        borderColor: "#d0d0d0",
        borderRadius: 5,
        paddingLeft: 7
      }}>
        <Feather name='search' size={20} />
        <TextInput
          placeholder="Search.."
          style={{ fontSize: 15, marginLeft: 5 }}
          value={search}
          onChangeText={(value)=>setSearch(value)}
        />

      </View>

    </SafeAreaView>
  )
}

export default function HomeStack() {
  const [search, setSearch] = useState('')

  console.log('the search from the stracl os' , search)
  
  return (


    <Stack.Navigator
      screenOptions={{
        header: () => <HeaderComponent search={search} setSearch={setSearch} />
      }}
    >

      <Stack.Screen name='HomeScreen' options={{ title: 'Home' }}>
          {
            ()=><Home search={search} />
          }
      </Stack.Screen>
      <Stack.Screen component={ProductPage} name='ProductDetails' />



    </Stack.Navigator>




  )
}
