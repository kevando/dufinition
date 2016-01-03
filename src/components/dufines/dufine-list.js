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
            vars: {definition: dataObject.definition,photo: dataObject.photo,callback:this.refreshData},
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
	
	onNewDufinePress: function() {
        AlertIOS.prompt(  
            'Pick a word', '',  
            [
                {text: 'Cancel', onPress: () => console.log('cancel clickd')},
                {text: 'Next', onPress: (word) => this.onPressSubmit(word)}, 
            ]
        )
	},
    onPressSubmit: function(word) {
        console.log('submit word');
        this.getWordDefinition(word,this.handleDefinitionResponse);
    },
    handleDefinitionResponse: function(responseData){
        console.log('handleDefinitionResponse')
        console.log(responseData)
        if(responseData == null){
            AlertIOS.alert(
                'That is not a word', '',
                [{text: 'I knew that', onPress: () => console.log('ok')},]
            );
        } else {
            this.props.navigator.push({
                name: 'dufineview',
                vars: {definition: responseData,photo: null,callback:this.refreshData},
            });
        }
    },
    
});