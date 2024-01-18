import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from './src/Screens/Welcome/Welcome'
import LogIn from './src/Screens/Login/LogIn';
import Home from './src/Screens/Home/Home'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Registration from './src/Screens/registration/Registration';
import Profile from './src/Screens/profile/Profile'
import Cart from './src/Screens/cart/Cart'
import ShoeList from './src/Screens/Shoe_list/ShoeList';
import List from './src/Screens/Shoe_list/List';
import { Provider } from 'react-redux';
import  mystore from './src/Screens/Shoe_list/store/store';
import Edit from './src/Screens/edit/Edit';
import ChangePassword from './src/Screens/ChangePassword/ChangePassword';
// import MyStore2 from './src/Screens/Shoe_list/reduxtoolkit/MyStore2';
import MyProdcts from './src/Screens/Shoe_list/MyProdcts';
import Fav from './src/Screens/fav/Favourite';
import PlaceOrder from './src/Screens/placeorder/PlaceOrder';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import AuthReducer from './src/Store/Reducer/Auth'

const rootReducer = combineReducers({
  Auth: AuthReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
const Stack = createNativeStackNavigator();
const Bottom = createBottomTabNavigator();

function BottomNavigation() {
  return (
    <Bottom.Navigator screenOptions={{headerShown: false}}>
      <Bottom.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => {
            return <Icon name="home" size={25} color="black" />;
          },
        }}></Bottom.Screen>
      <Bottom.Screen name='Cart' component={Cart} 
       options={{
          tabBarIcon: () => {
            return <Icon name="shoppingcart" size={25} color="black" />;
          },
        }}></Bottom.Screen>
       <Bottom.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => {
            return <Icon name="profile" size={25} color="black" />;
          },
        }}></Bottom.Screen>
    </Bottom.Navigator>
  );
}
export default function App() {
 

  return (
    <Provider store={store}>
      <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name='Welcome' component={Welcome}/>
         <Stack.Screen name="LogIn" component={LogIn}/>
        <Stack.Screen name='Registration' component={Registration}></Stack.Screen>        
         <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name='ShoeList' component={ShoeList}/>
        <Stack.Screen name='Cart' component={Cart}/>
        <Stack.Screen name='List' component={List}/>
        <Stack.Screen name='Edit' component={Edit}/>
        <Stack.Screen name='ChangePAssword' component={ChangePassword}/>
        <Stack.Screen name='MyProdcts' component={MyProdcts}/>
        <Stack.Screen name='Fav' component={Fav}/>
        <Stack.Screen name='PlaceOrder' component={PlaceOrder}/>
        <Stack.Screen name="BottomNavigation" component={BottomNavigation}></Stack.Screen> 
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
   </Provider>
  )
}

// import { View, Text } from 'react-native'
// import React from 'react'

// const App = () => {
//   return (
//     <View>
//       <Text>App</Text>
//     </View>
//   )
// }

// export default App
