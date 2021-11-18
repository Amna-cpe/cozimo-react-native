import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({

    root: {
        flexDirection: 'row',
        margin: 10,
        borderWidth: 1,
        borderColor: '#774d94',
        borderRadius: 5,
        backgroundColor: '#2a2d37',
        color:'#fff',
    },
    image: {
        flex: 2,
        height: 150,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 17,
        fontWeight: "bold",
        color:'#fafafa',


    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color:'#fff',

    },
    rightContainer: {
        padding: 10,
        flex: 3
    },
    ratingContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'center'
    },
    star: {
        marginRight: 2
    },
    old: {
        fontSize: 10,
        textDecorationLine: 'line-through',
        color: '#d23b3b',
    }
});
