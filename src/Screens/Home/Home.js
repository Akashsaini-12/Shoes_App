import { View, Text ,StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import Slidebar from '../../Component/Slidebar'
import Brands from '../../Component/Brands'
import Trending from '../../Component/Trendind'
import NewShoe from '../../Component/NewShoe'

// import { ViewPropTypes } from 'deprecated-react-native-prop-types'



export default function Home(props) {
 
  return (
    <View style={Homestyles.home}>
      <ScrollView>
      <Slidebar/>

      <Brands props={props}/>

  <Trending/>
    <NewShoe/>
      </ScrollView>
                
    </View>
  )
}


const Homestyles = StyleSheet.create({
 home:{
  height:"100%",
  width:'100%',
  backgroundColor:'white'
 }
})