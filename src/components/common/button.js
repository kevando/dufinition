var React = require('react-native');

var {
	Text,
	StyleSheet,
	TouchableHighlight,
} = React;


module.exports = React.createClass({
	render: function(){
		return (
			<TouchableHighlight 
				style={styles.button}
				underlayColor={'gray'} 
				onPress={this.props.onPress}>
				<Text>{this.props.text}</Text>
			</TouchableHighlight>

		)
	}
});

var styles = StyleSheet.create({
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderRadius: 5,
		padding: 5,
		borderColor: 'black',
		marginTop: 10,
	}
})