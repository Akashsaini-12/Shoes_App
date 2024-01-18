import {
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Alert,
  } from 'react-native';
  import { useEffect } from 'react';
  import React, { useState } from 'react'; 
  import styles from './RegistrationStyle';
 import Btn from '../../Component/Btn';
  import Icon from 'react-native-vector-icons/dist/FontAwesome';
  import Icons from 'react-native-vector-icons/dist/Entypo';
  import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
  import validator from 'validator';
  export default function Registration(props) {
    const [name, setName] = useState('');
    const [nmerror, setnmError] = useState(null);
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [mobile, setMobile] = useState('');
    const [mberror, setmbError] = useState('');
    const [password, setPassword] = useState('');
    const [Erpassword, setErPassword] = useState('');
    const [Confirmpassword, setConfirmPassword] = useState('');
   
   
    const [showPassword, setshowPassword] = useState(true);
    
    const openemail = () => {
      const emailvalidation =
        /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if (!emailvalidation.test(email)) {
        setError('Please enter a valid email address');
      } else {
        setError('');
      }
    };
  
    const Namecheck = text => {
      if (validator.isAlpha(text)) {
        setnmError('');
      } else {
        setnmError('Please enter a valid name');
      }
      setName(text);
    };
    const Mobilecheck = num => {
      if (validator.isMobilePhone(num)) {
        setmbError('');
      } else {
        setmbError('Please enter a Phone number');
      }
      setMobile(num);
    };
    
    const passwordMatch = () => {
      if (setPassword === setConfirmPassword) {
        setErPassword('');
      } else {
        setErPassword('Password Not Matched');
      }
    };
    const saveApiData = async () => {
      if (email == '' || password == '' || name == '' || mobile == '') {
        Alert.alert('Please enter all Details');
      } else if (password !== Confirmpassword) {
        Alert.alert('Password Not Match');
      } else {
        if (error == '' && mberror == '' && nmerror == '') {
          const data = {
            eventID: '1001',
            addInfo: {
              U_Name: name,
              U_Email: email,
              U_Mobile: mobile,
              U_Password: password,
            },
          };
          try {
            const url = 'http://192.168.33.147:5210/registration';
            let getresult = await fetch(url, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(data),
            });
            const result = await getresult.json();
            console.log(result, 'kkk');
            if (result) {
              props.navigation.navigate('LogIn');
              Alert.alert('Registration successfully');
            }
          } catch (error) {
            console.log(error);
          }
          setName('');
          setEmail('');
          setMobile('');
          setPassword('');
          setConfirmPassword('');
          setaadhar('');
          setpancard('');
          setfilename('');
        } else {
          Alert.alert('Details is not filled correctly');
        }
      }
    };
    return (
      <View style={{ height: '100%', width: '100%', backgroundColor: '#9391f3' }}>
        <Text style={styles.text}>Registration</Text>
        <Text style={{ textAlign: 'center', color: 'white', marginTop: 15 }}>
          Already have a account{' '}
          <Text
            style={{  color: 'white', borderBottomColor: '#384764',  fontWeight: '700',}}
            onPress={() => props.navigation.navigate('LogIn')}>  Login Here
          </Text>
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.form_container}>
            <TextInput
              placeholder="Enter Your Name"
              keyboardType={'default'}
              style={styles.input}
              onChangeText={Namecheck}
              value={name} />
            <Text style={{ color: '#fff', paddingLeft: 25 }}>{nmerror}</Text>
            <TextInput
              placeholder="Enter Your Email"
              keyboardType={'email-address'}
              style={styles.input}
              onChangeText={text => {
                setEmail(text);   }}
              onBlur={openemail}
              value={email} />
            <Text style={{ color: '#fff', paddingLeft: 25 }}>{error}</Text>
            <TextInput
              placeholder="Enter Your Mobile"
              keyboardType={'numeric'}
              style={styles.input}
              onChangeText={Mobilecheck}
              value={mobile} />
            <Text style={{ color: '#fff', paddingLeft: 25 }}>{mberror}</Text>
            <TextInput
              placeholder="Enter Your Address"
              style={styles.input}
               />
<Text></Text>
            <View style={styles.input}>
              {showPassword ? (
                <Icons   name="eye-with-line" size={25}
                  color="#bebebe" style={{ position: 'absolute', bottom: '15%', right: '2%' }}
                  onPress={() => setshowPassword(!showPassword)} />
              ) : (
                <Icons
                  name="eye"
                  size={25}
                  color="#bebebe"
                  style={{ position: 'absolute', right: '2%', bottom: '15%' }}
                  onPress={() => setshowPassword(!showPassword)} />
              )}
              <TextInput
                placeholder="Create Password"
                secureTextEntry={showPassword}
                onChangeText={text => {
                  setPassword(text);   }}
                value={password}
              />
            </View>
  
            {/* <View style={styles.input}>
              {showCnPassword ? (
                <Icons  name="eye-with-line"    size={25}    color="#bebebe"
                  style={{ position: 'absolute', bottom: '15%', right: '2%' }}   onPress={() => setshowCnPassword(!showCnPassword)}/>
              ) : (
                <Icons
                  name="eye"
                  size={25}
                  color="#bebebe"
                  style={{ position: 'absolute', right: '2%', bottom: '15%' }}
                  onPress={() => setshowCnPassword(!showCnPassword)}
                />
              )}
              <TextInput
                placeholder="Confirm Password"
                secureTextEntry={showCnPassword}
                onChangeText={text => {
                  setConfirmPassword(text);
                }}
                onBlur={passwordMatch}
                value={Confirmpassword}/> </View> */}
            <Btn btn_name={'Register'}  txtColor={'#9391f3'}     bgColor={'white'}onPress={saveApiData}/>
          </View>
        </ScrollView>
      </View>
    );
  }
  