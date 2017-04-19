//in react we only create one component per file
//only root component uses 'AppRegistry'

import React from 'react';
import {Text, View, AppRegistry} from 'react-native';

const Header = () => {
	return (
	 	<View style={styles.viewStyle}>		
			<Text style={styles.textStyle}> Hello Component </Text>
		</View>	
	) 
} ;

const styles = {
	viewStyle: {
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: {weidth: 0, height: 2},
		shadowOpacity: 0.2
	},
	textStyle: {
		fontSize: 20 
	}

}

//make component available to other part
export default Header;