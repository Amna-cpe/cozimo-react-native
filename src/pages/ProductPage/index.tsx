import { useNavigation, useRoute } from '@react-navigation/native'
import { DataStore , Auth } from 'aws-amplify'
import React ,{useEffect} from 'react'
import { ActivityIndicator } from 'react-native'
import { View, Text,  Image ,Button , ScrollView   } from 'react-native'
import {  ProductCart } from '../../models'

import { styles } from './styles'
export default function ProductPage() {

    const route = useRoute()
    const navigation = useNavigation()
    if(!route.params?.item) return

    const item = route.params.item 
    
    if(!item) return <ActivityIndicator />

    const AddToCart = async ()=>{
        const user = await Auth.currentAuthenticatedUser()
        if(!item || !user) return 
        const newProductCart = new ProductCart({
            userSub: user.attributes.sub,
            quantity: 1,
            productId: item.id
        });
        await DataStore.save(newProductCart);
        const models = await DataStore.query(ProductCart);
        console.log("model added is : ",models);
        navigation.navigate("cart")

          
    }



    return (
        <ScrollView style={styles.root}>
            {/* this view has the image book as bk and overlay it with color */}
            <View style={styles.top}>
                
                <Image
                    style={[styles.img, {
                        transform: [{ scaleY: 2 }]
                    }]}
                    source={{
                        uri: item.image,
                    }} />

                <View style={{alignItems:'center'}}>
                    {/* BOOK IMAGE */}
                    <View style={[styles.bookImgShadow , {
                        transform:[{ skewY:'3deg'} ]
                    }]}></View>
                   
                    <Image
                        style={styles.bookImg}
                        source={{
                            uri: item.image,
                        }} />
                        
                
                    {/* Book title */}
                    <Text style={styles.title}>{item.title}</Text>
                    {/* Book author */}
                    <Text style={styles.author} >book author</Text>

                </View>

                <View style={styles.bookInfo}>
               
                
                    <View style={styles.rating}>
                        {/* Book rating */}
                        <Text style={styles.topText}>{item.avgRating}</Text>
                        <Text style={styles.bottomText} >rating</Text>
                    </View>

                    <View style={styles.spacer}></View>


                    <View style={styles.rating}>
                        {/* Book price */}
                        <Text style={styles.topText}>${item.price}</Text>
                        <Text style={styles.bottomText} >price</Text>
                    </View>

                    <View style={styles.spacer}></View>



                    <View style={styles.rating}>
                        {/* Book language */}
                        <Text style={styles.topText} >{item.language}</Text>
                        <Text style={styles.bottomText} >language</Text>
                    </View>
                </View>


            </View>

            {/* Descriptiong and add to cart button */}
            <View style={styles.bottom}>

                <Text style = {styles.description} >Description</Text>
           
                {/* scrolling to read the description */}
                <View style={styles.desView}>   
                    <ScrollView>
                        <Text   style = {styles.desParag} >
                                {item.description}
                        </Text>
                    </ScrollView>
                </View>
              
                

                <View style = {styles.buttons} >
                   {/* add to cart button */}
                   <Button title="Add To Cart"  color="#f9784b"  accessibilityLabel="Learn more about this purple button" 
                   onPress={AddToCart} />
         
                   {/* Quantity */}               
                </View>
             
            </View>


        </ScrollView>
    )
}




