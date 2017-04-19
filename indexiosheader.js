//Npm module names are always unique . so we don't need to import them using relative path
//when we write components our own we need to import them through relative path cause they r not unique

import React from 'react';
import { Text, AppRegistry } from 'react-native';

//import it using the relative path. header refers to header.js file
import Header from './src/component/header'

//create a component
//component nesting , we r taking Header component and put it inside App component
const App = () => (
  //tag doesn't have any text inside of it, so Header would be a self closing tag
  <Header />
);

AppRegistry.registerComponent('AwesomeNativeBase', () => App);