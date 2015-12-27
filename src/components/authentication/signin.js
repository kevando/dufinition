var React = require('react-native');


var {
	View,
	Text,
	StyleSheet,

	TextInput
} = React;

var Button = require('../common/button');
var Parse = require('parse/react-native')

module.exports = React.createClass({

	getInitialState: function(){
		return {
			username: '',
			password: '',
			errorMessage: '',
		}
	},

	render: function() {
		return (
			<View style={styles.container}>
				<Text>Sign in</Text>
				<Text style={styles.label}>Username:</Text>
				<TextInput 
					style={styles.input} 
					value={this.state.username}
					onChangeText={(text) => this.setState({username:text})} />
				<Text style={styles.label}>Password</Text>
				<TextInput 
					secureTextEntry={true} 
					onChangeText={(text) => this.setState({password:text})}
					value={this.state.password}
					style={styles.input}/>
				<Text style={styles.label}>{this.state.errorMessage}</Text>
				<Button
					text={'Sign In'}
					onPress={this.onPress} />
				<Button 
				text={'I need an account'}
				onPress={this.onSignupPress} />
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
});

var styles = StyleSheet.create({
	container: {
        flex: 1, // fill entire screen
        //justifyContent: 'center',
        alignItems: 'center', // run as far left/right as possible
        justifyContent: 'center',
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