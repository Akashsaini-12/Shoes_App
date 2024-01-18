import {View, Text, TextInput, Alert,StyleSheet} from 'react-native';
import React, {useId, useState} from 'react';

import Btn from '../../Component/Btn';
// import Loginstyles from './loginStyle';
import validator from 'validator';
import Icons from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Alert } from 'react-native';
export default function LogIn(props) {
  const [Id, setId] = useState(''); 
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [showPassword, setshowPassword] = useState(true);

  const getapidata = async () => {
    if (email === '' || password === '') {
      Alert.alert('Please Enter Detail');
    } else {
      if(error == ''){
        const apidata = {
          eventID: '1001',
          addInfo: {
            UserId: email || mobile,
            Password: password,
            guid:"4C4C4544-004A-5910-8034-C2C04F4E4D33",        
          },   
        };     
 try {
     const url = 'http://192.168.33.156:5240/login';
        const result = await fetch(url, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(apidata),
        });

        const data = await result.json();
        console.log(data)
        await AsyncStorage.setItem('auth_token', data.rData.Token);
  await AsyncStorage.setItem('detail', data.rData.uid.toString());
        // const Token =await AsyncStorage.getItem('auth_token');
// console.log(user)
        // console.log(Token ,'hchhhch')
        if (data.rData.rCode === 1) {
          Alert.alert('User not Found');
          
        } else {
          props.navigation.navigate('BottomNavigation');
// props.navigation.navigate('Home')
        }
        // console.log(Token ,'hchhhch')
           
        setEmail('');
        setPassword('');
        setMobile('');
      } catch (error) {
        console.log(error);
        Alert.alert('User not found')
        console.log('error in api calling');
      }
    }else {
      Alert.alert('Email is not correct')
    }
    }
    // props.navigation.navigate('BottomNavigation');
     
  };
  const openemail = text => {
    if (validator.isEmail(text) || validator.isMobilePhone(text)) {
      setError('');
    } else {
      setError('Please enter a valid email/Mobile.');
    }
    setEmail(text);
  };

  return (
    <View style={{backgroundColor:'#fff', height:'100%',width:'100%'}}>
      <Text style={{fontSize:40,color:'black',marginTop:30,marginLeft:30}}>LOG IN</Text>
      <Text style={{left: 30}}>
        Didn't have a account{' '}
        <Text
          style={{
            color: '#7673fa',
            fontWeight: '700',
            top: 10,
          }}
          onPress={() => props.navigation.navigate('Registration')}>
          Register Here 
        </Text>
      </Text>

      <View style={{marginTop:30,marginHorizontal:20}}>
        <TextInput
          placeholder="Email/Mobile no."
        //  style={{borderWidth:1,borderColor:'#9391f3'}}
          value={email}
          onChangeText={openemail}
        //   style={Loginstyles.input}
        />
        <Text style={{color: '#000', paddingLeft: 25}}>{error}</Text>
<View >
{showPassword ? (
          <Icon
            name="eye-slash"
            size={25}
            color="#bebebe"
          style={{position:'absolute',bottom:"15%",right:'1%'}}
            onPress={()=>setshowPassword(!showPassword)}
          />
        ) : (
          <Icon
            name="eye"
            size={25}
            color="#bebebe"
            style={{position: 'absolute', right: "1%", bottom: '15%'}}
            onPress={()=>setshowPassword(!showPassword)}
          />
        )}
        <TextInput
          placeholder="Enter Password"
          selectTextOnFocus={true}
          secureTextEntry={showPassword}
          value={password}
          style={{marginRight:40}}
          onChangeText={Addpassword => setPassword(Addpassword)} 
        />
</View>
 </View>
 
  <View > 
        <Btn btn_name={'LOG IN'} txtColor={'white'}  bgColor={'#9391f3'}
          onPress={getapidata}
        />
      </View>

      {/* <View >
        <Icons name='google--with-circle' size={45} color='#800e19' style={Loginstyles.shadow}/>
  <Icons name='facebook-with-circle' size={45} color='#385083' style={Loginstyles.shadow}/>
  <Icons name='mail-with-circle' size={45} color='#0d1118' style={Loginstyles.shadow}/>
 </View> */}
    </View>
  );
}
 


// const Loginstyles = StyleSheet.create({
//   text: {
//     color: '#000',
//     // textAlign:'center',
//     fontSize: 40,
//     marginTop: '15%',
//     fontWeight: '600',
//     // borderBottomWidth:1,
//     borderColor: '#384764',
//     marginHorizontal: 30,
//   },
//   input: {
//     width: '90%',
//     margin: 10,
//     borderBottomWidth: 1,
//     borderColor: 'black',
//     height: 50,
//     color: '#384764',
//     paddingLeft: 25,
//     paddingRight: 30,
//     marginHorizontal: 20,
//     fontWeight: '500',
//     fontSize: 15,
 
//   },
//   form_container: {
//     marginTop: 60,
//   },
// });

