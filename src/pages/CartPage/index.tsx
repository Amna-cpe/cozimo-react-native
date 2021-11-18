import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Pressable } from 'react-native'
import CartProductComponent from '../../components/CartProductComponent'
import { useNavigation } from '@react-navigation/native'
import { styles } from "./styles"
import { Auth, DataStore } from 'aws-amplify'
import { ProductCart } from '../../models'
import { ActivityIndicator } from 'react-native'
import { Product } from '../../models'

export default function HomePage() {

    const navigation = useNavigation()
    const [userSub, setUserSub] = useState('')
    const [cartProducts, setCartProducts] = useState<ProductCart[]>([])
    const [products, setProducts] = useState<Product[]>([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [TotalItems, setTotalItems] = useState(0)


    const onChekOut = () => {
        if (totalPrice > 0 && products && TotalItems > 0)
            navigation.navigate('Address', { total: totalPrice })
    }

    const fetchCartProducts = async () => {
        let user = await Auth.currentAuthenticatedUser()
        setUserSub(user.attributes.sub)
        DataStore.query(ProductCart, (cp) => cp.userSub("eq", user.attributes.sub)).then(setCartProducts).catch(err => console.log(err))
    }

    const fetchProducts = async () => {
        const productsItems = await Promise.all(
            cartProducts.map(cartProduct =>
                DataStore.query(Product, cartProduct.productId)
            )
        );
        setProducts(productsItems)

    }


    useEffect(() => {
       
        fetchCartProducts();
    }, [])
  
    useEffect(() => {
       

        // do this only if the cartProducts not assigned yet to a product
        if (cartProducts.length > 0 && !cartProducts[0].product)
            fetchProducts();
    }, [cartProducts])

    useEffect(() => {
     

        // when the cartProducts are full 

        if (products.length > 0) {
            setCartProducts(currCartProducts =>
                currCartProducts.map(cp => ({
                    ...cp,
                    product: products.find(p => p.id === cp.productId)
                })
                )
            );
        }

    }, [products])

    useEffect(() => {
    

        const total = cartProducts.reduce((sum, currCartProduct) => sum + (currCartProduct?.product?.price || 0) * currCartProduct.quantity, 0)
        const totalItems = cartProducts.reduce((sum, currCartProduct, currIndex) => sum + currCartProduct.quantity, 0)
        setTotalPrice(total)
        setTotalItems(totalItems)
    }, [cartProducts[0]?.product, cartProducts])

    useEffect(() => {

     

        const subScribtions = cartProducts.map(cartp => {

            return DataStore.observe(ProductCart, cartp.id).subscribe(msg => {

                if (msg.opType === 'UPDATE') {
                    setCartProducts(currProducts => currProducts.map(cp => {
                        if (cp.id !== msg.element.id) {

                            return cp
                        } else {

                            return {
                                ...cp,
                                ...msg.element,
                            }
                        }
                    }))
                }
            })
        }
        );
        return () => {

            subScribtions.forEach(sub => sub.unsubscribe())
        };
    }, [cartProducts])


    useEffect(() => {
       

        const subscription = DataStore.observe(ProductCart).subscribe(msg => {
            fetchCartProducts()

        }
        );
        return subscription.unsubscribe;
    }, []);



    console.log(products)

    return (
        <View style={styles.root}>

            <View style={styles.top}>
                {/* the subtotal */}
                <Text style={styles.subtotal}>Subtotal ({TotalItems} items): <Text style={styles.subtotalPrice}>${totalPrice.toFixed(2)}</Text></Text>

                {/* proceed to checkout button  */}
                {
                    totalPrice > 0 ?

                        <Pressable style={styles.button} onPress={onChekOut}>
                            <Text style={styles.buttonText}>Proceed to Ckeckout</Text>
                        </Pressable>
                        :  <ActivityIndicator style={{ marginTop: 50 }} />

                }


            </View>


            {/* Product Component */}
            {products && cartProducts[0]?.product ?
                <FlatList
                    data={cartProducts}
                    renderItem={({ item }) => <CartProductComponent cartItem={item} />}
                    showsVerticalScrollIndicator={false}
                    automaticallyAdjustContentInsets={true}
                // contentContainerStyle={{ paddingBottom: 100 }}
                />
                :
                <ActivityIndicator style={{ marginTop: 50 }} />

            }


        </View>
    )
}


