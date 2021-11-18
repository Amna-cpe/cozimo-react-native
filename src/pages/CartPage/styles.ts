import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    root: {
        backgroundColor: '#1d202b',
        flex:1
    },
    top:{
        flexDirection:'column',
        justifyContent:'space-between',
        margin:5
    },
    subtotal:{
        color:'#fff',
        fontSize:18,
        fontWeight:'100',
        margin:5
    },
    subtotalPrice:{
        color:'#78c2eb',
        fontSize:19,
        fontWeight:'bold'
    },
    button:{
        width:'85%',
        backgroundColor:'#75d64b',
        padding:10,
        borderRadius:5,
        alignSelf:'center',
        margin:5
    },
    buttonText:{
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',
        color:'#555859'
    }

});

