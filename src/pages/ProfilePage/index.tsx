import React, { useEffect, useState } from 'react'
import { ActivityIndicatorBase, Pressable, Text, View } from 'react-native'
import { styles } from './styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Auth, DataStore } from 'aws-amplify'
import { useNavigation } from '@react-navigation/core'
import { User } from '../../models'

function ProfilePage() {
    const [user, setUser] = useState<User>()
    const navigation = useNavigation()

    useEffect(() => {
        DataStore.query(User).then(user=>setUser(user[0]))
    }, [])
  
    return (
        user ? 
        <View style={styles.root}>
            {/* User details */}

            <View style={styles.top}>
                <FontAwesome name='user-circle' color={'white'} size={60} />
                {/*  name */}


                    <Text style={{fontSize:20, fontWeight:'bold',color:'#fff'}}>{user.name}</Text>

         
                {/* phone number */}
                <View style={styles.userInfoView}>
                    <Text style={styles.leftText}>phone number</Text>
                    <Text style={styles.RightText}>{user?.phoneNum}</Text>
                    <View style={{ position: 'absolute', bottom: 10, right: 10 }}>
                        <Entypo name="edit" color={'#fafafa'} size={14} />
                    </View>
                </View>
                {/* email */}
                <View style={styles.userInfoView}>
                    <Text style={styles.leftText}>Email</Text>
                    <Text style={styles.RightText}>{user?.email}</Text>
                    <View style={{ position: 'absolute', bottom: 10, right: 10 }}>
                        <Entypo name="edit" color={'#fafafa'} size={14} />
                    </View>
                </View>
                {/* default address */}
                <View style={styles.userInfoView}>
                    <Text style={styles.leftText}>default{'\n'}addres</Text>
                    <Text style={styles.RightText}>{user?.defaultAddress || "Not added yet"}</Text>
                    <View style={{ position: 'absolute', bottom: 10, right: 10 }}>
                        <Entypo name="edit" color={'#fafafa'} size={14} />
                    </View>

                </View>

            </View>

            {/* user orders (diff page) */}

            <Pressable style={styles.bottom} onPress={() => navigation.navigate('orders')}>
                {/* orders */}
                <View style={styles.ordersView}>
                    <Text style={styles.leftText}>Orders</Text>
                    <MaterialIcons name='navigate-next' color={'#fafafa'} size={20} />
                </View>

            </Pressable>






        </View>: <Text>waiting..</Text>
    ) 
}

export default ProfilePage
