import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    row: {
        // backgroundColor: '#1d202b'
    },
    fields: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',

    },
    wrapAdd: {
        flexDirection: 'row',
        width: '95%',
        justifyContent: 'space-around',
        margin: 5
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15
    },
    button: {
        width: '85%',
        backgroundColor: '#20d45c',
        padding: 10,
        borderRadius: 5,
        alignSelf: 'center',
        margin: 5
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#050505'
    }

});

