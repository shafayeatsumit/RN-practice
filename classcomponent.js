import React, {Component} from 'react';
import {Text, View, AppRegistry} from 'react-native';


class Header extends Component{
	render(){
		return(
			<View style={styles.viewStyle}>
				<Text style={styles.textStyle}>Album!!!</Text>
			</View>		
		)
	};
}
const styles = {
	viewStyle: {
		backgroundColor: '#CD5C5C',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		shadowOffset: {weidth: 0, height: 2},
		shadowOpacity: 0.2

	},
	textStyle: {
		fontSize: 20
	}
}
export default Header;