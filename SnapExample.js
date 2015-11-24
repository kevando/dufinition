/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  Component,
  View,
  Image,
  TouchableOpacity,
  CameraRoll,
} = React;

var ViewSnapshotter = require("react-native-view-snapshot");
var RNFS = require("react-native-fs");

class SnapExample extends Component{

  constructor(props) {
    console.log('asdf')
    super(props);
    this.state = {
      catSaved: false
    }
  }

  takeSnapshot() {
    //console.log(this)
    //console.log(this.ref)
    var ref = React.findNodeHandle(this.refs.catView);
    ViewSnapshotter.saveSnapshotToPath(ref, this.imagePath(), (error, successfulWrite) => {
      if (successfulWrite) {
          this.setState({catSaved: true});
          // and save it to camera roll
          CameraRoll.saveImageWithTag(this.imagePath(), function(data) {
            console.log(data);
        }, function(err) {
            console.log(err);
        });
      } else {
        console.log(error)
      }
    })
  }

  imagePath() {
    return RNFS.CachesDirectoryPath+"/cat.png";
  }

  renderSnapshot() {
    if (this.state.catSaved) {
      return <Image source={{uri: this.imagePath()}} style={{width: 200, height: 200}} />
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View ref="catView" style={styles.topView}>
          <Image style={styles.image} source={{uri: "http://25.media.tumblr.com/tumblr_ll4socjBpK1qjahcpo1_1280.jpg"}}>
            <Text style={styles.text}>SOY EL AMOR</Text>
          </Image>
        </View>
        <TouchableOpacity style={styles.button} onPress={this.takeSnapshot.bind(this)}>
          <Text>SNAPSHOT IT!</Text>
        </TouchableOpacity>
        {this.renderSnapshot()}
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
  },
  topView: {
    borderWidth: 5,
    borderColor: "orange"
  },
  button: {
    marginVertical: 20,
    padding: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc'
  },
  image: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  text: {
    color: 'white',
    fontSize: 30,
    backgroundColor: 'black',
    opacity: .5
  }
});
module.exports = SnapExample;