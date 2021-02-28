/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Config from "react-native-config"

import Navigator from '@/navigator/index';
import BottonTabes from '@/navigator/BottonTabes';


declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
     <Navigator></Navigator>
     {/* <BottonTabes></BottonTabes> */}
    </>
  );
};



export default App;
