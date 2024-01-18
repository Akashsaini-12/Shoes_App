import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveFromWishList, addIemToCart, addToWishList } from './action/Actions';
import LinearGradient from 'react-native-linear-gradient';
import shoestyl from './ShoeStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as AuthAction from '../../Store/Action/Auth'
const item = [
  {
    id: 0,
    image: require('../../assets/shoeStore/shoes2.jpg'),
    name: 'Nike maxPro270',
    price: 5000,

  },
  {
    id: 1,
    image: require('../../assets/shoeStore/shoes4.jpg'),
    name: 'Nike max500',
    price: 6000,

  },
  {
    id: 2,
    image: require('../../assets/shoeStore/shoes9.jpg'),
    name: 'Nike x',
    price: 2700,

  },
  {
    id: 3,
    image: require('../../assets/shoeStore/shoes6.jpg'),
    name: 'Nike a270',
    price: 3000,

  },
  {
    id: 4,
    image: require('../../assets/shoe3.jpg'),
    name: 'Nike airmax270',
    price: 1200,

  },
  {

    id: 5,
    image: require('../../assets/shoeStore/shoes10.jpg'),
    name: 'Nike airmax270',
    price: 2700,

  },
];

const Products = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const items = useSelector( state => state?.Auth?.additem);
  console.log(items ,'item')
  const [favorites, setFavorites] = useState([]);

  const addItem = async(item) => {
    var res= await dispatch(AuthAction.addItem(item));
  };
  const addfavroute =async(item) => {
    await dispatch(AuthAction.addToFav(item));
  };
  
  let addedItems = [];
  addedItems = items;

  // const toggleFavorite = async (item) => {
  //   const isFavorite = favorites.some(fav => fav.id === item.id);
  //   let updatedFavorites = [];
  //   if (isFavorite) {
  //     updatedFavorites = favorites.filter(fav => fav.id !== item.id);
  //   } else {
  //     updatedFavorites = [...favorites, item];
  //   }
  //   console.log("function----------------------------------")
  //   setFavorites(updatedFavorites);
  //   // Save favorites to AsyncStorage
  // };
  const toggleFavorite = async (item) => {
    console.log(item ,'toggleFavorite');
    const isFavorite = items.some(fav => fav.id === item.id);

    if (isFavorite) {
        // const index = items.findIndex(fav => fav.id === item.id);
        // dispatch(RemoveFromWishList(index));
        dispatch(addToWishList(item));
    } else {
        dispatch(addToWishList(item));
    }
};

  const back = () => {
    props.navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={{ width: '100%', height: 70, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 20 }}>
          <Text onPress={back} style={{ color: '#000', marginLeft: 8, fontSize: 18, fontWeight: '600' }}>« Go Back</Text>
          <View>
            <TouchableOpacity style={{
              display: 'flex',
              flexDirection: 'row',
              height: 35,
              marginTop: 10,
              backgroundColor: '#9391F3',
              width: 80,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10
            }} onPress={() => {
              navigation.navigate('Cart');
            }}>
              <Icon name='shopping-cart' color='white' size={25} style={{ marginRight: 15 }} />
              <Text style={{ marginLeft: 10, fontSize: 20, fontWeight: '800', color: 'white' }}>
                {items.length}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={item}
          renderItem={({ item }) => {
            // const isFavorite = items.some(fav => fav.id === item.id);

            return (
              <View style={shoestyl.container}>
                <TouchableOpacity style={{ position: 'absolute', left: '85%', top: 5 }} 
                
                onPress={() => addfavroute(item)}

                >
                  <Icon name='heart' size={30} 
                  color={ '#bbb'} />
                </TouchableOpacity>
                <Image source={item.image} style={shoestyl.img} />
                <Text style={shoestyl.txt}>{item.name}</Text>
                <Text style={shoestyl.txt}>Price - {item.price}₹</Text>

                <TouchableOpacity style={shoestyl.button} onPress={() => { addItem(item); }}>
                  <LinearGradient colors={['#9391F3', '#FB6376']} style={shoestyl.gradient}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: '600' }}>Add To Cart</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            );
          }}
        />


      </View>
    </SafeAreaView>
   
  );
};


export default Products;
