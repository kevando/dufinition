var React = require('react-native');
var UIImagePickerManager = require('NativeModules').UIImagePickerManager;
var reactNativeStore = require('react-native-store'); // to abstract

var {
	View,
	Text,
	StyleSheet,
	ListView,
	TouchableHighlight,
	TextInput,
	Image,
} = React;

var Button = require('../common/button');
var styles = require('../../styles/styles');
var DufineMixins = require('../mixins');



module.exports = React.createClass({
	mixins: [DufineMixins],
	getInitialState: function(){
		console.log(this.props);
		// this is currently if coming from main.js if(this.props.route.localData)
    	return {
      		definition: this.props.route.props.definition,
            photo: this.props.route.props.photo,
            word: this.props.route.props.definition.word
    	};

	},
	componentWillMount: function() {
		console.log('dufine-list.js componentWillMount()');
		
	},
	render: function(){
		return (
            <View style={styles.container}>
                <View ref="definition" style={styles.definitionContainer}>
                    <View style={styles.definition} >
                        <View style={styles.dufTop}>                            
                            <View style={styles.definitionWordContainer}>
                                <Text style={[styles.georgia,styles.definitionWord]}>{this.state.definition.word}</Text>
                                <Text style={[styles.georgia,styles.definitionType]}>{this.state.definition.partOfSpeech}</Text>
                            </View>

                            
                            
                        </View>
                        <View style={styles.definitionBottom}>
                            <View style={styles.dufinitionDefinition}>
                                <Text style={styles.georgia}>{this.state.definition.text}</Text>
                            </View>
                        </View>

                    </View>
                    
                </View>
                <Button text={'Add Photo'} onPress={this.onAddPhotoPressed} />
               
            </View>
        );
		

	},
	
	onAddPhotoPressed: function() {
		this.openImagePicker(this.imageSelectedCallback);
	},
	imageSelectedCallback: function(source){
		this.saveData(
			this.state.definition,
			source,
			this.dataSavedCallback
		);
	},
	dataSavedCallback: function(definition,photo){
		// Reset top route to dufinelist and push navigator to the newly created view
		this.props.navigator.push({name:'dufineview',props: {definition: definition,photo: photo},});
	}


});