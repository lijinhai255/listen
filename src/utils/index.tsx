import {Dimensions} from "react-native"
const {width:viewportWidth,height:viewportHeight} = Dimensions.get("window")


// 百分比 获取宽度
function wp(percentage:number){
    const value = (percentage*viewportWidth) /100
    return Math.round(value)
}
function hp(percentage:number){
    const value = (percentage*viewportHeight) /100
    return Math.round(value)
}

export {
    viewportWidth,
    viewportHeight,
    wp,
    hp
}