import React, { useState } from 'react'
import { View, Text, Image } from 'react-native';
import { styles } from "./styles"

interface props {
    cat_one:{
        title:String;
        img:String;
    },
    cat_two:{
        title:String;
        img:String;
    }
}

export default function CartProductComponent({cat_one , cat_two}:props) {
 
    return (

        <View style={styles.TopRoot}>
            <View style={[styles.cat ]}>

                <Text style={styles.txtCat}>{cat_one.title}</Text>
                <Image   style={styles.bookImg} source={{uri:cat_one.img}} />

            </View>

            <View style={[styles.cat ]}>
               
            <Text style={styles.txtCat}>{cat_two.title}</Text>
            <Image style={styles.bookImg} source={{uri:cat_two.img}} />
            </View>

        </View>


    )
}

