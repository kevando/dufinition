var React = require('react-native');
var styles = require('../../styles/styles');
var {
	Text,
	StyleSheet,
	TouchableHighlight,
	View
} = React;


module.exports = React.createClass({
	render: function(){
		return (
			<View style={styles.navContainer}>
				<View style={styles.leftContainer}>
                	{this.props.leftButton()}
                </View>
                <View style={styles.centerContainer}>
                	<Text style={styles.navTitle}>
                		{this.props.title}
                	</Text>
                </View>
                
                <View style={styles.rightContainer}>
                	{this.props.rightButton()}
                </View>
            </View>

		)
	},
});

var styles = StyleSheet.create({
	navContainer: {
        height: 50,

        flexDirection: 'row',
        backgroundColor: '#eee',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    navTitle: {
        textAlign: 'center',
        fontWeight: '300',
        fontSize: 18,
        marginBottom:4,
        color:'#000',
    },
    leftContainer: {
    	borderColor: '#000',
        borderWidth: 0,
        flex: 1,
    },
    rightContainer: {
    	borderColor: '#000',
        borderWidth: 0,
        flex: 1,
        alignItems: 'flex-end',
        

    }
})