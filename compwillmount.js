// Componenet property from 'react' library
//whenever we create class component we must exactly define one method - > render method --> this method will
//return some amount of JSX
// when the component get's rendered to the device react is going to call the render method
//take whatever jsx gets returned and place it in the screen of our device
// !! props is for parent to child communication 
// !! state is component internal record keeping

import React, { Component } from 'react';
import {Text, View} from 'react-native';

class AlbumList extends  Component{
	state = { albums: [] };
	componentWillMount() {
		fetch("https://rallycoding.herokuapp.com/api/music_albums")
			.then((response) =>  response.json())
			.then((responseJson) => this.setState({albums : responseJson}))
		
	}
	render(){
		console.log("rendered")
		console.log(this.state)
		return (
			<View >
				<Text> Hey Album !!</Text>
			</View>
		);
	}
}

export default AlbumList;