// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import shoestyl from '../Shoe_list/ShoeStyle';
// const Fav = (props) => {
//   const [favItems, setFavItems] = useState([]);

//   useEffect(() => {
//     // Fetch favorite items from the server

//     const fetchFavItems = async () => {
//       const Token = await AsyncStorage.getItem('auth_token');
//       const CustomerId = await AsyncStorage.getItem('details');
//       try {
//         const response = await fetch('http://192.168.33.147:5240/LikedProducts', {
//           method: 'POST',
//           headers: {
//             'Authorization': `Bearer ${Token}`,
//             'guid': "4C4C4544-004A-5910-8034-C2C04F4E4D33",
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             eventID: '1002',
//             addInfo: {
//               CustomerId: +CustomerId,

//             },
//           }),
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch favorite items');
//         }

//         const result = await response.json();
//         console.log(result, 'result')
//         // Assuming the response structure is an array of favorite items
//         setFavItems(result.rData);
//       } catch (error) {
//         console.error('Error fetching favorite items:', error);
//       }
//     };

//     fetchFavItems();
//   }, []);
//   const gotoProfile = () => {
//     props.navigation.navigate('Profile')
//   }
//   return (
//     <View>
//       <View style={Favstyles.head}>
//         <Text style={Favstyles.heading}>Favourite</Text>
//         <Text style={Favstyles.profile} onPress={gotoProfile}>«Go To Profile</Text>
//       </View>

//       <View style={{ justifyContent: 'center', alignItems: 'center', borderColor: 'black', elevation: 4, backgroundColor: 'white' }}>
//         <Image source={favItems.PImage} style={shoestyl.img} />
//         <View>
//           <Text style={{
//             fontSize: 16,
//             fontWeight: '600',
//             marginBottom: 5
//           }}>{favItems.Product}</Text>
//           <Text style={{
//             fontSize: 16,
//             fontWeight: '600',
//             marginBottom: 5
//           }}>{favItems.Price}</Text>
//         </View>
//       </View>

//     </View>
   
//   );
// };
// export default Fav;
// const Favstyles = StyleSheet.create({
//   heading: {
//     fontSize: 30,
//     fontWeight: '700',
//     color: 'white',
//     textAlign: 'center',
//     marginTop: 15,
//     marginBottom: 5
//   },
//   profile: {
//     color: 'white',
//     fontWeight: '700',
//     borderBottomWidth: 1,
//     borderBottomColor: 'white',
//     width: 100,
//     alignSelf: 'center'
//   },
//   head: {
//     backgroundColor: "#9391F3",
//     // height:80,
//     borderBottomRightRadius: 40,
//     borderBottomLeftRadius: 40,
//     paddingBottom: 20
//   }
// })


// // Wishlist.js
// import React from 'react';
// import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// // import { removeFromWishlist } from './path-to-your-action-folder/Actions';
// // import shoestyl from './path-to-your-ShoeStyle';


// import shoestyl from '../Shoe_list/ShoeStyle';
// import { RemoveFromWishList } from '../Shoe_list/action/Actions';

// const Fav = (props) => {
 
//     const dispatch = useDispatch();

//     const loginUserDetail = useSelector(state => state?.Auth?.addtowishlist);
//     console.log(loginUserDetail, 'loginUserDetail')
//     const removeItemFromWishlist = (item) => {
//         dispatch(RemoveFromWishList(item));
//     };
  

//     const renderWishlistItem = ({ item }) => (
//         <View style={shoestyl.container}>
//             <TouchableOpacity style={{ position: 'absolute', right: 10, top: 10 }} 
//             // onPress={() =>
//             // //comment
//             //    removeItemFromWishlist(item)
//             //   }
//                >
//                 {/* You can use your own icon for removing from wishlist */}
//                 <Text>X</Text>
//             </TouchableOpacity>
//             <Image source={item.image} style={shoestyl.img} />
//             <Text style={shoestyl.txt}>{item.name}</Text>
//             <Text style={shoestyl.txt}>Price - {item.price}₹</Text>
//         </View>
//     );

//     return (
//         <View>
//             {/* <TouchableOpacity onPress={handlefav}> */}

//             <Text>hii</Text>
//             {/* </TouchableOpacity> */}
//             {/* <Text>Wishlist Items:</Text>
//             {wishlistItems.length > 0 ? (
//                 <FlatList
//                     data={wishlistItems}
//                     renderItem={renderWishlistItem}
//                     keyExtractor={(item) => item.id.toString()}
//                 />
//             ) : (
//                 <Text>No items in the wishlist.</Text>
//             )} */}
//         </View>
//     );
// };

// export default Fav;




import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    FlatList,
  } from 'react-native';
  import React from 'react';
  import {useNavigation} from '@react-navigation/native';
  import {useDispatch, useSelector} from 'react-redux';
  import { removeIemFromCart } from '../Shoe_list/action/Actions';
  import LinearGradient from 'react-native-linear-gradient';
  import * as AuthAction from '../../Store/Action/Auth'
  // import {removeItemFromCart} from './action/Actions';
  import shoestyl from '../Shoe_list/ShoeStyle';
  import Btn from '../../Component/Btn';
  
  const Fav = (props) => {
    const navigation = useNavigation();
    const items = useSelector(state => state?.Auth?.addtowishlist);
    console.log(items ,'items')
    const dispatch = useDispatch();
  
    const removeFavItem =async(index) => {
      await dispatch(AuthAction.removeFavItems(index));
    };
  
   
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1,backgroundColor:'#fff'}}>
          <View
            style={{
              width: '100%',
              height:70,      
           backgroundColor:"#9391F3",
           borderBottomLeftRadius:40,
           borderBottomRightRadius:40,
           justifyContent:'center',
           alignSelf:'center',
           alignItems:'center'
            }}>
                   <Text style={{ fontSize: 30, fontWeight: '700',color:'#fff',textAlign:'center',}}>My Favourite</Text>
             </View>
    
          <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',height:60,alignItems:'center'}}>
          <TouchableOpacity
              style={{
                paddingLeft: 20,
                marginLeft: 15,
              }}
              onPress={() => {
                navigation.goBack();
              }}>
              <Text style={{fontWeight: '700',color:'#9391F3',fontSize: 35,marginBottom:5}}>←</Text>
            </TouchableOpacity> 
        </View>
  
    
          <FlatList
            data={items}
            renderItem={({item, index}) => {
              return (
                <View
                style={{ 
                  //  alignItems:'center',
                borderColor:'#bbb',
                padding:10,
                elevation:4,
                width:300,
                height:175,
                alignSelf:'center',
                marginVertical:5,
                backgroundColor:'#fff',
                borderRadius:10}}>
  <View style={{display:'flex', flexDirection:'row',justifyContent:'space-between',alignItems: 'center',}}>
                 <Image
                  source={item.image}
                  style={{height:100,width:150}}
                />
                <View>
                <Text style={shoestyl.txt}>{item.name}</Text>
                <Text style={shoestyl.txt}>Price - {item.price}₹</Text>
                </View>
    </View>
    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
                <TouchableOpacity style={{width:'60%',alignSelf:'center',marginVertical:12}}  onPress={() => {
                    removeFavItem(index);
                    }}>
                <LinearGradient colors={['#9391F3', '#FB6376']} style={shoestyl.gradient}>
                  <Text style={{ color: 'white', fontSize: 16, fontWeight: '600' }}>Remove Favourite</Text>
                </LinearGradient>
           </TouchableOpacity>
         </View>
           </View>
            );
          }}
        />
        </View>
      </SafeAreaView>
    );
  };
  
  export default Fav;
  