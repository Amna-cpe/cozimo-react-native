import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    root: {
        backgroundColor: '#fff',
        height:'100%',
        position:'relative'
    },
  title:{
      fontSize:25,
      fontWeight:'bold',
      color:'black',
      textAlign:'center',
      margin:10
  },
  menu:{
        margin:10,
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderColor:'#d0d0d0',
        padding:20
  },
  menuItem:{
      flexDirection:'row',
  },
  txt:{
    fontSize:17,
    fontWeight:'bold',
    textAlign:'center',
    color:'#555859',
    marginLeft:10
  },
 fotter:{
    fontSize:15,
    fontWeight:'bold',
    textAlign:'center',
    color:'#555859',
    position:'absolute',
    bottom:5,
    alignSelf:'center'
}

});

