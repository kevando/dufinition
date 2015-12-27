
var React = require('react-native');

var Signin = require('./components/authentication/signin');
var Signup = require('./components/authentication/signup');
var Tweets = require('./components/tweets/tweets');
var Parse = require('parse/react-native');

var {
	Navigator,
	StyleSheet
} = React;

var ROUTES = {
	signin: Signin,
	signup: Signup,
	tweets: Tweets,
};

module.exports = React.createClass({
	componentWillMount: function() {
		Parse.initialize("03ujVPOvZe4NCahT6GMVlCcidKWKvyV7l1668gZx", "pin07FPJ2AbxnZGpCMjJNCGAhELXm4vKBe5z9Jrq");
	},
	renderScene: function(route, navigator){ // called any time navigator gets pushed/popped
		// whatever is returned gets placed to the stack

		var Component = ROUTES[route.name]; 

		return <Component route={route} navigator={navigator} />;
	},
	render: function() {
		return (
			<Navigator
			style={styles.container}
			initialRoute={{name: 'signin'}}
			renderScene={this.renderScene}
			configureScene={() => {return Navigator.SceneConfigs.FloatFromRight; }} />

		);
	}
});

var styles = StyleSheet.create({
	container: {
        flex: 1, // fill entire screen
    },
})