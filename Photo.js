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



class Photo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            avatarSource: null
        };
    }

    avatarTapped() {
        console.log('avatarTapped')
    const options = {
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
          //const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};
          const source = {uri: response.uri.replace('file://', ''), isStatic: true};

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
        <TouchableOpacity onPress={() =>this.avatarTapped()}>
          <View style={[styles.avatar, styles.avatarContainer]}>
          { this.state.avatarSource === null ? <Text>Select a Photo</Text> :
            <Image style={styles.avatar} source={this.state.avatarSource} />
          }
          </View>
        </TouchableOpacity>
      </View>
        );
    }


}

const styles = StyleSheet.create({
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

module.exports = Photo;