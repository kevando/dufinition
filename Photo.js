/**
 * Created by echessa on 4/24/15.
 */

'use strict';

var React = require('react-native');
//var SearchBooks = require('./SearchBooks');

var UIImagePickerManager = require('NativeModules').UIImagePickerManager;

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


    omponentDidMount() {
        AsyncStorage.getItem("myKey").then((value) => {
            this.setState({"myKey": value});
        }).done();
    }
    getInitialState() {
        return { };
    }

    

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.saved}>
                    {this.state.myKey}
                </Text>
                <View>
                    <TextInput
                        style={styles.formInput}
                        onChangeText={(text) => this.saveData(text)}
                        value="" />
                </View>
                <Text style={styles.instructions}>
                    Type something into the text box.  It will be saved to
                    device storage.  Next time you open the application, the saved data
                    will still exist.
                </Text>
            </View>
        );
    }
    saveData(value) {
        AsyncStorage.setItem("myKey", value);
        this.setState({"myKey": value});
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

module.exports = Photo;