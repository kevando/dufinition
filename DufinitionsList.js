/**
 * Created by echessa on 4/24/15.
 */

'use strict';

var React = require('react-native');
var DufinitionDetail = require('./DufinitionDetail')
//var UIImagePickerManager = require('NativeModules').UIImagePickerManager;
var reactNativeStore = require('react-native-store');

var {
  AppRegistry,
  TouchableHighlight,
    StyleSheet,
    NavigatorIOS,
    Component,
    AsyncStorage,
    ListView,
  Text,
  TextInput,
  View,
  PixelRatio,
  TouchableOpacity,
  Image,
  // NativeModules: {
  //   UIImagePickerManager
  // }
    } = React;



class DufinitionsList extends Component {

constructor(props) {
  console.log('constructor');
        super(props); // not sure what this does
        this.state = {
          dataSource: new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
          }),
          loaded: false,
        };
    }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    console.log('async fetch data')
    var dufineModel = await reactNativeStore.model("dufine_v1");
    // search
    var find_data = await dufineModel.find();
    console.log(find_data)
    this.setState({
      //dataSource: find_data,
      dataSource: this.state.dataSource.cloneWithRows(find_data),
      loaded: true,
    });


  }

  render() {

    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderDufinition.bind(this)}
        style={styles.listView} />
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
    return (
      <TouchableHighlight onPress={() => this.showDufinitionDetail(dufinition)}
                                underlayColor='#dddddd'>
        <View style={styles.container}>
          
          <View style={styles.rightContainer}>
          
            <Text style={styles.year}>{dufinition.searchWord}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  showDufinitionDetail(dufinition) {

        this.props.navigator.push({
            title: 'titleeee',//book.volumeInfo.title,
            component: DufinitionDetail,
            passProps: {dufinition}
        });
    }


}

var styles = StyleSheet.create({
  container: {
        padding: 30,
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
        backgroundColor: "#F5FCFF",
    },
    formInput: {
        flex: 1,
        height: 26,
        fontSize: 13,
        borderWidth: 1,
        borderColor: "#555555",
    },
    saved: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5,
        marginTop: 5,
    },
    container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 65
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});

module.exports = DufinitionsList;