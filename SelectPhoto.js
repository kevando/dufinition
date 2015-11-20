/**
 * Created by echessa on 4/24/15.
 */

'use strict';

var React = require('react-native');
var PreviewDufinition = require('./PreviewDufinition');
// var SelectPhoto = require('./SelectPhoto');

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

var styles = StyleSheet.create({
    container: {
        marginTop: 65,
        padding: 10
    },
    searchInput: {
        height: 36,
        marginTop: 10,
        marginBottom: 10,
        fontSize: 18,
        borderWidth: 1,
        flex: 1,
        borderRadius: 4,
        padding: 5
    },
    button: {
        height: 36,
        backgroundColor: '#f39c12',
        borderRadius: 8,
        justifyContent: 'center',
        marginTop: 15
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    instructions: {
        fontSize: 18,
        alignSelf: 'center',
        marginBottom: 15
    },
    fieldLabel: {
        fontSize: 15,
        marginTop: 15
    },
    errorMessage: {
        fontSize: 15,
        alignSelf: 'center',
        marginTop: 15,
        color: 'red'
    }
});

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


    avatarTapped() {

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

              //todo should probly abstract this
                this.props.navigator.push({
                    title: 'Preview Dufinition',
                    component: PreviewDufinition,
                    passProps: {searchWord: this.state.searchWord,photo: source,definition:this.state.definition}
                    //passProps: {word: responseData.items}
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
                <Text style={styles.instructions}>{this.state.searchWord}</Text>
                <Text style={styles.instructions}>Definition: {this.state.definition.text}</Text>
                
                <TouchableHighlight style={styles.button}
                                    underlayColor='#f1c40f'
                                    onPress={() =>this.avatarTapped()}>
                    <Text style={styles.buttonText}>Pick a Photo</Text>
                </TouchableHighlight>
                {spinner}
                <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>
            </View>
        );
    }

    bookAuthorInput(event) {
        this.setState({ bookAuthor: event.nativeEvent.text });
    }

    

}

module.exports = SelectPhoto;