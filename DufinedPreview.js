'use strict';

var React = require('react-native');
var styles = require('./Styles');

var DufinedView = require('./DufinedView');

//libs
var reactNativeStore = require('react-native-store');
var UIImagePickerManager = require('NativeModules').UIImagePickerManager;
var RNFS = require('react-native-fs');

var {
    NavigatorIOS,
    Component,
    View,
    AlertIOS,
    Text,
    Image,
    TouchableHighlight,
    TouchableWithoutFeedback
    } = React;


class DufinedPreview extends React.Component {

    constructor(props) { // I think this is instead of getintiialstate
        super(props);
        this.state = {
            definition: this.props.definition
        };
    }


    _handlePhotoSelect() {
        var options = {
            title: 'Select Photo',
            cancelButtonTitle: 'Cancel',
            takePhotoButtonTitle: 'Take NEW Photo...',
            chooseFromLibraryButtonTitle: 'Choose EXISTING from Library...',
            quality: 0.2,
            allowsEditing: true,
            storageOptions: {
                skipBackup: true,
                path: 'images' // will save image at /Documents/images rather than the root
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
                this.setState({loading:true})
                console.log(response);
                //var newPath = './images/'+this.state.searchWord+'.jpg';
                console.log('paths');
                //const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};
                // RNFS.writeFile(newPath, 'data:image/jpeg;base64,' + response.data, 'base64')
                //   .then((success) => {
                //     console.log('Image successfully copied to: ');
                //     console.log(newPath)
                //   })
              //var source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};
              var source = {data: 'data:image/jpeg;base64,' + response.data,uri: response.uri.replace('file://', ''), isStatic: true};
              this.state.photo = source;
              console.log('source');
              console.log(source);

              //todo should probly abstract this
                this.props.navigator.push({
                    title: this.state.definition.word,
                    component: DufinedView,
                    passProps: {
                        definition: this.state.definition, 
                        photo: source, 
                        preview: true,
                    },
        });
            }
          }
        });

        // this.props.navigator.push({
        //     title: 'Dufined View',
        //     component: DufinedView,
        //     passProps: {
        //         definition: this.state.definition
        //     },
        //     onRightButtonPress: this.onRightButtonPress.bind(this),
        //     rightButtonTitle: 'Save',
        // });
    }

    render() {

        var callToAction = (<TouchableHighlight style={styles.button}
                                    underlayColor='red'
                                    onPress={this._handlePhotoSelect.bind(this)}>
                    <Text style={styles.buttonText}>Add Photo</Text>
                </TouchableHighlight>);
        return (
            <View style={styles.container}>
                <View ref="definition" style={styles.definitionContainer}>
                    <View style={styles.definition} >
                        <View style={styles.dufTop}>                            
                            <View style={styles.definitionWordContainer}>
                                <Text style={[styles.georgia,styles.definitionWord]}>{this.state.definition.word}</Text>
                                <Text style={[styles.georgia,styles.definitionType]}>{this.state.definition.partOfSpeech}</Text>
                            </View>

                            
                            
                        </View>
                        <View style={styles.definitionBottom}>
                            <View style={styles.dufinitionDefinition}>
                                <Text style={styles.georgia}>{this.state.definition.text}</Text>
                            </View>
                        </View>

                    </View>
                    
                </View>
                {callToAction}
                
            </View>

        );
    }

}

module.exports = DufinedPreview;