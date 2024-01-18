import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

export default function Btn({btn_name,bgColor,onPress,txtColor}) {
  return (
    <View style={styles.container}>
<TouchableOpacity style={[styles.btn_style,{backgroundColor:bgColor}]} onPress={onPress} >
    <Text style={[styles.center,{color:txtColor}]} >{btn_name}</Text>
  </TouchableOpacity>
    </View>
    

  )
}
const styles = StyleSheet.create({
  btn_style: {
      width: '80%',
      marginTop: 20,
      marginBottom:20,
      height: 45,
      borderRadius: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    center: {
      fontWeight: '600',
      fontSize: 20,
    },
    container: {
       display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
})