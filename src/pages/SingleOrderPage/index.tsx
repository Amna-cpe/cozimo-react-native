import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Pressable, ScrollView } from 'react-native'
import CartProductComponent from '../../components/CartProductComponent'
import { useNavigation, useRoute } from '@react-navigation/native'
import { styles } from "./styles"
import { Auth, DataStore } from 'aws-amplify'
import { Order, OrderProduct, ProductCart } from '../../models'
import { ActivityIndicator } from 'react-native'
import { Product } from '../../models'

export default function SingleOrderPage() {

    const route = useRoute()
    const [order, setOrder] = useState<Order>()
    const [ordersProducts, setOrderProducts] = useState<OrderProduct[]>([])
    const [products, setProducts] = useState<Product[]>([])
    


    const fetchOrders = async () => {
        // let u = await Auth.currentAuthenticatedUser()
        DataStore.query(OrderProduct, (op) => op.orderId("eq", route?.params.id)).then(setOrderProducts).catch(err => console.log(err))

    }

    const fetchProducts = async () => {

        const productsItems = await Promise.all(
            ordersProducts.map(op =>
                DataStore.query(Product, op.productId)
            )
        );
        setProducts(productsItems)


    }

    useEffect(() => {
        DataStore.query(Order, route?.params?.id).then(setOrder).catch(err => console.log(err))
        fetchOrders()
    }, [])

    useEffect(() => {
        // do this only if the cartProducts not assigned yet to a product
        if (ordersProducts.length>0 && !ordersProducts[0].product)
            fetchProducts();
    }, [ordersProducts])

    useEffect(() => {
      
        if (products.length > 0) {
            setOrderProducts(currOrderProducts =>
                currOrderProducts.map(op => ({
                    ...op,
                    product: products.find(p => p.id === op.productId)
                })
                )
            );
        }

    }, [products])

    return (
        ordersProducts&&
        <ScrollView style={styles.root} contentContainerStyle={{ alignItems: 'center' }}>
            {/* order status */}
            <View style={styles.col}>
                <Text style={styles.topTxt}>Order Status</Text>
                <Text style={styles.belTxt}>{order?.status}</Text>
            </View>

            {/* order number */}
            <View style={styles.col}>
                <Text style={styles.topTxt}>Order number</Text>
                <Text style={styles.belTxt}>#{order?.id}</Text>
            </View>
            {/* order date */}
            <View style={styles.col}>
                <Text style={styles.topTxt}>Order date</Text>
                <Text style={styles.belTxt}>{order?.createdAt || 'Sat. 12/5/3030'}</Text>
            </View>

            {/* shipping address */}
            <View style={styles.col}>
                <Text style={styles.topTxt}>shipping address</Text>
                <Text>name:{order?.fullName}</Text>
                <Text>adress line 1: {order?.StreetAdd}</Text>
                <Text>address Line 2: {order?.City} , {order?.Country}</Text>
                <Text>{order?.ZipCode}</Text>
                <Text>T1: {order?.phoneNum} , T2:-</Text>
            </View>


            {/* shipping method */}
            <View style={styles.col}>
                <Text style={styles.topTxt}>shipping method</Text>
                <Text style={styles.belTxt}>{order?.shippingMethod}</Text>
            </View>

            {/* Payment method */}
            <View style={styles.col}>
                <Text style={styles.topTxt}>Payment method</Text>
                <Text style={styles.belTxt}>{order?.PaymentMethod}</Text>
            </View>

            {/* schedual of items orders */}
            {/* product name ,  prduct numer , pr. quantity , price of one , subtotal */}
            <View style={styles.col}>
                <Text style={styles.topTxt}>Item Ordered</Text>


                {/* Dynamic  */}
                {
                    ordersProducts.map(o =>
                        <View style={styles.item}>
                            <Text style={styles.rowTxtName}> {o.product?.title}</Text>
                            <Text style={styles.rowTxt}>ID: {o.productId}</Text>
                            <Text style={styles.rowTxt}>Quantity: {o.quantity}</Text>
                            <Text style={styles.rowTxt}>Price: ${o.quantity * o.product?.price}</Text>
                        </View>
                    )
                }


            </View>

            {/* Subtotal  */}
            <View style={styles.col}>
                <Text style={styles.topTxt}>Subtotal</Text>
                <Text style={styles.belTxt}>${order?.SubTotal}</Text>
            </View>
            {/* Shippinfgfees */}
            <View style={styles.col}>
                <Text style={styles.topTxt}>Shipping fees</Text>
                <Text style={styles.belTxt}>${order?.shippingFees}</Text>
            </View>

            {/*grand total  */}
            <View style={styles.col}>
                <Text style={styles.topTxt}>Grand Total</Text>
                <Text style={styles.belTxt}>${order?.GrandTotal}</Text>
            </View>

            <View style={styles.top}>

            </View>




        </ScrollView>
    )
}


