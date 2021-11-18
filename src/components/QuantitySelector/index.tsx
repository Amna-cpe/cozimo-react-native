import { DataStore } from 'aws-amplify';
import React from 'react'
import { View, Text, Pressable ,StyleSheet, Alert } from 'react-native';

const styles = StyleSheet.create({
    root:{
        flexDirection:'row',  
        justifyContent:'flex-end',
        marginTop:5
    },
    press:{
        width:30,
        height:30,
        justifyContent:'center',
        alignItems :'center',
        borderRadius:50,
        borderColor:'#888888',
        borderWidth:0.5
    },
    txt:{
        fontSize:20,
        color:'#707070',
        fontWeight:'bold',
        alignSelf:'center',
        textAlign:'center',

    },
    txtCenter:{
        color:'#d00',
        fontSize:20,
        width:30,
        height:30,
        justifyContent:'center',
       

    }
})


export default function QuantitySelector({quantity,setQuantity}) {

    const onMinus = ()=>setQuantity(Math.max(0,quantity-1));

    const onPlus = ()=>setQuantity(quantity+1);

    return (
       <View style={styles.root}> 
            <Pressable onPress={onMinus} style={styles.press}>  
                <Text style={styles.txt} >-</Text>
            </Pressable>

                <View style={styles.txtCenter}>
                <Text style={{color:'white',textAlign:'center', fontWeight:'bold'}} > {quantity} </Text> 
                </View>

            <Pressable onPress={onPlus} style={styles.press} >  
                <Text style={styles.txt} >+</Text>
            </Pressable>

       </View>
    )
}




