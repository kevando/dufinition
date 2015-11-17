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
  // NativeModules: {
  //   UIImagePickerManager
  // }
    } = React;




class MovieDetail extends Component {

    

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
                    <Text style={styles.buttonText}>Add Data yo</Text>
                </TouchableHighlight>
            </View>
        );
    }

    dataInput(event) {
        this.setState({ dataInput: event.nativeEvent.text });
    }

    async saveData() {
        var dufineModel = await reactNativeStore.model("dufine");
        // Add Data
  var add_data = await dufineModel.add({
    username: this.state.dataInput,
    age: 12,
    sex: "man"
  });
  // return object or null
  console.log(add_data);

        AsyncStorage.setItem("myKey", this.state.dataInput);
        this.setState({"myKey": this.state.dataInput});
        // search
  var find_data = await dufineModel.find();
  console.log("find",find_data);
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

module.exports = MovieDetail;