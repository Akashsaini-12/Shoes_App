import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
export default function Trending({ brndname }) {
    return (
        <View>
            <Text style={BrandStyle.brand}>Trending Now</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <TouchableOpacity style={BrandStyle.logo}>
                    <View style={BrandStyle.imgBox}>
                        <Image source={require('../assets/shoeStore/shoes8.jpg')} style={BrandStyle.img} />
                    </View>
       
                </TouchableOpacity>
                <TouchableOpacity style={BrandStyle.logo}>
                    <View style={BrandStyle.imgBox}>
                        <Image source={require('../assets/shoeStore/shoes3.jpg')} style={BrandStyle.img} />
                    </View>
      
                </TouchableOpacity>

                {/* <TouchableOpacity style={BrandStyle.logo}>
                    <View style={BrandStyle.imgBox}>
                        <Image source={require('../assets/shoeStore/shoes4.jpg')} style={BrandStyle.img} />
                    </View>
                </TouchableOpacity> */}

                <TouchableOpacity style={BrandStyle.logo}>
                    <View style={BrandStyle.imgBox}>
                        <Image source={require('../assets/shoeStore/shoes5.jpg')} style={BrandStyle.img} />
                    </View>
                   
                </TouchableOpacity>

                {/* <TouchableOpacity style={BrandStyle.logo}>
                    <View style={BrandStyle.imgBox}>
                        <Image source={require('../assets/shoeStore/shoes6.jpg')} style={BrandStyle.img} />
                    </View>  
                </TouchableOpacity> */}

                <TouchableOpacity style={BrandStyle.logo}>
                    <View style={BrandStyle.imgBox}>
                        <Image source={require('../assets/shoeStore/shoes7.jpg')} style={BrandStyle.img} />
                    </View>  
                </TouchableOpacity>
                {/* <TouchableOpacity style={BrandStyle.logo}>
                    <View style={BrandStyle.imgBox}>
                        <Image source={require('../assets/shoeStore/shoes9.jpg')} style={BrandStyle.img} />
                    </View>  
                </TouchableOpacity> */}
                {/* <TouchableOpacity style={BrandStyle.logo}>
                    <View style={BrandStyle.imgBox}>
                        <Image source={require('../assets/shoeStore/shoes10.jpg')} style={BrandStyle.img} />
                    </View>  
                </TouchableOpacity> */}
{/*                 
                <TouchableOpacity style={BrandStyle.logo}>
                    <View style={BrandStyle.imgBox}>
                        <Image source={require('../assets/shoeStore/shoes6.jpg')} style={BrandStyle.img} />
                    </View>  
                </TouchableOpacity> */}
            </ScrollView>
        </View>
    )
}

const BrandStyle = StyleSheet.create({
    brand: {
        color: '#000',
        fontSize: 25,
        fontWeight: '700',
        paddingVertical: 5,
        marginLeft:10
    },
    logo: {
        height: 210,
        width:260,
        marginLeft:10
    },
    img: {
        height: 200,
        width: 250,
    },
    text: {
        color: '#000',
        fontSize: 18,
        fontWeight: '600',
        alignSelf: 'center'
    }
})