/**
 * Created by echessa on 4/24/15.
 */

'use strict';

var React = require('react-native');
var How = require('./How');
var styles = require('./Styles');
var UIImagePickerManager = require('NativeModules').UIImagePickerManager;
var reactNativeStore = require('react-native-store');
var ViewSnapshotter = require('react-native-view-snapshot');

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
  AlertIOS,

    } = React;




class DufinitionDetail extends Component {

    

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            errorMessage: '',
            searchWord: props.dufinition.searchWord,
            photo: props.dufinition.photo,
            path: props.dufinition.path,
        };
    }




    

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.avatar, styles.avatarContainer]}>
              { this.state.photo === null ? <Text>no photo passed :(</Text> :
                <Image style={styles.avatar} source={this.state.photo} />
              }
              </View>

                
                <Text style={styles.saved}>{this.state.photo.path}</Text>
                
                <TouchableHighlight style={styles.button}
                                    underlayColor='#f1c40f'
                                    onPress={this.confirmDelete.bind(this)}>
                    <Text style={styles.buttonText}>delete this</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button}
                                    underlayColor='#f1c40f'
                                    onPress={this.saveDufinition.bind(this)}>
                    <Text style={styles.buttonText}>save this</Text>
                </TouchableHighlight>
            </View>
        );
    }
    saveDufinition(){
        console.log('saveDufinition');
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
    confirmDelete() {
        AlertIOS.alert(
            'Delete Dufinition',
            'Are you sure?',
            [
              {text: 'Yes', onPress: () =>  this.deleteDufinition()},
              {text: 'No', onPress: () => console.log('User cancelled deltion')},
            ]
          )
    }

    async deleteDufinition(dufinition){
        var dufineModel = await reactNativeStore.model("dufine_v1");
        
        
        var remove_data = await dufineModel.remove({
            searchWord: this.state.searchWord
        });
        console.log(remove_data);
        this.props.navigator.pop();
        console.log('return');
    }


}

module.exports = DufinitionDetail;