import React, { useEffect, useState } from 'react'
import { FlatList, Pressable, Text, View } from 'react-native'
import { styles } from './styles'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Auth, DataStore } from 'aws-amplify'
import { useNavigation } from '@react-navigation/core'
import { Order, User } from '../../models'

function OrderPage() {
    // let products = ['', '', '', '' , '' , '' , '' , ''];
    const [orders, setOrderProducts] = useState<Order[]>([])
    const navigation = useNavigation()
    const [user, setuser] = useState<User>()

    const fetchOrders = async () => {
        let u= await Auth.currentAuthenticatedUser()
        const models = await DataStore.query(User);
        setuser(models[0])
        DataStore.query(Order, (op) => op.userSub("eq", u.attributes.sub)).then(setOrderProducts).catch(err => console.log(err))

    }
    useEffect(() => {
        //  fetch all the orders for the user only date , id , status
        fetchOrders()

    }, [])
    console.log("the orders are", orders)
    return (
        <View style={styles.root}>
            {/* User details */}

            <View style={styles.top}>
                <MaterialIcons name='shopping-basket' color={'white'} size={30} />
                <Text style={styles.topText}>{user?.name}'s Orders</Text>

            </View>
            {/* a flat list of prevous or current orders */}

            {/* default address */}
            <FlatList
                contentContainerStyle={{ width: '90%', alignSelf: 'center' }}
                data={orders}
                automaticallyAdjustContentInsets={true}
                style={{ marginBottom: 10 }}
                renderItem={({ item }) => {
                    let orderStatus = item.status==='complete'?{color:'green'}:{color:'blue'}

                    return <Pressable style={styles.userInfoView} onPress={() => navigation.navigate('order',{id:item.id})}>
                        <View style={{ flexDirection: 'row' }}>
                            {
                                item.status === 'complete' ? <AntDesign name='checkcircle' color={'green'} size={25} />
                                    : (

                                        item.status === 'in-progress' ? <Entypo name='progress-two' color={'blue'} size={25} />
                                            :
                                            <MaterialIcons name='pending' color={'orange'} size={25} />
                                    )
                            }


                            <Text style={[styles.status, orderStatus]}>{item.status}</Text>

                        </View>
                        <Text style={styles.orderNum}>{item.createdAt || 'sat 22/22/22'}</Text>
                        <Text style={styles.date}>Order Number: {item.id}</Text>
                        <MaterialIcons style={styles.moreDetail} name='navigate-next' color={'black'} size={27} />

                    </Pressable>
                }
                }
                showsVerticalScrollIndicator={false}
            />

        </View>
    );

}

export default OrderPage
