
var React = require('react-native');

var Parse = require('parse/react-native');

var Signin = require('./components/authentication/signin');
var Signup = require('./components/authentication/signup');
var Welcome = require('./components/walkthrough/welcome');
//var Tweets = require('./components/tweets/tweets');
var DufineList = require('./components/dufines/dufine-list');
var DufineView = require('./components/dufines/dufine-view');
var DufinePreview = require('./components/dufines/dufine-preview');

var DufineMixins = require('./components/mixins');

var {
	Navigator,
	StyleSheet,
	View,
	Text,
} = React;

var ROUTES = {
	signin: Signin,
	signup: Signup,
	//tweets: Tweets,

	dufinelist: DufineList,
	dufineview: DufineView,
	dufinepreview: DufinePreview,
	welcome: Welcome

};

module.exports = React.createClass({
	mixins: [DufineMixins],
	getInitialState: function() {
		return {
			localData: null,
		}
	},
	// greate place to fetch data
	componentWillMount: function() {
		this.loadData(this.setDataState);
	},
	setDataState: function(find_data) {
		console.log('set data state');
		this.setState({
  			loaded: true,
			localData: find_data,
		});
	},
	renderScene: function(route, navigator){ // called any time navigator gets pushed/popped
		var Component = ROUTES[route.name]; 
		return <Component route={route} navigator={navigator} />;
	},
	render: function() {
		if(!this.state.localData) {
			return (
				<View style={styles.initialContainer}>
					<Text>fetching (local data) from main.js</Text>
				</View>
			);
		}

		if(this.state.localData == 0) {
			return (
				<Navigator
					style={styles.container}
					initialRoute={{name: 'welcome'}}
					renderScene={this.renderScene}
					configureScene={() => {return Navigator.SceneConfigs.FloatFromRight; }} />
			);
		} else {
			return (
			<Navigator
				style={styles.container}
				initialRoute={{name: 'dufinelist',localData:this.state.localData}}
				renderScene={this.renderScene}
				configureScene={() => {return Navigator.SceneConfigs.FloatFromRight; }} />
			);
		}
	}
});

var styles = StyleSheet.create({
	container: {
        flex: 1, // fill entire screen
        marginTop:70
    },
    initialContainer: {
        flex: 1, // fill entire screen
        justifyContent:'center',
		alignItems: 'center',
		backgroundColor: '#fff',
    },
})