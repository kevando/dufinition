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
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
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
      var dufineModel = await reactNativeStore.model("dufine_v2");
      var find_data = await dufineModel.find();
      //console.log(find_data);
      if (find_data !== null){
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(find_data),
          //loaded: true,
        });
      } else {
        this._appendMessage('Initialized with no selection on disk.');
      }
    } catch (error) {
      this._appendMessage('AsyncStorage error: ' + error.message);
    }
  }

    componentDidMount() {
        //this._loadInitialState() 

    }

    onRightButtonPress() {
        console.log('duuuude');
    }



    render() {
        //console.log('render dufined list');
        //await this.refreshData()
        // console.log('render dufined list after refreshdata');
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        //var movie = this.state.movies[0];
        //return this.renderMovie(movie);

        // return (    
        //     <View>
        //         <Text>i am a dufined</Text>
        //     </View>


        return (
            <View style={styles.container}>
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderDefinition.bind(this)}
                style={styles.container} />
                <View>
                <TouchableWithoutFeedback onPress={this.refreshData.bind(this)}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>refresh Data</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
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
                        <Text style={styles.buttonText}>refresh Data</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            </View>
    );
  }
  

  renderDefinition(dataObject) {
    
    return (
        <TouchableHighlight 
            onPress={() => this.renderDefinitionDetail(dataObject)}      
        > 
      <View style={styles.listRow}>
        <Image
            source={{uri: dataObject.photo.uri}}
            style={styles.thumbnail}/>
          <View style={styles.rightContainer}>
              <Text style={styles.title}>{dataObject.definition.word}</Text>
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