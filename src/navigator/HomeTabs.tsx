import React from "react"
import Home from "@/pages/Home"

import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"


const Tab = createMaterialTopTabNavigator()

class HomeTabs extends React.Component {
    render(){
        return (
           <Tab.Navigator
                lazy
                tabBarOptions={
                    {
                        scrollEnabled:true,
                        tabStyle:{
                            width:80
                        },
                        indicatorStyle:{
                            height:4,
                            width:20,
                            marginLeft:30,
                            borderRadius:2,
                            backgroundColor:"#f86442"
                        },
                        activeTintColor:"#f86442",
                        inactiveTintColor:"#333"
                    }
                }
           >
               <Tab.Screen name="Home" component={Home} options={{tabBarLabel:"推荐"}}></Tab.Screen>
               <Tab.Screen name="Home1" component={Home}></Tab.Screen>
               <Tab.Screen name="Home2" component={Home}></Tab.Screen>
           </Tab.Navigator> 
        )
    }
}

export default HomeTabs