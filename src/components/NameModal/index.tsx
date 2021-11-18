import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const NameModal = (props) => {
    const { modalVisible, setModalVisible, setFullName} = props
    const [name, setName] = useState('')


    return (

        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                   
                        <Text style={{color:'#000',fontWeight:'bold'}}>Enter Your name</Text>
                        <TextInput
                            value={name}
                            onChangeText={name=>setName(name)}                         
                            style={{borderWidth:0.5 , padding:2 , margin:10, borderRadius:10 ,  width:'100%',alignItems:'center'}}
                        />
                        <Pressable style={[styles.button, styles.buttonClose]} onPress={() =>{ setModalVisible(!modalVisible); setFullName(name)}}>
                            <Text style={styles.textStyle} >Save</Text>
                        </Pressable>
                    
                </View>
            </View>
        </Modal>


    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        width:'100%',
      
    },
    modalView: {
        width:'80%',
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        width:'50%',
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#f9784b",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default NameModal;