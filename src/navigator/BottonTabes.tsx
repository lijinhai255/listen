import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  NavigationContainer, RouteProp,

} from "@react-navigation/native"
// import Home from "@/pages/Home"
import HomeTabs from "./HomeTabs"
import Account from "@/pages/Account"
import Found from "@/pages/Found"
import Listen from "@/pages/Listen"
import React from "react"
import { TabNavigationState, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Icon from '@/assets/iconfont/index';
import { RootStackParamList, RootStackNavigation } from '.';
export type BottonTabParamList = {
  HomeTabs: undefined,
  Listen: undefined,
  Found: undefined,
  Account: undefined
}
const Tab = createBottomTabNavigator<BottonTabParamList>();
type Route = RouteProp<RootStackParamList, "Home"> & { state?: TabNavigationState }

interface IPors {
  navigation: RootStackNavigation,
  route: Route
}
function getHeaderTitled(route: Route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  console.log(routeName, "routeName-routeName")

  switch (routeName) {
    case 'HomeTabs':
      return '首页';
    case 'Listen':
      return '我听';
    case 'Found':
      return '发现';
    case 'Account':
      return '账号';
    default:
      return '';
  }
}

class BottonTabes extends React.Component<IPors>{
  componentDidUpdate() {
    // this.setOptions();
    const { navigation, route } = this.props
    navigation.setOptions({
      headerTitle: getHeaderTitled(route)
    })
  }
  render() {
    return (
      // <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#f86442"
        }}

      >
        <Tab.Screen name="HomeTabs" component={HomeTabs} options={{
          tabBarLabel: "首页",
          // tabBarIcon: ({ color, size }) =>
          //   <Icon
          //     name="icon-shouye"
          //     color={color} size={size} />
        }} />
        <Tab.Screen
          name="Listen"
          component={Listen}
          options={{ 
            tabBarLabel: "我听",
            // tabBarIcon: ({ color, size }) =>
            // <Icon
            //   name="icon-xingzhuang60kaobei2-copy"
            //   color={color} size={size} />
        }}
           />
        <Tab.Screen 
        name="Found" 
        component={Found} 
        options={{ 
          tabBarLabel: "发现",
          // tabBarIcon: ({ color, size }) =>
          //   <Icon
          //     name="icon-faxian1"
          //     color={color} size={size} />
               }} 
               />
        <Tab.Screen name="Account" 
        component={Account} 
        options={{ 
          tabBarLabel: "账户",
          // tabBarIcon: ({ color, size }) =>
          //   <Icon
          //     name="icon-zhanghu"
          //     color={color} size={size} />
           }} />

      </Tab.Navigator>

      // </NavigationContainer>

    );
  }
}
export default BottonTabes