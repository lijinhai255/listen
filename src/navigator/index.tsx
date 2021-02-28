import React from "react"
import { 
  Platform,
  StyleSheet

 } from "react-native"
import {
    NavigationContainer,

} from "@react-navigation/native"
import {
    StackNavigationProp,
    createStackNavigator,
    HeaderStyleInterpolators,
    CardStyleInterpolators
} from "@react-navigation/stack"
import BottonTabes from "./BottonTabes"
import Detail from "@/pages/Detaile"
export type RootStackParamList = {
    BottonTabes: {
        srceen?:string
      },
    Detail: {
        id:number
    },
}
export type RootStackNavigation = StackNavigationProp<RootStackParamList>
let Stack = createStackNavigator<RootStackParamList>()
/**
 * {
 *   Navigator,
 * Screen
 * }
*/


class Navigators extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    headerMode="float"
                    screenOptions={{
                        headerTitleAlign: 'center',
                        headerBackTitleVisible: false,
                        headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                        gestureEnabled: true,
                        gestureDirection: 'horizontal',
                        headerStyle: {
                            ...Platform.select({
                              android: {
                                elevation: 0,
                                borderBottomWidth: StyleSheet.hairlineWidth,
                              },
                            }),
                          },
                    }}>
                    <Stack.Screen 
                    name="BottonTabes" component={BottonTabes} />
                    <Stack.Screen 
                     name="Detail" component={Detail} />
                </Stack.Navigator>
            </NavigationContainer >

        );

    }


}

export default Navigators;