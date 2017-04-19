//in react we only create one component per file
//only root component uses 'AppRegistry'

import React from 'react';
import {Text, AppRegistry} from 'react-native';

const Header = () => {
	return <Text> Hello Component </Text>;
} ;


//make component available to other part
export default Header;