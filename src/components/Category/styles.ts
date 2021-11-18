import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({

    TopRoot: {
        flexDirection: 'column',
        margin: 10,   
        justifyContent:'space-around',
        position:'relative'
      

    },
    cat:{
       
        height:100    ,
        flexDirection:'row',
        alignItems:'center' ,
        justifyContent:'center'   ,
        width:150
        
    },
    txtCat:{
        fontSize:17,
        fontWeight:'bold',
        textAlign:'center',
        color:'#fafafa',
        position:'absolute',
        bottom:-25
    },
    bookImg:{
        width:'100%',
        height:'100%',
        position:'absolute',
        zIndex:-100,
        resizeMode:'cover',
        borderRadius: 10,
    }
   
});
