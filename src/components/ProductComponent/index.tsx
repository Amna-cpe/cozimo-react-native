import React from 'react'
import { View, Text, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import FontAwesome from "react-native-vector-icons/FontAwesome"

import { styles } from "./styles"
import { Product } from '../../models';

interface ProductItemProps {
    item:Product
}

export default function ProductComponent(props: ProductItemProps) {
    const { item } = props;
    const navigation = useNavigation()
    return (

        <Pressable onPress={() => navigation.navigate('ProductDetails', { item:item })} style={styles.root}>

            <Image style={styles.image} source={{ uri: item.image }} />
            <View style={styles.rightContainer}>
                <Text style={styles.title} numberOfLines={3}>{item.title}</Text>
                {/* Rating */}
                <View style={styles.ratingContainer}>

                    {
                        [0, 0, 0, 0, 0].map((e, i) =>
                            <FontAwesome
                                style={styles.star}
                                name={(i) < Math.floor(item.avgRating? item.avgRating : 0) ? 'star' : (item.avgRating&&(i < item.avgRating && i >= Math.floor(item.avgRating)) ? 'star-half-full' : 'star-o')}
                                size={18}
                                color={'#e47911'}
                                key={`${item.id}-${i}`}
                            />
                        )
                    }

                    <Text style={{ color: '#f7f7f7' }}>{item.ratings}</Text>

                </View>
                <Text style={styles.price}>from ${item.price.toFixed(2)} {item.oldPrice?.toFixed(2) && <Text style={styles.old}>${item.oldPrice}</Text>} </Text>

            </View>

        </Pressable>

    )
}

