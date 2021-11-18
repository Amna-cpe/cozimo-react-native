import React from 'react'
import { View, Text, StyleSheet, FlatList, Image ,Button , ScrollView ,SafeAreaView  } from 'react-native'

import { styles } from './styles'
export default function ProductPage() {
    return (
        <View style={styles.root}>
            {/* this view has the image book as bk and overlay it with color */}
            <View style={styles.top}>
                <Image
                    style={[styles.img, {
                        transform: [{ scaleY: 2 }]
                    }]}
                    source={{
                        uri: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
                    }} />
                <View>

                    {/* BOOK IMAGE */}
                    <View style={[styles.bookImgShadow , {
                        transform:[{ skewY:'3deg'} ]
                    }]}></View>
                    <Image
                        style={styles.bookImg}
                        source={{
                            uri: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
                        }} />
                
                    {/* Book title */}
                    <Text style={styles.title}>book title</Text>
                    {/* Book author */}
                    <Text style={styles.author} >book author</Text>

                </View>

                <View style={styles.bookInfo}>
                    <View style={styles.rating}>
                        {/* Book rating */}
                        <Text style={styles.topText}>3.22</Text>
                        <Text style={styles.bottomText} >rating</Text>
                    </View>

                    <View style={styles.spacer}></View>


                    <View style={styles.rating}>
                        {/* Book price */}
                        <Text style={styles.topText}>$23.22</Text>
                        <Text style={styles.bottomText} >price</Text>
                    </View>

                    <View style={styles.spacer}></View>



                    <View style={styles.rating}>
                        {/* Book language */}
                        <Text style={styles.topText} >English</Text>
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
                                Winning will make you famous. Losing means certain death.
                                The nation of Panem, formed from a post-apocalyptic North
                                America, is a country that consists of a wealthy Capitol
                                region surrounded by 12 poorer districts. Early in its
                                history, a rebellion led by a 13th district against the
                                Capitol resulted in its destruction and the creation of an
                                annual televised event known as the Hunger Games. In
                                punishment, and as a reminder of the power and grace of the
                                Capitol, each district must yield one boy and one girl
                                between the ages of 12 and 18 through a lottery system to
                                participate in the games. The tributes are chosen during the
                                annual Reaping and are forced to fight to the death, leaving
                                only one survivor to claim victory. When 16-year-old Katniss
                                young sister, Prim, is selected as District 12 female
                                representative, Katniss volunteers to take her place
                        </Text>
                    </ScrollView>
                </View>
              
                

                <View style = {styles.buttons} >
                   {/* add to cart button */}
                   <Button  style = {styles.add}  title="Add To Cart"  color="#f9784b"  accessibilityLabel="Learn more about this purple button"/>

                   {/* Quantity */}               
                </View>
             
            </View>


        </View>
    )
}




