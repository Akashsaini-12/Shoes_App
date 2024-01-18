import { View, Text,ViewPropTypes } from 'react-native'
import React from 'react'
import { SliderBox } from "react-native-image-slider-box";
// import { ViewPropTypes } from 'deprecated-react-native-prop-types'
export default function Slidebar() {
    const images = [
        require('../assets/shoesblack.jpg'), 
        require('../assets/shoe3.jpg'), 
        require('../assets/shoe_2.jpg'), 
     ];
  return (
   <View>
<SliderBox images={images} resizeMethod={'resize'}
  resizeMode={'cover'}  autoplay={true} autoplayInterval={1000}/>
   </View>

      
  )
}