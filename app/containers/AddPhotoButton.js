import React, { Component, StyleSheet, TextInput, TouchableHighlight, View, Text  } from 'react-native';

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
    width: 220,
    height: 32,
    marginTop: 6,
    padding: 10,
    color: 'white',
    borderRadius: 4,
  },
});




// break this into a seperate file

class AddPhotoButton extends Component {

  constructor(props) {
    super(props); //
    this.onBackButtonPress = this.onBackButtonPress.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);
    this.openImagePicker = this.openImagePicker.bind(this);
  }
  onButtonPress() {
    // Pull up photo
    this.openImagePicker(); // this kicks off an action
    console.log('addButton props',this.props)

  }
  // this, along with the touchable highlight should be its own container i think
  onBackButtonPress() {
    // console.log(this.props.actions)
    // grab action that will pull definition from wordsapi
    const { clearWord } = this.props.actions;
    clearWord();
    // I am not sure if this is the best place for this

  }



  render() {
    return (
      <View>
      <View>
        <TouchableHighlight onPress={this.onBackButtonPress} >
          <Text style={styles.button}>Change Word</Text>
        </TouchableHighlight>
      </View>
        <View>
          <TouchableHighlight onPress={this.onButtonPress} >
            <Text style={styles.button}>Add Photo</Text>
          </TouchableHighlight>
        </View>
        </View>
    );
  }

  // I'd guess this goes somewhere else, but I'm ok having it here for now
  openImagePicker(){
    console.log('openimagepicker props',this.props)
    const { savePhoto, saveDufine, clearWord } = this.props.actions;
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
        clearWord();
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
)(AddPhotoButton);
