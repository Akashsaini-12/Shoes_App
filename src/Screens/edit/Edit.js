import { View, Text, StyleSheet,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import { useState,useEffect } from 'react';
import Btn from '../../Component/Btn';
import editstyle from './EditStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Edit(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    
    const ShowData = async () => {
      const Token =await AsyncStorage.getItem('auth_token');
      const CustomerId = await AsyncStorage.getItem('detail');
//   console.log(CustomerId,'----------------------------------');
     const Data = {
        eventID: '1001',
        addInfo: {
          CustomerId:+CustomerId,
          guid:"4C4C4544-004A-5910-8034-C2C04F4E4D33",
        },
      };
      try {  
        const url = 'http://192.168.33.147:5240/profile';
        let getresult = await fetch(url, {
          method: 'POST',
          headers: {'Authorization': `Bearer ${Token}`,
          'guid':"4C4C4544-004A-5910-8034-C2C04F4E4D33",
          'Content-Type': 'application/json'},
          body: JSON.stringify(Data),
        });
        const result = await getresult.json();
        // console.log(result)
        setName(result.rData.Username);
        setMobile(result.rData.Mobile);
        setEmail(result.rData.Email); 
      } catch (error) {
        console.log(error);
      }
    };
    const EditData = async () => {
        const CustomerId = await AsyncStorage.getItem('detail');
        const Token =await AsyncStorage.getItem('auth_token');
        const Data = {
          eventID: '1001',
          addInfo: {
            CustomerId: +CustomerId,
            Username: name,
            Email: email,
            Mobile: mobile,
            guid:"4C4C4544-004A-5910-8034-C2C04F4E4D33",
          },     
        };
        console.log(Data)
        try {
          const url = 'http://192.168.33.147:5240/editprofile';
          let getresult = await fetch(url, {
            method: 'POST',
            headers: {'Authorization': `Bearer ${Token}`,
          'guid':"4C4C4544-004A-5910-8034-C2C04F4E4D33",
          'Content-Type': 'application/json'},
          body: JSON.stringify(Data),
          });
          const result = await getresult.json();
          if(result.rData.rCode !== 0) throw new Error(result.rData.rMessage)
     
        } catch (error) {
          console.log(error);
        }
        props.navigation.navigate("LogIn");
      };
    useEffect(() => {
      ShowData();
    }, []);
  return (
    <View style={{backgroundColor:'#fff',height:"100%",width:"100%"}}>
<Text style={editstyle.text}>Edit <Text style={{color:'#000'}}>Profile</Text></Text>
  
    <View style ={editstyle.form_container}>
        
    <Text style={{color:'black',marginLeft:20,fontWeight:'700'}}>Name:</Text>
           <TextInput
            placeholder="Enter Your Name"
            keyboardType={'default'}
            value={name}
            onChangeText={txt => setName(txt)}
            style={editstyle.input} /> 
 <Text style={{color:'black',marginLeft:20,fontWeight:'700'}}>Email:</Text>
          <TextInput
            placeholder="Enter Your Email"
            keyboardType={'email-address'}
            value={email}
            onChangeText={txt => setEmail(txt)}
            style={editstyle.input}
          /> 
           <Text style={{color:'black',marginLeft:20,fontWeight:'700'}}>Mobile:</Text>
           <TextInput
            placeholder="Enter Your Mobile"
            keyboardType={'numeric'}
            value={mobile}
            onChangeText={txt => setMobile(txt)}
            style={editstyle.input}
          /> 
            <Btn btn_name={'Edit Data'} txtColor={'white'}  bgColor={'#9391f3'}
          onPress={EditData}
        />
    </View>
    </View>
  )
}
 
