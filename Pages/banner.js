import React from 'react';
import Carousel from 'react-native-banner-carousel';
import { StyleSheet, Image, View, Dimensions } from 'react-native';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;

const images = [
	'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
	'https://thumbs.dreamstime.com/z/autumn-fall-nature-scene-autumnal-park-beautiful-77869343.jpg',
	'https://thumbs.dreamstime.com/z/cruise-ship-waterfall-5685814.jpg',
];

export default class App extends React.Component {
	renderPage(image, index) {
		return (
			<View key={index}>
				<Image
					style={{ width: BannerWidth, height: BannerHeight }}
					source={{ uri: image }}
				/>
			</View>
		);
	}

	render() {
		return (
			<View style={styles.container}>
				<Carousel
					autoplay
					autoplayTimeout={5000}
					loop
					index={0}
					pageSize={BannerWidth}>
					{images.map((image, index) => this.renderPage(image, index))}
				</Carousel>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		justifyContent: 'center',
	},
});
