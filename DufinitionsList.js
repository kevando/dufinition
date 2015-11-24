/**
 * Created by echessa on 4/24/15.
 */

'use strict';

var React = require('react-native');
var DufinitionDetail = require('./DufinitionDetail')
var reactNativeStore = require('react-native-store');
var styles = require('./Styles');

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



class DufinitionsList extends Component {

constructor(props) {
  // console.log('dufinition list constructor');
        super(props); // not sure what this does
        this.state = {
          dataSource: new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
          }),
          loaded: false,
        };
    }

  componentDidMount() {
    //this.fetchData();
    this._loadInitialState().done();
  }
  async _loadInitialState() {

    try {
      var dufineModel = await reactNativeStore.model("dufine_v1");
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
    
    this._loadInitialState().done(); // might be too much
    // if I console log here, it renders like every clock cycle todo
    
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderDufinition.bind(this)}
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

  renderDufinition(dufinition) {
    //console.log(dufinition);
    return (
      // <View style={styles.listRow}>
      //   <TouchableHighlight 
      //     onPress={() => this.renderDufinitionDetail(dufinition)}
          
      //   >          
      //     <View>
      //       <Image
      //         source={{uri: 'assets-library://asset/asset.PNG?id=24280A57-FF24-4503-9EF8-0935DBE045CE&ext=PNG'}}
      //         style={styles.thumbnail}/>

      //       <View style={styles.rightContainer}>
      //         <Text>{dufinition.searchWord}</Text>
      //       </View>
      //     </View>
      //   </TouchableHighlight>
      // </View>
      <TouchableHighlight 
          onPress={() => this.renderDufinitionDetail(dufinition)}
          
        > 
      <View style={styles.listRow}>
      
          <Image
            source={{uri: 'assets-library://asset/asset.PNG?id=24280A57-FF24-4503-9EF8-0935DBE045CE&ext=PNG'}}
            style={styles.thumbnail}/>
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{dufinition.definition.word}</Text>
          </View>
          
        </View>
        </TouchableHighlight>
    );
  }

  renderDufinitionDetail(dufinition) {
    // console.log(dufinition);
        this.props.navigator.push({
            title: 'titleeee',//book.volumeInfo.title,
            component: DufinitionDetail,
            passProps: {dufinition}
        });
    }


}


module.exports = DufinitionsList;