var React = require('react-native');


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
		//console.log(this.props);
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

                            <View style={styles.photoContainer}>                                
                                <Image source={{uri: this.state.photo.uri}} style={styles.definitionPhoto}/>
                            </View>
                            
                        </View>
                        <View style={styles.definitionBottom}>
                            <View style={styles.dufinitionDefinition}>
                                <Text style={styles.georgia}>{this.state.definition.text}</Text>
                            </View>
                        </View>

                    </View>
                    
                </View>
                <Button text={'Go Back'} onPress={()=>this.props.navigator.popToTop()} />
                <Button text={'Export'} onPress={()=>console.log('export')} />
                <Button text={'Delete'} onPress={this.onDeletePress} />
               
            </View>
        );
		

	},
	
	
	onPress: function(){
		console.log('logs user in');
		console.log(this.state.username);
		console.log(this.state.password);
		Parse.User.logIn(this.state.username,this.state.password,{
			success: (user) => {this.props.navigator.immediatelyResetRouteStack([{name:'tweets'}]);console.log(user)},
			error: (data,error) => {console.log(data,error);this.setState({errorMessage:error}) },
		});
	},
	onSignupPress: function() {
		// navigate over to sign up
		// need to have reference to navigator
		this.props.navigator.push({name: 'signup'})
	},
	onNewDufinePress: function() {
		// navigate over to sign up
		// need to have reference to navigator
		this.props.navigator.push({name: 'dufinenew'})
	},
    onDeletePress: function(){
        this.deleteData(this.state.definition.word,this.props.route.props.callback);
        
        this.props.navigator.popToTop();
    }
});