import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Pressable } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { styles } from "./styles"


export default function MenuPage() {



    return (
        <View style={styles.root}>

            <Text style={styles.title}>Setting</Text>
            {/* Notifications */}
            <View style={styles.menu}>
                <View style={styles.menuItem}>
                    <MaterialIcons name='notifications' size={24} color={'black'} />
                    <Text style={styles.txt}>Notifications</Text>
                </View>

                <MaterialIcons name='navigate-next' color={'#000'} size={24} />
            </View>
            {/* Apperance */}
            <View style={styles.menu}>
                <View style={styles.menuItem}>
                    <MaterialIcons name='remove-red-eye' size={24} color={'black'} />
                    <Text style={styles.txt}>Apperance</Text>
                </View>
                <MaterialIcons name='navigate-next' color={'#000'} size={24} />
            </View>
            {/* Privacy and setting */}
            <View style={styles.menu}>
                <View style={styles.menuItem}>
                    <MaterialIcons name='lock-outline' size={24} color={'black'} />
                    <Text style={styles.txt}>Privacy and setting</Text>
                </View>
                <MaterialIcons name='navigate-next' color={'#000'} size={24} />
            </View>
            {/* Help and support */}
            <View style={styles.menu}>
                <View style={styles.menuItem}>
                    <MaterialIcons name='help-outline' size={24} color={'black'} />
                    <Text style={styles.txt}>Help and support</Text>
                </View>
                <MaterialIcons name='navigate-next' color={'#000'} size={24} />
            </View>
            {/* About */}
            <View style={styles.menu}>
                <View style={styles.menuItem}>
                    <MaterialIcons name='question-answer' size={24} color={'black'} />
                    <Text style={styles.txt}>About</Text>
                </View>
                <MaterialIcons name='navigate-next' color={'#000'} size={24} />
            </View>

            <Text style={styles.fotter}>All right preserved to Amna Jasser {'\n'} Github : @Amna-cpe </Text>

        </View>
    )
}


