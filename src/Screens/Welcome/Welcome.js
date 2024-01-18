import { View, Text,ImageBackground,style} from 'react-native'
import React from 'react'
import Wlcmstyles from './wlcmStyle';
import Btn from '../../Component/Btn';

import Icon from 'react-native-vector-icons/dist/FontAwesome';
export default function Welcome({navigation}) {
  const gotoLogIn= ()=>{
navigation.navigate('LogIn');
  }
  const gotoRegister= ()=>{
    navigation.navigate('Registration')
      }
  return (
     <View style={{height:'100%',width:'100%'}}>
        <ImageBackground source={require('../../assets/shoeBg.png')} style={{height:'100%',width:'100%'}}> 
        <Text style={Wlcmstyles.text}>The <Text style={{color:'#fb6476'}}>Best</Text> Collection of <Text style={{color:'#fb6476'}}>Sneakers</Text>  </Text>
    
    <View style={Wlcmstyles.btns}>
    <Btn btn_name={'LOGIN'}  bgColor={'#7673fa'} txtColor={"#fff"} 
    onPress={gotoLogIn}
    />
    <Btn btn_name={'Register'}  bgColor={'#7673fa'} txtColor={"#fff"}
    onPress={gotoRegister}
    /></View>
        </ImageBackground>
          </View> 
  )
}

