import React from "react"
import {
  View,
  Text,
  Button
} from 'react-native';
import { RootStackNavigation } from "@/navigator/index"
import { connect, ConnectedProps } from "react-redux"
import { RootState } from "@/models/index"
import Carousel from "@/pages/Home/Carousel"


interface IProps extends ModelState {
  navigation: RootStackNavigation
}
const mapStateToProps = ({ home,loading }: RootState) => ({
  carousel:home?.carousel,
  loading:loading.effects['home/fetchCarousel']
})
const connector = connect(mapStateToProps)
type ModelState = ConnectedProps<typeof connector>
class Home extends React.PureComponent<IProps> {
  componentDidMount(){
    const {dispatch} = this.props
    dispatch({
      type:"home/fetchCarousel",
    })
  }
  

  render() {
    const {carousel,loading} = this.props
    console.log(carousel,"carousel")
    return (
      <View>
        {carousel&&<Carousel data={carousel&&carousel}/>}

        <Text>{loading===true?'正在请求中':"1"}</Text>
        <Text>{loading===true?'正在请求中':"1"}</Text>
        <Text>{loading===true?'正在请求中':"1"}</Text>
      </View>
    );
  }


}

export default connector(Home);