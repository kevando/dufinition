var React = require('react-native');

var {
	View,
	Text,
	StyleSheet
} = React;

var Parse = require('parse/react-native');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			user: null
		};
	},

	// perfect function to fetch data
	componentWillMount: function() {
		// This could take time to return
		Parse.User.currentAsync()
			.then( (user) => {this.setState({user: user}); });
	},
	render: function() {
		if(!this.state.user) {
			return <Text>Loading...</Text>
		}

		var username = this.state.user.get('username');

		return (
			<View style={styles.container}>
				<Text>Welcome back, {username}</Text>
			</View>

		)
	}

});

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent:'center',
		alignItems: 'center',
		backgroundColor: '#fff',
	},
});