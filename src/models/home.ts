import {Effect, Model,} from "dva-core-ts"
import { call } from "react-native-reanimated"
import {Reducer} from "redux"
import { RootState } from "."


export interface HomeState {
    num:number,
    loading:boolean
}
const action ={
    type:'add'
}
interface HomeModel extends Model{
    namespace: 'home';
    state: HomeState;
    reducers?:{
        add:Reducer<HomeState>
        setStatus:Reducer<HomeState>
    };
    effects?:{
        asyncAdd:Effect
    }
}
const initialState ={
    num:0,
    loading:false
}
function delay(timeout:number){
    return new Promise(resolve=>{
        setTimeout(resolve,timeout)

    })
}
const homeModel:HomeModel ={
    namespace:'home',
    state:initialState,
    reducers:{
        add(state=initialState,{payload}){
            return {
                ...state,
                num:state?.num+payload.num
            }
        },
        setStatus(state=initialState,{payload}){
            console.log("jllll",payload.loading)
            return {
                ...state,
                loading:payload.loading
            }
        }
    },
    effects:{
        *asyncAdd({payload},{call,put}){
            // yield put({
            //     type:"setStatus",
            //     payload:{
            //         loading:true
            //     }
            // })
            yield call(delay,3000)
            yield put({
                type:"add",
                payload
            })
            // yield put({
            //     type:"setStatus",
            //     payload:{
            //         loading:false
            //     }
            // })
        }
    }
   

}

export default homeModel