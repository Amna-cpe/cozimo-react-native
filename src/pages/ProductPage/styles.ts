import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    root: {
        flexDirection: 'column',
        padding: 0,
        height: '100%',
        margin: 0,
        backgroundColor: '#d00'

    },
    top: {
        backgroundColor: '#774e92',
        width: '100%',
        height: 350,
        position: 'relative',
        justifyContent: 'space-around',
        alignItems: 'center',

    },
    img: {
        width: '100%',
        height: '100%',
        opacity: 0.1,
        zIndex: -100,
        position: 'absolute'
    },
    bookImgShadow: {
        backgroundColor: '#1d202b',
        width: 130,
        height: 175,
        position: 'absolute',
        zIndex: -100,
        opacity: 0.6,
        borderRadius: 5

    },
    bookImg: {
        width: 120,
        height: 170,

    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fafafa',
        textAlign: 'center',
        marginTop: 5
    },
    author: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#fafafa',
        textAlign: 'center'
    },
    bookInfo: {

        backgroundColor: '#643882',
        height: 70,
        width: '80%',
        borderRadius: 10,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        opacity: 0.7
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
        // justifyContent:'space-around'
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
    buttons: {
        marginTop: 5,

    },
    add: {

    },


});