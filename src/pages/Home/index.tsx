import React from "react"
import {
  View,
  Text,
  Button
} from 'react-native';
import { RootStackNavigation } from "@/navigator/index"
import { connect, ConnectedProps } from "react-redux"
import { RootState } from "@/models/index"

interface IProps extends ModelState {
  navigation: RootStackNavigation
}
const mapStateToProps = ({ home,loading }: RootState) => ({
  num: home?.num,
  loading:loading.effects['home/asyncAdd']
})
const connector = connect(mapStateToProps)
type ModelState = ConnectedProps<typeof connector>
class Home extends React.PureComponent<IProps> {
  onPressFn = () => {
    const { navigation } = this.props;
    navigation.navigate("Detail", {
      id: 100
    })
  }
  handleadd =()=>{
    const {dispatch} = this.props
    dispatch({
      type:"home/add",
      payload:{
        num:10
      }
    })
  }
  asyncAdd =()=>{
    const {dispatch} = this.props
    dispatch({
      type:"home/asyncAdd",
      payload:{
        num:10
      }
    })
  }
  render() {
    const {num,loading} = this.props
    console.log(loading,"loading-loading-loading")
    return (
      <View>
        <Text>Hoem</Text>
        <Text>{loading}</Text>
        <Text>{loading===true?'正在请求中':""}</Text>
        <Text>{num}</Text>
        <Button title="数字加十" onPress={this.handleadd}></Button>
        <Button title="异步数字加十" onPress={this.asyncAdd}></Button>
        <Button title="跳转到详情页" onPress={this.onPressFn}></Button>
      </View>
    );

  }


}

export default connector(Home);