import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, Pressable, TextInput } from 'react-native'
import { Picker } from '@react-native-picker/picker';


import { styles } from './styles'

interface props {
    text: string;
    numFields: number;
    size: number;
    placeHolder: string;
    type: string;
    placeHolder2: string;
    typeOfInput:string;
}

export default function CustomeInputField({ text, numFields, typeOfInput, placeHolder, textState, setText, type, text2State, setText2, placeHolder2 }: props) {

    const keyBoardType = type === 'phoneNumber' ? 'phone-pad' : 'ascii-capable';
    var a = Array(numFields).fill([1]);

    return (
        <View style={styles.row}>

            <Text style={styles.text} > {text} </Text>

            {
                typeOfInput === 'input' ?
                    (a.map((currElement, index) => (
                        <TextInput
                            key={index}
                            style={styles.input}
                            placeholder={index === 0 ? placeHolder : placeHolder2}
                            onChangeText={text => setText(text)}
                            keyboardType={keyBoardType}
                        />
                    ))
                    ) : (

                        <Picker>                         
                                    <Picker.Item label='java' value='java' />
                                    <Picker.Item label='css' value='css' />  
                                    <Picker.Item label='kad' value='afa' />                           

                        </Picker>
                    )
            }

        </View>
    )
}


