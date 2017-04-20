// we need to wrap multiple component to a view cause it can only render one 
// one top level tag should be returned
import React from 'react';
import {Text, AppRegistry, View} from 'react-native';


import Header from './src/component/header'
import AlbumList from './src/component/AlbumList'
const App = () => (
  <View>
    <Header headerText="Album"> </Header>
    <AlbumList AlbumListText="Album List"> </AlbumList>
  </View>
);

AppRegistry.registerComponent('AwesomeNativeBase', () => App);


import React from 'react';
import {Text, View } from 'react-native';

const AlbumList = (props) => {
	return (
		<View >
			<Text>
				{props.AlbumListText}
			</Text>
		</View>
	)
};

export default AlbumList;