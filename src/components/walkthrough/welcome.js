var React = require('react-native');
var Parse = require('parse/react-native');


//var ReferenceLibraryManager = require('NativeModules').ReferenceLibraryManager;

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
		return {
			firstWord: 'idiot',
			definition:null,
		}
	},
	componentWillMount: function() {
	   // Get definition for initial word and add definition to the state
		this.getWordDefinition(this.state.firstWord,this.setDefinitionInState);
	},
	setDefinitionInState: function(responseData) {
		this.setState({definition: responseData});
	},

	render: function() {
		return (
			<View style={styles.welcomeContainer}>
				<View style={styles.welcomeContentContainer}>
					<View style={styles.welcomeTextContainer}>
						<Text style={styles.welcomeText}>If you looked up <Text style={styles.introWord}>{this.state.firstWord}</Text> in the dictionary, who would you find?</Text>
					</View>
					<View style={styles.welcomeButtonContainer}>
						<Button text={'Select Photo'} onPress={this.onSelectPhotoPress} />
					</View>
				</View>
			</View>
		);
	},
	renderr: function() {
		return (
			<View style={styles.welcomeContainer}>
					<Text style={styles.welcomeText}>If you looked up <Text style={styles.introWord}>{this.state.firstWord}</Text> in the dictionary, who would you find?</Text>
			

			</View>
		);
	},


	onSelectPhotoPress: function() {
		//this.openCamera(this.imageSelectedCallback); // prod
		this.openImagePicker(this.imageSelectedCallback); // dev		
	},
	imageSelectedCallback: function(source){
		console.log('this.state.definition')
		console.log(this.state.definition)
		
		this.saveData(
			this.state.definition,
			source,
			this.dataSavedCallback
		);
	},
	dataSavedCallback: function(definition,photo){
		// Reset top route to dufinelist and push navigator to the newly created view
		this.props.navigator.immediatelyResetRouteStack(
			[
				{name:'dufinelist'},
				{name:'dufineview',vars: {definition: definition,photo: photo},}
			]
		);
	}

});

