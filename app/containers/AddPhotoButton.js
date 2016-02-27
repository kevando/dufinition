import React, { Component, StyleSheet, TouchableHighlight, View, Text, Image  } from 'react-native';

// lets make this a redux compontent
import { bindActionCreators } from 'redux';
import * as dufineActions from '../actions/dufineActions'
import {connect } from 'react-redux';

var UIImagePickerManager = require('NativeModules').UIImagePickerManager;

// this container should get renamed
// and it should pull very heavily from components that it will share with the dufineBig which should change names as well

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#9f88bf',
    width: 120,
    height: 120,
    marginTop: 6,
    padding: 10,
    color: 'white',
    borderRadius: 4,
  },
  photoContainer: {
    marginRight: 20,
    paddingTop: 2,
    flexDirection: 'row',
    backgroundColor: "#fff"
  },
  photo: {
    backgroundColor: 'gray',
    width: 90,
    height: 90,
    margin: 1,
  },
});




// break this into a seperate file

class DufinePhoto extends Component {

  constructor(props) {
    super(props); //

    this.onButtonPress = this.onButtonPress.bind(this);
    this.openImagePicker = this.openImagePicker.bind(this);
  }
  onButtonPress() {
    // Pull up photo
    this.openImagePicker(); // this kicks off an action
  }


  render() { // this render function sucks. todo refactor
    const { dufine } = this.props; //
    if (dufine != null) { // then we've sent in a dufine!
      // now check if we should render a photo or an ADD photo
      if(typeof dufine.photo !== 'undefined'){
        // We have a photo and we should show it
        return (
          <View style={styles.photoContainer}>
            <Image source={{ uri: dufine.photo.data, scale:1 }} style={styles.photo} />
          </View>
        );
      } else {
        return (
          <View style={styles.photoContainer}>
            <TouchableHighlight onPress={this.onButtonPress} >
              <Text style={styles.button}>Add Photo</Text>
            </TouchableHighlight>
          </View>
        );
      }
    } else {
      return (<View></View>)
    }
  }

  // I'd guess this goes somewhere else, but I'm ok having it here for now
  openImagePicker(){
    const { savePhoto, saveDufine } = this.props.actions;
    const options = {
      title: 'Select Photo',
      cancelButtonTitle: 'Cancel',
      takePhotoButtonTitle: 'Take NEW Photo...',
      chooseFromLibraryButtonTitle: 'Choose EXISTING from Library...',
      quality: 0.2, // ?
      allowsEditing: true,
      storageOptions: {
        skipBackup: true,
        path: 'images' // will save image at /Documents/images rather than the root
      }
    };

    UIImagePickerManager.showImagePicker(options, (didCancel, response) => {
      if (didCancel) // User cancelled
        return;

      // Otherwise the image should have saved to some tmp/cache dir
      var source = {
        data: 'data:image/jpeg;base64,' + response.data,
        uri: response.uri.replace('file://', ''),
        isStatic: true
      };
        savePhoto(source); // ACTION that puts photo in the ui
        // I feel like this code should go elsewhere, but whatever
        saveDufine(); // takes word,definition, photo from the ui and stores it in the state
        // clearWord();
    });
  } // openImagePicker
}


// proptypes?

export default connect(state =>({
  state: state.dufine // i think this grabs info from the reducer. which tells this compotnent whether to re-render or not
}),
(dispatch) => ({
  actions: bindActionCreators(dufineActions, dispatch)
})
)(DufinePhoto);
