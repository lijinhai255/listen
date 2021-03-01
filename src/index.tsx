import React from 'react';
import Navigators from '@/navigator/index';
import { Provider } from "react-redux"
import store from "@/config/dva"
import { StatusBar } from "react-native"
export default class extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigators></Navigators>
        <StatusBar
          backgroundColor="transparent"
          barStyle="dark-content"
          translucent
        />
      </Provider>
    )
  }
}