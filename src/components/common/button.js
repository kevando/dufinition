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
				<Text style={styles.buttonText}>{this.props.text}</Text>
			</TouchableHighlight>

		)
	}
});

var styles = StyleSheet.create({
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 0,
		padding: 5,
		borderColor: 'black',
		marginTop: 0,
		marginLeft: 0,
		marginRight: 0,
		flex:1,
		flexDirection:'row',
		backgroundColor:'#FF1053',

	},
	buttonText: {
		color: '#fff',
		fontSize: 30,
	}
})