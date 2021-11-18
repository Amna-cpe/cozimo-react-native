import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, ScrollView, ScrollViewBase } from 'react-native'
import ProductComponent from '../../components/ProductComponent'
import NameModal from '../../components/NameModal';

import { DataStore } from '@aws-amplify/datastore';
import { Product, User } from '../../models';
import { Auth } from 'aws-amplify';
import Category from '../../components/Category';

export default function HomePage({ search }: { search: string }) {

    const [products, setProducts] = useState<Product[]>([])
    const [modalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState('')

    const querySearchData = async (search: String) => {
        const data = await DataStore.query(Product, (p) => p.title('eq', search))
        setProducts(data)
    }

    const queryData = async () => {
        const models = await DataStore.query(Product);
        setProducts(models)
    }
    const queryUser = async () => {
        const curr_user = await Auth.currentAuthenticatedUser()
        const userSub = curr_user.attributes.sub
        const user = await DataStore.query(User, (u) => u.userSub("eq", userSub));
        if (user.length === 0) {
            setModalVisible(true)

        }

    }
    const createUser = async () => {
        const curr_user = await Auth.currentAuthenticatedUser()
        const userSub = curr_user.attributes.sub


        await DataStore.save(
            new User({
                name,
                email: curr_user.attributes.email,
                userSub,
                phoneNum: curr_user.attributes.phone_number,
            })
        );
    }

    const findAllMatches = (value: string) => {
        const matches = products.filter(p => {
            const regex = new RegExp(value, 'gi');
            console.log(regex)
            console.log("the match is ??", p.title.match(regex))
            return p.title.match(regex)
        });
        setProducts(matches)
    }

    useEffect(() => {
        queryData()
        queryUser()
    }, [])

    useEffect(() => {
        // create the user only if there is a name
        if (name) {
            createUser()
        }
    }, [name])
    useEffect(() => {
        console.log('the search value is insude usee', search)
        if (search)
            findAllMatches(search)
        else
            queryData()
    }, [search])


    console.log(products.length)

    return (

        <View style={styles.root}>
            {
                <ScrollView>
                    <NameModal setFullName={setName} modalVisible={modalVisible} setModalVisible={setModalVisible} />
                    {/* Categories */}
                    <View style={styles.categories}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                            <Category cat_one={{ title: 'fantasy', img: 'https://www.rd.com/wp-content/uploads/2019/12/book-e1576790089347.jpg' }} cat_two={{ title: 'history', img: 'https://media.istockphoto.com/vectors/open-book-with-history-doodles-and-lettering-vector-id1092170968?s=612x612' }} />
                            <Category cat_one={{ title: 'rommance', img: 'https://www.rd.com/wp-content/uploads/2019/11/heart-book-e1574702487427-scaled.jpg?resize=1536,1393' }} cat_two={{ title: 'information', img: 'https://images.squarespace-cdn.com/content/v1/5bde429dd274cb5579afae26/1554351281115-WSVED9LMA0V4159QNZ7E/DocPorBookImage.jpg?format=1000w' }} />
                            <Category cat_one={{ title: 'web developemnet', img: 'https://images-na.ssl-images-amazon.com/images/I/41MoZScb3gL._SX331_BO1,204,203,200_.jpg' }} cat_two={{ title: 'manga', img: 'https://cdn140.picsart.com/345974780043201.jpg?type=webp&to=min&r=640' }} />

                        </ScrollView>
                    </View>
                    {/* Product Component */}
                    {
                        products.length > 0 ? <FlatList
                            data={products}
                            renderItem={({ item }) => <ProductComponent item={item} />}
                            showsVerticalScrollIndicator={false}
                        />
                            :
                            <Text style={{ fontSize: 25, margin: 20, color: '#fff' }}>No items with '{search}'</Text>

                    }

                </ScrollView>



            }


        </View>

    )
}


export const styles = StyleSheet.create({
    root: {
        backgroundColor: '#1d202b',
        height: '100%',
    },
    categories: {
        height: 300,
        backgroundColor: '#f9784b',
        padding: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10



    }

});



