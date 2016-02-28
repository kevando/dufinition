import React, { Component, StyleSheet, Image, Text, View,TouchableHighlight, CameraRoll } from 'react-native';
var Icon = require('react-native-vector-icons/FontAwesome'); // not sure how to write this otherwise
import * as styles from '../style/styles.js';

var ViewSnapshotter = require("react-native-view-snapshot");
var RNFS = require("react-native-fs");

export default class DownloadButton extends Component {

  constructor(props) {
    super(props); //
    this.onDownloadPress = this.onDownloadPress.bind(this);
    this.takeSnapshot = this.takeSnapshot.bind(this);
  }

  onDownloadPress() {
    this.takeSnapshot()
  }

  // Not sure if this is the right place for this function, but it should work for now
  takeSnapshot() { // save to camera roll
    var tmpImagePath = RNFS.CachesDirectoryPath+"/definition.png";
    var ref = React.findNodeHandle(this.props.refs.dufine); // sent in from the DufineView.js container
    ViewSnapshotter.saveSnapshotToPath(ref, tmpImagePath, (error, successfulWrite) => {
      if (successfulWrite) {
          this.setState({catSaved: true});
          // and save it to camera roll
          CameraRoll.saveImageWithTag(tmpImagePath, function(data) {
            console.log(data);
        }, function(err) {
            console.log(err);
        });
      } else {
        console.log(error)
      }
    })
  }

  render() {
    const { dufine } = this.props; //
    if (dufine != null && typeof dufine.photo !== 'undefined') { // then we've sent in a dufine!
      // now check if we should render a photo or an ADD photo
      return(
        <TouchableHighlight style={styles.downloadButton} onPress={this.onDownloadPress} >
          <Text style={styles.downloadButtonText}>Download Dufine</Text>
        </TouchableHighlight>
      );
    } else {
      return (<View></View>)
    }


  }
}
