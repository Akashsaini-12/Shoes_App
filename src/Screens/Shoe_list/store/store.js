import { createStore } from 'redux';

import  Reducers  from "../reducer/Reducers";
import FavrouteReducer from '../reducer/FavrouteReducer';


 const mystore = createStore(Reducers,FavrouteReducer)

 export default mystore;