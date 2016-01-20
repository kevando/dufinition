'use strict';

var React = require('react-native');
var PreviewDufinition = require('./PreviewDufinition');
var styles = require('./Styles');
var RNFS = require('react-native-fs');

var UIImagePickerManager = require('NativeModules').UIImagePickerManager;


var {
    StyleSheet,
    View,
    Text,
    Component,
    TextInput,
    TouchableHighlight,
    ActivityIndicatorIOS
    } = React;



class SelectPhoto extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            errorMessage: '',
            searchWord: props.searchWord,
            definition: props.definition
        };
    }
    testPhoto(){
        this.props.navigator.push({
                    title: 'Preview Dufinition',
                    component: PreviewDufinition,
                    passProps: {searchWord: this.state.searchWord,photo: {},definition:this.state.definition}

                });

    }


    avatarTapped() {

        var options = {
            title: 'Select Photo',
            cancelButtonTitle: 'Cancel',
            takePhotoButtonTitle: 'Take Photo...',
            chooseFromLibraryButtonTitle: 'Choose from Library...',
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
                var path = RNFS.MainBundlePath + '/'+this.state.searchWord+'.jpg';
                RNFS.writeFile(path, 'data:image/jpeg;base64,' + response.data, 'base64')
                  .then((success) => {
                    console.log('FILE WRITTEN!');
                  })
              //var source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};
              var source = {data: 'data:image/jpeg;base64,' + response.data,uri: response.uri.replace('file://', ''), isStatic: true,path:path};


              //todo should probly abstract this
                this.props.navigator.push({
                    title: 'Preview Dufined',
                    component: PreviewDufinition,
                    passProps: {searchWord: this.state.searchWord,photo: source,definition:this.state.definition}

                });
            }
          }
        });
      }

    render() {
        var spinner = this.state.isLoading ?
            ( <ActivityIndicatorIOS
                hidden='true'
                size='large'/> ) :
            ( <View/>);
        return (
            <View style={styles.container}>
                <View>
                    <View style={styles.dufTop}>
                            <View style={styles.avatarContainer}>
                                <TouchableHighlight style={styles.button}
                                    underlayColor='#f1c40f'
                                    onPress={() =>this.avatarTapped()}>
                                    <Text style={styles.buttonText}>Pick a Photo</Text>
                                </TouchableHighlight>
                            </View>
                            <View style={styles.dufinitionText}>
                                <Text style={styles.georgia}>{this.state.definition.word}</Text>
                                <Text style={styles.georgia}>{this.state.definition.partOfSpeech}</Text>
                            </View>
                            
                        </View>
                        <View style={styles.dufinitionDefinition}>
                                <Text style={styles.georgia}>{this.state.definition.text}</Text>
                        </View>
                    </View>
                
                {spinner}
                <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>
            </View>
        );
    }

    

}

module.exports = SelectPhoto;