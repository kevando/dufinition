/**
 * Created by echessa on 4/24/15.
 */

'use strict';

var React = require('react-native');
var SearchBooks = require('./SearchBooks');

var UIImagePickerManager = require('NativeModules').UIImagePickerManager;

var {
    StyleSheet,
    NavigatorIOS,
    Component,
    // StyleSheet,
  Text,
  View,
  PixelRatio,
  TouchableOpacity,
  Image,
  // NativeModules: {
  //   UIImagePickerManager
  // }
    } = React;



class PreviewDufinition extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchWord: props.searchWord,
            photo: props.photo
        };
    }

    avatarTapped() {
        console.log('avatarTapped')
    var options = {
      title: 'Select Photo',
      cancelButtonTitle: 'Cancel',
      takePhotoButtonTitle: 'Take Photo...',
      chooseFromLibraryButtonTitle: 'Choose from Library...',
      quality: 0.2,
      storageOptions: {
        skipBackup: true
      }
    };

    UIImagePickerManager.showImagePicker(options, (didCancel, response) => {
      console.log('Response = ', response);

      if (didCancel) {
        console.log('User cancelled image picker');
      }
      else {
        if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        }
        else {
          //var source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};
          var source = {uri: response.uri.replace('file://', ''), isStatic: true};

          this.setState({
            avatarSource: source
          });
        }
      }
    });
  }

    render() {
        return (
           <View style={styles.container}>
           <Text style={styles.instructions}>You chose the word {this.state.searchWord}</Text>
        <TouchableOpacity onPress={() =>this.avatarTapped()}>
          <View style={[styles.avatar, styles.avatarContainer]}>
          { this.state.photo === null ? <Text>no photo passed :(</Text> :
            <Image style={styles.avatar} source={this.state.photo} />
          }
          </View>
        </TouchableOpacity>
      </View>
        );
    }


}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150
  }
});

module.exports = PreviewDufinition;