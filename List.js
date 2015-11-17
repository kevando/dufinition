/**
 * Created by echessa on 4/24/15.
 */

'use strict';

var React = require('react-native');
//var SearchBooks = require('./SearchBooks');

var UIImagePickerManager = require('NativeModules').UIImagePickerManager;

// For 
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


// tmp vars for using the rotten tomato data
var API_KEY = '7waqfqbprs7pajbz28mqf6vz';
var API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json';
var PAGE_SIZE = 25;
var PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE;
var REQUEST_URL = API_URL + PARAMS;


class List extends Component {

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

    var dufineModel = await reactNativeStore.model("dufine");
    // search
    console.log('1');
    var find_data = await dufineModel.find();
    this.setState({
      //dataSource: find_data,
      dataSource: this.state.dataSource.cloneWithRows(find_data),
      loaded: true,
    });
    console.log('3');


  }

  render() {

    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderMovie.bind(this)}
        style={styles.listView} />
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading movies...
        </Text>
      </View>
    );
  }

  renderMovie(movie) {
    return (
      <TouchableHighlight onPress={() => this.showMovieDetail(movie)}
                                underlayColor='#dddddd'>
        <View style={styles.container}>
          
          <View style={styles.rightContainer}>
          
            <Text style={styles.year}>{movie.username}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  showMovieDetail(movie) {

        this.props.navigator.push({
            title: 'titleeee',//book.volumeInfo.title,
            component: MovieDetail,
            passProps: {movie}
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

module.exports = List;