import {Effect, Model,} from "dva-core-ts"
import { call } from "react-native-reanimated"
import {Reducer} from "redux"
import { RootState } from "."

import axios from "axios"
const CAROUSEL_URL = '/mock/13/carousel'; // 轮播图
const CHANNEL_URL = '/mock/13/guess'; // 猜你喜欢
export interface ICarousel {
    id:number,
    image:string,
    color:[string,string]
}
export interface IGuess{
    id:string,
    image:string,
    title:string

}

export interface HomeState {
    carousel:ICarousel[]
}
const action ={
    type:'add'
}
interface HomeModel extends Model{
    namespace: 'home';
    state: HomeState;
    reducers?:{
        setState:Reducer<HomeState>
    };
    effects?:{
        fetchCarousel:Effect
    }
}
const initialState ={
    carousel:[]
}
const homeModel:HomeModel ={
    namespace:'home',
    state:initialState,
    reducers:{
        setState(state=initialState,{payload}){
            return {
                ...state,
                ...payload
            }
        }
    },
    effects:{
        *fetchCarousel(_,{call,put}){
           const {data} =  yield call(axios.get,CAROUSEL_URL)
           console.log(data,"data-data-data")
           yield put({
            type: 'setState',
            payload: {
                carousel: data,
            },
          });
        }
    }
   

}

export default homeModel