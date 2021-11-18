import React, { useEffect, useState } from 'react'
import { View, Text, Pressable, Alert, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import countryList from 'country-list'
import CustomeInputField from '../../components/CustomeInputField'
import CheckBox from '@react-native-community/checkbox';
import { useStripe } from '@stripe/stripe-react-native';

import { styles } from './styles'
import { API, Auth, DataStore, graphqlOperation } from 'aws-amplify';
import { ProductCart, OrderProduct, Order, User } from '../../models';
import { useNavigation } from '@react-navigation/core';
import { useRoute } from '@react-navigation/native';
import { createPayment } from '../../graphql/mutations';

export default function AddressPage() {
    const countries = countryList.getData();
    const navigation = useNavigation()
    const route = useRoute()
    const { initPaymentSheet, presentPaymentSheet } = useStripe()
    const [selectedCountry, setCountry] = useState(countries[0].code);

    const [fullName, setFullname] = useState('');
    const [phoneNum, setPhoneNum] = useState(0);
    const [StreetAdd, setStreetAdd] = useState('');
    const [BuildAdd, setBuildAdd] = useState('');
    const [City, setCity] = useState('');
    const [ZipCode, setZipCode] = useState('');
    const [State, setState] = useState('');
    const [clientSecret, setClientSecret] = useState<'' | null>(null)


    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const onCheckToggle = async (newValue: boolean) => {
        setToggleCheckBox(newValue)
        if (newValue) {
            const curr_user = await Auth.currentAuthenticatedUser()
            const userSub = curr_user.attributes.sub
            const CURRENT_ITEM = await DataStore.query(User, userSub);
            await DataStore.save(User.copyOf(CURRENT_ITEM, item => {
                item.defaultAddress = StreetAdd + ' , ' + BuildAdd + ' , ' + City + " , " + ' , ' + State
            }));
        }
    }
    const checkout = async (e: React.FormEvent<EventTarget>) => {
        e.preventDefault()
        if (!fullName) {
            Alert.alert('Please fill in the places!');
            return;
        }
        // handle payment
        // 1. initialize prebuild stripe ui
        openPymentSheet()

        //  get the currentUser
        const user = await Auth.currentAuthenticatedUser()
        const userSub = user.attributes.sub;

        // create an order with { userSub Country fullName phoneNum StreetAdd BuildAdd City ZipCode State: }
        const newOrder = await DataStore.save(
            new Order({
                userSub,
                Country: selectedCountry,
                fullName,
                phoneNum: phoneNum.toString(),
                StreetAdd,
                BuildAdd,
                City,
                ZipCode,
                State,
                SubTotal: route.params?.total,
                GrandTotal: route.params?.total,
                shippingMethod: 'express',
                PaymentMethod: 'k-net',
                status: 'in-progress',
                shippingFees: 0,
                createdAt: new Date().toISOString()


            })
        );

        // creat orderproduct for all the cartproducts and add the order
        const AllCartProductForThisUser = await DataStore.query(ProductCart, (cp) => cp.userSub("eq", userSub))
        await Promise.all(AllCartProductForThisUser.map(cp =>
            DataStore.save(
                new OrderProduct({
                    userSub,
                    quantity: cp.quantity,
                    productId: cp.productId,
                    orderId: newOrder.id
                })
            )
        )
        )

        // delete all the cart products  from this user
        await Promise.all(AllCartProductForThisUser.map(cp => DataStore.delete(cp)));

        //  transfer to the current orders page from the user profilr
        // but for now trans to home 

        setBuildAdd('')
        setCity("")
        setCountry('')
        setFullname('')
        setPhoneNum(0)
        setZipCode('')
        setStreetAdd('')
        setState("")

        navigation.navigate('Home');
    }





    const fetchPaymentIntent = async () => {
        console.log( Math.floor(route.params?.total* 100 || 0) )
        const res = await API.graphql(
            graphqlOperation(createPayment, { amount: Math.floor(route.params?.total* 100 || 0) })
        );
        setClientSecret(res.data.createPayment.clientSecret)

        console.log("the results is" , res)
    }

    const initializePaymentSheet = async () => {

        if (!clientSecret) return;
        const { error } = await initPaymentSheet({
            paymentIntentClientSecret: clientSecret,
        });

    };

    const openPymentSheet = async () => {
        if (!clientSecret) {
            return
        }
        const { error } = await presentPaymentSheet({ clientSecret })
        if (error) {
            Alert.alert(`Error Code: ${error.code}`, error.message);
        } else {
            Alert.alert('success', 'Your Order is Confirmed')
        }

    }



    useEffect(() => {
        fetchPaymentIntent()
    }, [])
    useEffect(() => {
        if (clientSecret) {
            initializePaymentSheet()
        }
    }, [clientSecret])



    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}
        >
            <ScrollView >

                <View style={styles.row}>
                    {/* Picker Country */}
                    <Picker
                        selectedValue={selectedCountry}
                        onValueChange={setCountry}
                    >
                        {
                            countries.map((country, index) => (
                                <Picker.Item label={country.name} value={country.code} key={index} />
                            ))
                        }
                    </Picker>
                    <View style={styles.fields}>
                        <CustomeInputField
                            text={'Full Name (First and last name)'}
                            numFields={1}
                            typeOfInput={'input'}
                            placeHolder={'enter name..'}
                            textState={fullName}
                            setText={setFullname}
                            type={'none'}
                        />

                        <CustomeInputField
                            text={'Phone Number'}
                            numFields={1}
                            typeOfInput={'input'}
                            placeHolder={''}
                            textState={phoneNum}
                            setText={setPhoneNum}
                            type={'phoneNumber'}
                        />

                        <CustomeInputField
                            text={'Address'}
                            numFields={2}
                            typeOfInput={'input'}
                            placeHolder={'Street address or P.O Box'}
                            placeHolder2={'Apt, Suite, Unit , Building (optional)'}
                            textState={StreetAdd}
                            setText={setStreetAdd}
                            type={'none'}
                            text2State={BuildAdd}
                            setText2={setBuildAdd}
                        />


                        <CustomeInputField
                            text={'City'}
                            numFields={1}
                            typeOfInput={'input'}
                            placeHolder={'City..'}
                            textState={City}
                            setText={setCity}
                            type={'none'}
                        />

                        <View style={styles.wrapAdd}>


                            <CustomeInputField
                                text={'State'}
                                numFields={1}
                                typeOfInput={'input'}
                                placeHolder={''}
                                textState={State}
                                setText={setState}
                                type={'none'}
                            />

                            <CustomeInputField
                                text={'Zip Code'}
                                numFields={1}
                                typeOfInput={'input'}
                                placeHolder={''}
                                textState={ZipCode}
                                setText={setZipCode}
                                type={'phoneNumber'}
                            />

                        </View>

                        <View style={{ flexDirection: 'row', margin: 5, marginLeft: 30, alignItems: 'center' }}>

                            <CheckBox
                                disabled={false}
                                value={toggleCheckBox}
                                onValueChange={onCheckToggle}
                            />

                            <Text style={styles.text}>Make this my default address</Text>

                        </View>



                        <Pressable style={styles.button} onPress={checkout}>
                            <Text style={styles.buttonText}>Use this address</Text>
                        </Pressable>


                    </View>



                </View>



            </ScrollView>

        </KeyboardAvoidingView>
    )
}



