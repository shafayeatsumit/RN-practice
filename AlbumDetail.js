import React, { Component } from 'react';
import {Text, View} from 'react-native';
import AlbumDetail from './AlbumDetail'

class AlbumList extends  Component{
	state = { albums: [] };
	componentWillMount() {
		fetch("https://rallycoding.herokuapp.com/api/music_albums")
			.then((response) =>  response.json())
			.then((responseJson) => this.setState({albums : responseJson}))
		
	}

	renderHelper(){
		return this.state.albums.map(album => 
			<AlbumDetail key={album.title} data={album} />
		);
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

import React, { Component } from 'react';
import {Text, View} from 'react-native';

const AlbumDetail = (props) =>{
	return(
		<View>
			<Text>{props.data.title}</Text>
		</View>
	);
};
export default AlbumDetail;