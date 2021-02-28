import React from "react"
import {RouteProp} from "@react-navigation/native"
import {RootStackParamList} from "@/navigator/index"
import {
    View,
    FlatList,
    NativeSyntheticEvent,
    NativeScrollEvent,
    ListRenderItemInfo,
    Text
  } from 'react-native';
interface IPorps {
  route:RouteProp<RootStackParamList,"Detail">
}
class Detail extends React.PureComponent <IPorps>{
    render(){
        const {route} = this.props;
         return (
            <View>
              <Text>Detaile</Text>
              <Text>{route.params.id}</Text>
            </View>
          );

    }


}

export default Detail;