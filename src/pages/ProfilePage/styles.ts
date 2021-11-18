import { addEventListener } from "@react-native-community/netinfo";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    root: {
        flexDirection: 'column',
        padding: 0,
        height: '100%',
        margin: 0,
        backgroundColor: '#1d202b'

    },
    top: {
        backgroundColor: '#774e92',
        width: '100%',
        height: 430,
        position: 'relative',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottomEndRadius: 30,
        borderBottomLeftRadius: 30

    },
    RightText: {
        fontSize: 15,
        fontWeight: '700',
        color: '#e0dee3',
   
    },
    leftText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fafafa',
        textAlign: 'center',

    },
    userInfoView: {
        backgroundColor: '#643882',
        height: 70,
        width: '90%',
        borderRadius: 10,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        opacity: 0.7,
        alignItems: "center",
        position: 'relative'
    },
    ordersView: {
        borderColor: '#f9784b',
        borderWidth:7,
        height: 70,
        width: '90%',
        borderRadius: 10,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',       
        alignItems: "center",
        position: 'relative'
    },
    rating: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    spacer: {
        width: 1,
        height: 40,
        backgroundColor: "#fafafa",
        opacity: 0.5,
        alignSelf: 'center'

    },

    topText: {
        color: '#fafafa',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center'
    },
    bottomText: {
        color: '#fdfdfd',
        fontWeight: '100',
        fontSize: 12,
        textAlign: 'center'

    },
    bottom: {
        backgroundColor: '#1d202b',
        flex: 1,
        padding: 25,
        flexDirection: 'column',
        alignItems:'center'

    },
    description: {
        color: "#fff",
        fontSize: 20,
        fontWeight: '400'

    },
    desView: {
        height: 130,
        marginTop: 10,

    },
    desParag: {
        color: "#8f919f",
        fontSize: 14,
        textAlign: 'justify',
        lineHeight: 25,

    },
    button: {
        // position: 'absolute',
        // bottom: 3,
        // right: 10,
        backgroundColor: '#d0d0d0',
        borderRadius: 50,
        height:20,
        width:20,
        flexDirection:'column',
        justifyContent:'center' ,
        alignItems:'center',
        
    },
    add: {

    },

});