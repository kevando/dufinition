/**
 * Created by echessa on 4/24/15.
 */

'use strict';

var React = require('react-native');
//var SearchBooks = require('./SearchBooks');

var UIImagePickerManager = require('NativeModules').UIImagePickerManager;
var reactNativeStore = require('react-native-store');

var {
  AppRegistry,
    StyleSheet,
    NavigatorIOS,
    Component,
    AsyncStorage,
  Text,
  TextInput,
  View,
  PixelRatio,
  TouchableHighlight,
  Image,
  CameraRoll,
  // NativeModules: {
  //   UIImagePickerManager
  // }
    } = React;




class DufinitionDetail extends Component {

    

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            errorMessage: '',
            searchWord: props.dufinition.searchWord,
            photo: props.dufinition.photo,
        };
    }


    componentDidMount() {
        // console.log('saving to camera roll');
        // console.log(this.state.photo.uri)
        // CameraRoll.saveImageWithTag(this.state.photo.uri, function(data) {
        //     console.log(data);
        // }, function(err) {
        //     console.log(err);
        // });
        // console.log('image saved');
    }
    getInitialState() {
        return { };
    }

    

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.saved}>
                    {this.state.photo.uri}
                </Text>
                
                <TouchableHighlight style={styles.button}
                                    underlayColor='#f1c40f'
                                    onPress={this.saveToCameraRoll.bind(this)}>
                    <Text style={styles.buttonText}>save to camera roll</Text>
                </TouchableHighlight>
            </View>
        );
    }

    dataInput(event) {
        this.setState({ dataInput: event.nativeEvent.text });
    }

    saveToCameraRoll() {
        console.log('saving to camera roll');
        console.log(this.state.photo.uri)
        CameraRoll.saveImageWithTag(this.state.photo.uri, function(data) {
            console.log(data);
        }, function(err) {
            console.log(err);
        });
        console.log('image saved');

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
});

module.exports = DufinitionDetail;