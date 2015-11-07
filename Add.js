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
  TouchableHighlight,
  Image,
  // NativeModules: {
  //   UIImagePickerManager
  // }
    } = React;



class Add extends Component {

    constructor(props) {
        super(props);
        this.state = {
            avatarSource: null
        };
    }


    componentDidMount() {
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
                    data:{this.state.myKey}:data
                </Text>
                <View>
                    <TextInput
                        style={styles.formInput} onChange={this.dataInput.bind(this)}/>
                </View>
                <TouchableHighlight style={styles.button}
                                    underlayColor='#f1c40f'
                                    onPress={this.saveData.bind(this)}>
                    <Text style={styles.buttonText}>Add Data</Text>
                </TouchableHighlight>
            </View>
        );
    }

    dataInput(event) {
        this.setState({ dataInput: event.nativeEvent.text });
    }

    saveData() {
        AsyncStorage.setItem("myKey", this.state.dataInput);
        this.setState({"myKey": this.state.dataInput});
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

module.exports = Add;