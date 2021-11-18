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
        backgroundColor: '#f9784b',
        width: '100%',
        position: 'relative',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10
    },
    orderNum: {
        fontSize: 15,
        fontWeight: '700',
        color: '#525452',

    },
    status: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#32a852',
        marginLeft:5
    },
    date: {
        fontSize: 15,
        fontWeight: '700',
        color: '#525452',
    },
    userInfoView: {
        backgroundColor: '#fff',        
        width: '100%',
        borderRadius: 10,
        padding: 5,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: "flex-start",
        marginTop: 10,
        paddingLeft: 20,
        paddingTop: 10,
        position:'relative'
    },
    moreDetail:{
        position:'absolute',
        top:'50%',
        right:15
    },
    ordersView: {
        borderColor: '#f9784b',
        borderWidth: 7,
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
        fontSize: 18,
        marginLeft: 10
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
        alignItems: 'center'

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
        height: 20,
        width: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
    add: {

    },

});