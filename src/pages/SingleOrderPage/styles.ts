import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    root: {
        backgroundColor: '#d0d0d0',
        width:'100%',
    },
    col:{
            width:'90%',
            marginTop:10
    },
    top:{
        flexDirection:'column',
        justifyContent:'space-between',
        margin:5
    },
    rowTable:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#585858'
    },
    rowTableItem:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#989898'
    },
    topTxt:{
        fontSize:20,
        fontWeight:'bold',

    },
    belTxt:{
        fontSize:17,
        
    },
    subtotal:{
        color:'#fff',
        fontSize:18,
        fontWeight:'100',
        margin:5
    },
    rowTxt:{
        color:'#d0d0d0',
        fontSize:15,
        fontWeight:'bold'
    },
    rowTxtName:{
        color:'#000',
        fontSize:18,
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
    },
    item:{
        backgroundColor:'#989898',
        padding:3,
        borderRadius:5,
        borderWidth:1,
        marginTop:10


    }

});

