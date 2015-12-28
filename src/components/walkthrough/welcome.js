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

module.exports = React.createClass({
	mixins: [DufineMixins],
	getInitialState: function() {
		return {
			username: '',
			password: '',
			passwordConfirmation: '',
			errorMessage: '',
		}
	},
	render: function() {
		return (

			<View style={styles.container}>
				<Text>if you looked up idiot in the dictionary, who would you find?</Text>
				<Button text={'Select Photo'} onPress={this.onSelectPhotoPress} />

				<Text style={styles.label}>Username</Text>
				<TextInput
					style={styles.input}
					value={this.state.username}
					onChangeText={(text) => this.setState({username:text})} />

				<Text style={styles.label}>Password</Text>
				<TextInput
					style={styles.input}
					secureTextEntry={true}
					value={this.state.password}
					onChangeText={(text) => this.setState({password:text})} />
				<Text style={styles.label}>Password Confirmation</Text>
				<TextInput
					style={styles.input}
					secureTextEntry={true}
					value={this.state.passwordConfirmation}
					onChangeText={(text) => this.setState({passwordConfirmation:text})} />
				
				<Text style={styles.label}>{this.state.errorMessage}</Text>
				<Button text={'Sign Up'} onPress={this.onSignupPress} />
				<Button text={'I have an account..'} onPress={this.onSigninPress} />
			</View>
		);
	},
	onSignupPress: function() {
		// if(this.state.password != this.state.passwordConfirmation){
		// 	return this.setState({errorMessage: 'Your passwords do not match'});
		// }

		// var user = new Parse.User();
		// user.set('username',this.state.username);
		// user.set('password',this.state.password);
		// user.signUp(null,{
		// 	success: (user) => {this.props.navigator.immediatelyResetRouteStack([{name:'tweets'}]);console.log(user)},
		// 	error: (user,error) => {this.setState({errorMessage: error.message}); console.log(user,error)}
		// });
	},

	onSelectPhotoPress: function() {
		this.openImagePicker(this.imageSelectedCallback);		
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

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent:'center',
		alignItems: 'center',
		backgroundColor: '#fff',
	},
	input: {
    	padding: 4,
    	height: 40,
    	borderColor: 'gray',
    	borderWidth: 1,
    	borderRadius: 5,
    	margin: 5,
    	width: 200,
    	alignSelf: 'center',
    }, 
    label: {
    	fontSize: 18,
    }

})