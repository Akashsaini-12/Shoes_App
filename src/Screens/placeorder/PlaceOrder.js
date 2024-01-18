import { View, Text, Image } from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function PlaceOrder(props) {
    const gotoHome=()=>{
        props.navigation.navigate('Home')
    }
  return (
    <View style={{height:'100%',width:'100%',backgroundColor:"#9391F3",alignItems:"center"}}>
     
<Image source={require('../../assets/orderplace2.webp')} style={{height:250,width:200,marginBottom:70,marginTop:40}}/>
<Icon
            name="cart-check"
            size={55}
            color="#fff"/>
      <Text style={{fontSize:40,color:'white',fontWeight:'600'}}>Congratulations !</Text>
      <Text style={{fontSize:38,color:'white',fontWeight:'600'}}>Your Order is Placed</Text>
      <View style={{display:'flex',alignItems:'center',height:30,width:120,
      justifyContent:'center',backgroundColor:'white',marginTop:20,borderRadius:5}}>
      <Text style={{
        color:'white',
        fontWeight:'700',
        color:'#9391F3'}} onPress={gotoHome}>« Back To Home</Text>
      </View>
      
    </View>
  )
}