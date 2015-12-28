var React = require('react-native');


var {
	View,
	Text,
	StyleSheet,
	ListView,
	TouchableHighlight,
	TextInput,
    AlertIOS,
    Image
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
      		listViewDataSource: null,
    	};

	},
	componentWillMount: function() {
	   //console.log('dufine-list.js componentWillMount()');
        this.refreshData();
	},
    

	render: function(){
		if(!this.state.listViewDataSource){
			return (
				<View style={styles.initialContainer}>
					<Text>i am loading dufine list...</Text>
				</View>
			);
		}
		
		return(
            <View>
            <View style={styles.initialContainer}>
                    <Button text={"Create New Dufine"} onPress={this.onNewDufinePress} />
                </View>
            <View>
			<ListView
                    dataSource={this.state.listViewDataSource}
                    renderRow={this.renderDufineRow}
                    automaticallyAdjustContentInsets={false}
                    style={styles.listViewContainer} />
                    </View>
                
                </View>
);
	},
	renderDufineRow: function(rowData, sectionID, rowID, highlightRow){
		return (
        	<TouchableHighlight 
            	onPress={() => this.onRenderRowPress(rowData)} > 
      			<View style={styles.listRow}>
                <Image
            source={{uri: rowData.photo.uri}}
            style={styles.thumbnail}/>
          			<View style={styles.rightContainer}>
              			<Text style={[styles.georgia,styles.listRowText]}>{rowData.definition.word}</Text>
          			</View>
          
        		</View>
        	</TouchableHighlight>
    	);
	},
	onRenderRowPress: function(dataObject) {
        this.props.navigator.push({
            name: 'dufineview',
            props: {definition: dataObject.definition,photo: dataObject.photo,callback:this.refreshData},
        });
    },
    onRefreshDataPress: function() {
        this.refreshData();
    },
    refreshData: function() {
        this.loadData(this.updateDataState);
    },

    updateDataState: function(find_data){
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
            localData: find_data,
            listViewDataSource: ds.cloneWithRows(find_data),
        });
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
	onNewDufinePress: function() {
		
        // testing this.props.navigator.push({
        //     name: 'dufinepreview',
        //     props: {definition: {word:'kev',partOfSpeech:'noun',text:'asdfa'},photo: null},
        // });
        AlertIOS.prompt(  
            'Pick a word', '',  
            [
                {text: 'Cancel', onPress: () => console.log('cancel clickd')},
                {text: 'Next', onPress: (word) => this.onPressSubmit(word)}, 
            ]
        )
	},

    onPressSubmit: function(word) {
        this.getWordDefinition(word);
    },
    getWordDefinition: function(word) {
        // Set loading state while it queries this api
        var baseURL = 'http://api.wordnik.com/v4/word.json/'+word.toLowerCase()+'/definitions?limit=1&includeRelated=false&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
        this.setState({isLoading: true});
        fetch(baseURL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({ isLoading: false, errorMessage: ''});
                console.log(responseData);
                if (responseData.length > 0) {
                    console.log(responseData[0]);
                    this.props.navigator.push({
                        name: 'dufinepreview',
                        //NAV IOS
                        //title: dataObject.definition.word,
                        //component: DufinedView,
                        props: {definition: responseData[0],photo: null},
                    });
                } else {
                    //this.setState({ errorMessage: 'No results found'});
                    AlertIOS.alert(
                        word + ' is not a word', '',
                        [{text: 'Okay', onPress: () => this.onRightButtonPress()},]
                    );
                }
            })
            .catch(error =>
                this.setState({
                    isLoading: false,
                    errorMessage: error
                }))
            .done();

    }
});