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
    TouchableWithoutFeedback,
    } = React;


class DufinedList extends React.Component {

    constructor(props){
        console.log('list contructor')
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
            kevin: 'kevo'
        };

    }
    async refreshData(){
        //console.log('fresh data');
        this.setState({loaded: false});
        await this._loadData();
        this.setState({loaded: true});
    }

    async _loadData() {

    try {
      var dufineModel = await reactNativeStore.model("dufine_v3.1");
      var find_data = await dufineModel.find();
      //console.log(find_data);
      if (find_data !== null){
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(find_data),
          loaded: true,
        });
      } else {
       // this._appendMessage('Initialized with no selection on disk.');
      }
    } catch (error) {
      //this._appendMessage('AsyncStorage error: ' + error.message);
    }
  }

    componentDidMount() {
        this._loadData() ;
        console.log('did component mount')

    }

    onRightButtonPress() {
        console.log('duuuude');
    }



    render() {
        //if(!this.state.loaded)
            //this._loadData() ;

        console.log('render dufined list');
        

        return (
            <View>
            <View>
                <TouchableWithoutFeedback onPress={this.refreshData.bind(this)}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>pull new Data</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderDefinition.bind(this)}
                    automaticallyAdjustContentInsets={false}
                    style={styles.listViewContainer} />
          </View>  
        );

    }

    renderLoadingView() {
    return (
        <View>
      <View style={styles.container}>
        <Text>
          Loading dufinitions...
        </Text>
      </View>
      <View>
                <TouchableWithoutFeedback onPress={this.refreshData.bind(this)}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>pull new Data</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            </View>
    );
  }
  

  renderDefinition(dataObject) {
    console.log(dataObject)
    
    return (
        <TouchableHighlight 
            onPress={() => this.renderDefinitionDetail(dataObject)}      
        > 
      <View style={styles.listRow}>
        <Image
            source={{uri: dataObject.photo.uri}}
            style={styles.thumbnail}/>
          <View style={styles.rightContainer}>
              <Text style={[styles.georgia,styles.listRowText]}>{dataObject.definition.word}</Text>
          </View>
          
        </View>
        </TouchableHighlight>
    );
  }
  
    onLeftButtonPress() {
        goBack.bind(dufinedView);
    }


  renderDefinitionDetail(dataObject) {
        this.props.navigator.push({
            title: dataObject.definition.word,
            component: DufinedView,
            passProps: {definition: dataObject.definition,photo: dataObject.photo},
            // leftButtonTitle: 'close',
            // onLeftButtonPress: this.onLeftButtonPress.bind(this),
        });
    }

}

module.exports = DufinedList;