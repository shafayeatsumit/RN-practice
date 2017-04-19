import React from 'react';
// just import property text , appregistry from 'react-native';
import { Text, AppRegistry } from 'react-native';
//import ReactNative from 'react-native';

//create component

const App = () => {
  return (
    <Text>Some Text </Text>
  );
};

//above can be done by this
//const App = () =>(<Text>Some Text</Text>);

//render it to the device
//ReactNative.AppRegistry.registerComponent('AwesomeNativeBase', () => App); 

//we have to registrer at least one component to out application (AwesomeNativeBase) , App is that component
//in the second param we are returning App component
AppRegistry.registerComponent('AwesomeNativeBase', () => App);