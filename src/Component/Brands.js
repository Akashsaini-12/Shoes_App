import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import ShoeList from '../Screens/Shoe_list/ShoeList'
export default function Brands({props}) {
    const gotoshoelist=()=>{
        console.log('gotoshoelist')
        props.navigation.navigate('ShoeList')
    }
    return (
        <View>
            <Text style={BrandStyle.brand}>Brand's Categories</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <TouchableOpacity style={BrandStyle.logo} onPress={gotoshoelist}>
                    <View style={BrandStyle.imgBox}>
                        <Image source={require('../assets/nike.jpg')} style={BrandStyle.img} />
                    </View>
                    <Text style={BrandStyle.text}>Nike</Text>
                </TouchableOpacity>
                <TouchableOpacity style={BrandStyle.logo} onPress={gotoshoelist}>
                    <View style={BrandStyle.imgBox}>
                        <Image source={require('../assets/campus.jpg')} style={BrandStyle.img} />
                    </View>
                    <Text style={BrandStyle.text}>Campus</Text>
                </TouchableOpacity>

                <TouchableOpacity style={BrandStyle.logo} onPress={gotoshoelist}>
                    <View style={BrandStyle.imgBox}>
                        <Image source={require('../assets/puma.jpg')} style={BrandStyle.img} />
                    </View>
                    <Text style={BrandStyle.text}>Puma</Text>
                </TouchableOpacity>

                <TouchableOpacity style={BrandStyle.logo} onPress={gotoshoelist}>
                    <View style={BrandStyle.imgBox}>
                        <Image source={require('../assets/Adidas-logo.webp')} style={BrandStyle.img} />
                    </View>
                    <Text style={BrandStyle.text}>adidas</Text>
                </TouchableOpacity>

                <TouchableOpacity style={BrandStyle.logo} onPress={gotoshoelist}>
                    <View style={BrandStyle.imgBox}>
                        <Image source={require('../assets/reebok_logo.jpg')} style={BrandStyle.img} />
                    </View>
                    <Text style={BrandStyle.text}>Reebok</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const BrandStyle = StyleSheet.create({
    brand: {
        color: '#000',
        fontSize: 25,
        fontWeight: '700',
        paddingVertical: 15,
        marginLeft:10
    },
    logo: {
        height: 150,
        marginTop: 20
    },
    imgBox: {
        height: 80,
        width: 80,
        borderRadius: 50,
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: 'white',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10
    },
    img: {
        height: 60,
        width: 60,
        borderRadius: 50,
        padding: 30
    },
    text: {
        color: '#000',
        fontSize: 18,
        fontWeight: '600',
        // alignItems:'center',
        // justifyContent:'center',
        // textAlign:'center'
        alignSelf: 'center'
    }
})