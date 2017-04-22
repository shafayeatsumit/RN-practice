// producing an array and rendering it inside of a jsx
// each component must have a key property associated with it <Text> </Text>
// it's for performence perpose when react re-renders it can keep track which one to re-render
// key should be uniqeu and consistent while re-renders

import React, { Component } from 'react';
import {Text, View} from 'react-native';

class AlbumList extends  Component{
	state = { albums: [] };
	componentWillMount() {
		fetch("https://rallycoding.herokuapp.com/api/music_albums")
			.then((response) =>  response.json())
			.then((responseJson) => this.setState({albums : responseJson}))
		
	}

	renderHelper(){
		return this.state.albums.map(album => <Text key={album.title}>{album.title}</Text>);
	}
	render(){
		return (
			<View >
				{this.renderHelper()}
			</View>
		);
	}
}

export default AlbumList;