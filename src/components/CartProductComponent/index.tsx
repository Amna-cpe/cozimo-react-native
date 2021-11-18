import React, { useState } from 'react'
import { View, Text, Image } from 'react-native';
import { styles } from "./styles"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import QuantitySelector from '../QuantitySelector'
import { ProductCart } from '../../models';
import { DataStore } from 'aws-amplify';

interface cartProductItemProps {

    cartItem: ProductCart;

}

export default function CartProductComponent(props: cartProductItemProps) {
    const { cartItem } = props
    const { quantity, product: item, id } = cartItem;
    // const [quantity, setQuantity] = useState(quanProp)

    const updateQuantity = async (newQuantity: number) => {
        // if quantity is greater than 0
        const origianl = await DataStore.query(ProductCart, id);
        if (newQuantity > 0) {
            await DataStore.save(
                ProductCart.copyOf(origianl, updated => {
                    updated.quantity = newQuantity
                })

            )
        }

        // if quantity is zero then delete it
        if (newQuantity === 0) {
            DataStore.delete(origianl);
        }


    }
    return (

        <View style={styles.TopRoot}>
            <View style={styles.root}>

                <Image style={styles.image} source={{ uri: item.image }} />
                <View style={styles.rightContainer}>
                    <Text style={styles.title} numberOfLines={3}>{item.title}</Text>
                    {/* Rating */}
                    <View style={styles.ratingContainer}>

                        {
                            [0, 0, 0, 0, 0].map((e, i) =>
                                <FontAwesome
                                    style={styles.star}
                                    name={(i) < Math.floor(item.avgRating) ? 'star' : ((i < item.avgRating && i >= Math.floor(item.avgRating)) ? 'star-half-full' : 'star-o')}
                                    size={18}
                                    color={'#e47911'}
                                    key={`${item.id}-${i}`}
                                />
                            )
                        }

                        <Text style={{ color: '#f7f7f7' }}>{item.ratings}</Text>

                    </View>
                    <Text style={styles.price}>from ${item.price} {item.oldPrice && <Text style={styles.old}>${item.oldPrice}</Text>} </Text>
                    <View>
                        <QuantitySelector quantity={quantity} setQuantity={updateQuantity} />
                    </View>
                </View>


            </View>






        </View>


    )
}

