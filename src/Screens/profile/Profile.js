import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import profile from './ProfileStyle'; // Adjust the import path accordingly
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import * as AuthAction from '../../Store/Action/Auth'
import { useDispatch, useSelector } from 'react-redux';

const Profile = props => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const getdata = async() => {
    const ID = await AsyncStorage.getItem('detail');
    var res= await dispatch(AuthAction.profile(ID));
    setName(res.rData.Username)
    setEmail(res.rData.Email)
    console.log(res ,'res')
  };

  useEffect(() => {
    getdata();
  },[isFocused]);
  const gotoFav = () => {
    props.navigation.navigate('Fav');
  };
  const logout = () => {
    props.navigation.navigate('LogIn');
  };
  return (
    <View style={{flex: 1}}>
      <View style={profile.head}>
        {/* Your header content goes here */}
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 20,
          }}>
          User Profile
        </Text>
      </View>
      <View style={profile.main}>
        <View style={profile.user}>
          {/* Display user image */}
          <Image
            source={require('../../assets/user.webp')}
            style={{width: '100%', height: '100%', borderRadius: 50}}
          />
        </View>
        <View style={profile.detail}>
          {/* User details or other information */}
          <Text>{name}</Text>
          <Text>{email}</Text>
        </View>

        {/* List of items */}
        <TouchableOpacity style={profile.list}>
          <Text style={profile.icon}>📝</Text>
          <Text style={profile.txt}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={profile.list}>
          <Text style={profile.icon}>🔒</Text>
          <Text style={profile.txt}>Change Password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={profile.list} onPress={gotoFav}>
          <Text style={profile.icon}>❤️</Text>
          <Text style={profile.txt}>My Favourite</Text>
        </TouchableOpacity>

        <TouchableOpacity style={profile.list} onPress={logout}>
          <Text style={profile.icon}>🏷️</Text>
          <Text style={profile.txt}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
