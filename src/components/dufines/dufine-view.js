var React = require('react-native');
var Icon = require('react-native-vector-icons/FontAwesome');

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
var Header = require('../common/header');
var styles = require('../../styles/styles');
var DufineMixins = require('../mixins');


module.exports = React.createClass({
    mixins: [DufineMixins],
	getInitialState: function(){
		console.log('this.props.route.vars.definition');
		console.log(this.props.route.vars.definition);
		// this is currently if coming from main.js if(this.props.route.localData)
    	return {
      		definition: this.props.route.vars.definition,
            photo: this.props.route.vars.photo,
            word: this.props.route.vars.definition.word,
            callback: this.props.route.vars.callback,
    	};

	},
	componentWillMount: function() {
		//console.log('dufine-list.js componentWillMount()');
		
	},
	render: function(){
		return (
            <View style={styles.container}>
            	<Header 
            		title="Dictionary" 
            		rightButton={()=>(<Text></Text>)}
                    leftButton={this.renderBackButton} />
                <View ref="definition" style={styles.definitionContainer}>
                    <View style={styles.definition} >
                        <View style={styles.dufTop}>                            
                            <View style={styles.definitionWordContainer}>
                            	{this.renderWord()}
                            	{this.renderPronunciation()}
                            </View>
                            <View style={styles.photoContainer}>                                
                                {this.renderPhoto()}
                            </View>
                        </View>
                        <View style={styles.definitionBottom}>
                            <View style={styles.dufinitionDefinition}>
                            	{this.renderDefinition()}
                            </View>
                        </View>

                    </View>
                    
                </View>
                <View style={styles.absoluteBottomButton}>
                	{this.renderDeleteButton()}
                	{this.renderAddPhotoButton()}
                </View>
            </View>
        );
		

	},
	renderWord: function() {
		var word = '';
		if (typeof this.state.definition.syllables !== 'undefined') {
    		this.state.definition.syllables.list.forEach(function(syllable) { 
				word = word + '•'+syllable;
			});
			word = word.substring(1);
		} else {
			word = this.state.definition.word;
		}
		
		return (
			<Text style={[styles.georgia,styles.definitionWord]}>{word}</Text>
		);
	},
	renderPronunciation: function(){
		var pronunciation = '/ '+this.state.definition.pronunciation.all+' /';

		return (
			<Text style={[styles.georgia,styles.definitionPronunciation]}>{pronunciation}</Text>
		);
	},
	renderPhoto: function(){
		if(this.state.photo)
			return (<Image source={{uri: this.state.photo.uri}} style={styles.definitionPhoto}/>)
	},
	renderDefinition: function(){
		var definition = '';

		this.state.definition.results.forEach(function(def,index) { 

			definition += (index+1)+') ';
			definition += def.partOfSpeech+': '
			definition += def.definition+' ';
		});

		return (
			<Text style={[styles.georgia,styles.dufinitionDefinition]}>{definition}</Text>
		);

	},


	onAddPhotoPressed: function() {
		this.openImagePicker(this.imageSelectedCallback);
	},
	imageSelectedCallback: function(source){
		this.saveData(this.state.definition,source,this.dataSavedCallback);
	},
	dataSavedCallback: function(definition,photo){
		// Reset top route to dufinelist and push navigator to the newly created view
		this.state.callback(); 
		//this.props.navigator.push({name:'dufineview',props: {definition: definition,photo: photo},});

		this.setState({photo: photo});
	},
	
    onDeletePress: function(){
        this.deleteData(this.state.definition.word,this.state.callback);
        
        this.props.navigator.popToTop();
    },
    renderExportButton: function() {
    	if(this.state.photo)
    		return(<Button text={'Export'} onPress={()=>console.log('export')} />);
    },
    renderBackButton: function() {
    		return(
    			<TouchableHighlight 
					
					onPress={()=>this.props.navigator.popToTop()}>
					<Text style={styles.backButton}>Back</Text>
				</TouchableHighlight>
    		);
    },
    renderDeleteButton: function() {
    	if(this.state.photo)
    		return(<Button text={'Delete'} onPress={this.onDeletePress} />);
    },
    renderAddPhotoButton: function() {
    	if(!this.state.photo)
    		return(<Button text={'Add Photo'} onPress={this.onAddPhotoPressed} />);
    },
    

});