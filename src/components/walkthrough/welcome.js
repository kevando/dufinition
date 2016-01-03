var React = require('react-native');
var Parse = require('parse/react-native');

var {
	Text,
	View,
	StyleSheet,
	TextInput,
} = React;

var Button = require('../common/button');
var DufineMixins = require('../mixins');
var styles = require('../../styles/styles');

module.exports = React.createClass({
	mixins: [DufineMixins],
	getInitialState: function() {
		return {}
	},
	render: function() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcomeText}>If you looked up idiot in the dictionary, who would you find?</Text>
				<Button text={'Select Photo'} onPress={this.onSelectPhotoPress} />

			</View>
		);
	},


	onSelectPhotoPress: function() {
		this.openCamera(this.imageSelectedCallback); // prod
		//this.openImagePicker(this.imageSelectedCallback); // dev		
	},
	imageSelectedCallback: function(source){
		// this might include a call to definition API
		this.saveData(
			{word:'idiot',text:'one who is dumb',partOfSpeech:'noun'},
			source,
			this.dataSavedCallback
		);
	},
	dataSavedCallback: function(definition,photo){
		// Reset top route to dufinelist and push navigator to the newly created view
		this.props.navigator.immediatelyResetRouteStack(
			[
				{name:'dufinelist'},
				{name:'dufineview',props: {definition: definition,photo: photo},}
			]
		);
	}

});

