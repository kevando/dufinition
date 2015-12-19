'use strict';

var React = require('react-native');
var styles = require('./Styles');

var DufinedDetail = require('./DufinedDetail')
var reactNativeStore = require('react-native-store');

var DufinedView = require('./DufinedView');

var {
    AppRegistry,
    TouchableHighlight,
    //NavigatorIOS,
    Component,
    ListView,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Image,
    } = React;


class DufinedList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          dataSource: new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
          }),
          loaded: false,
        };

    }
    componentDidMount() {
        this._loadInitialState() 

    }

    onRightButtonPress() {
        console.log('duuuude');
    }

    async _loadInitialState() {

    try {
      var dufineModel = await reactNativeStore.model("dufine_v2");
      var find_data = await dufineModel.find();
      if (find_data !== null){
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(find_data),
          loaded: true,
        });
        // this.setState({selectedValue: value});
        // this._appendMessage('Recovered selection from disk: ' + value);
      } else {
        this._appendMessage('Initialized with no selection on disk.');
      }
    } catch (error) {
      this._appendMessage('AsyncStorage error: ' + error.message);
    }
  }

    render() {
        return (
            
            <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderDefinition.bind(this)}
        style={styles.container} />

        );
    }

    renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading dufinitions...
        </Text>
      </View>
    );
  }

  renderDefinition(definition) {
    
    return (
      <TouchableHighlight 
          onPress={() => this.renderDefinitionDetail(definition)}      
        > 
      <View style={styles.listRow}>
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{definition.searchWord}</Text>
          </View>
          
        </View>
        </TouchableHighlight>
    );
  }
  

  renderDefinitionDetail(definition) {
        this.props.navigator.push({
            title: definition.searchWord,
            component: DufinedDetail,
            passProps: {definition},
            leftButtonTitle: 'Close',
            onLeftButtonPress: this.props.navigator.push({
                title: 'List of De',
                component: DufinedView
            })
        });
    }

}

module.exports = DufinedList;