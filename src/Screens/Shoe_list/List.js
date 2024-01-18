import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addIemToCart } from './action/Actions';
import LinearGradient from 'react-native-linear-gradient';
import shoestyl from './ShoeStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
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

const Products = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [favorites, setFavorites] = useState([]);

  const addItem = item => {
    dispatch(addIemToCart(item));
  };
  const items = useSelector(state => state);
  let addedItems = [];
  addedItems = items;

  const toggleFavorite = async (item, name, image, price) => {
    const isFavorite = favorites.some(fav => fav.id === item.id);
    let updatedFavorites = [];
    if (isFavorite) {
      updatedFavorites = favorites.filter(fav => fav.id !== item.id);
    } else {
      updatedFavorites = [...favorites, item];
    }
    console.log("function----------------------------------")
    setFavorites(updatedFavorites);

    // Save favorites to AsyncStorage
    try {
      await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      console.log(favorites)
    } catch (error) {
      console.log(error);
      console.log('---------------------');
    }
    const Token = await AsyncStorage.getItem('auth_token');
    const CustomerId = await AsyncStorage.getItem('details');
    // Send favorites to the server using the API
    try {
      console.log(item.image, 'item.image')
      const response = await fetch('http://192.168.33.147:5240/LikedProducts', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${Token}`,
          'guid': "4C4C4544-004A-5910-8034-C2C04F4E4D33",
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          eventID: '1001',
          addInfo: {
            CustomerId: +CustomerId,
            PImage: image, // Update this with the correct property from your item object
            Product: name, // Update this with the correct property from your item object
            Price: String(price), // Update this with the correct property from your item object
            guid: "4C4C4544-004A-5910-8034-C2C04F4E4D33",
          },
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send favorites to the server');
      }

      // Handle the response if needed
      const result = await response.json();
      console.log('Server response:', result);
    } catch (error) {
      console.error('Error sending favorites to the server:', error);
    }
  };

  const back = () => {
    navigation.goBack();
  };

  useEffect(() => {
    // Load favorites from AsyncStorage
    const loadFavorites = async () => {
      try {
        const storedFavorites = await AsyncStorage.getItem('favorites');
        if (storedFavorites) {
          setFavorites(JSON.parse(storedFavorites));
        }
      } catch (error) {
        console.error('Error loading favorites from AsyncStorage:', error);
      }
    };

    loadFavorites();
  }, []);

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
                {addedItems.length}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={item}
          renderItem={({ item }) => {
            const isFavorite = favorites.some(fav => fav.id === item.id);

            return (
              <View style={shoestyl.container}>
                <TouchableOpacity style={{ position: 'absolute', left: '85%', top: 5 }} onPress={() => toggleFavorite(item)}>
                  <Icon name='heart' size={30} color={isFavorite ? '#bd1004' : '#bbb'} />
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
