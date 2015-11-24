'use strict';

var React = require('react-native');
var How = require('./How');
var styles = require('./Styles');
var UIImagePickerManager = require('NativeModules').UIImagePickerManager;
var reactNativeStore = require('react-native-store');
var ViewSnapshotter = require('react-native-view-snapshot');
var RNFS = require("react-native-fs");

var {
    AppRegistry,
    NavigatorIOS,
    Component,
    Text,
    TextInput,
    View,
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
            imageSaved: false,
            searchWord: props.dufinition.searchWord,
            photo: props.dufinition.photo,
            photo_uri: 'assets-library://asset/asset.PNG?id=24280A57-FF24-4503-9EF8-0935DBE045CE&ext=PNG',
            dufinition: props.dufinition,
        };
    }

    render() {
        console.log(this.state.dufinition.definition);
        return (
            <View style={styles.container}>
                <View ref="dufinition">
                    <View style={styles.dufTop}>
                        <View style={styles.avatarContainer}>
                            <Image source={{uri: this.state.photo.uri}} style={styles.dufPhoto}/>
                        </View>
                        <View style={styles.dufinitionText}>
                            <Text style={styles.georgia}>{this.state.dufinition.definition.word}</Text>
                            <Text style={styles.georgia}>{this.state.dufinition.definition.partOfSpeech}</Text>
                        </View>
                        
                    </View>
                    <View style={styles.dufinitionDefinition}>
                            <Text style={styles.georgia}>{this.state.dufinition.definition.text}</Text>
                    </View>
                </View>
                
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
        var ref = React.findNodeHandle(this.refs.dufinition);
        ViewSnapshotter.saveSnapshotToPath(ref, this.imagePath(), (error, successfulWrite) => {
            if (successfulWrite) {
                this.setState({imageSaved: true});
                CameraRoll.saveImageWithTag(this.imagePath(), function(data) {
                    console.log(data);
                }, function(err) {
                    console.log(err);
                });
            } else {
                console.log(error)
            }
        }); // ViewSnapshotter
    }

    imagePath() {
        return RNFS.CachesDirectoryPath+"/duf.png";
    }

    dataInput(event) {
        this.setState({ dataInput: event.nativeEvent.text });
    }

    saveToCameraRoll() {
        // console.log('saving to camera roll');
        // console.log(this.state.photo.uri);
        CameraRoll.saveImageWithTag(this.state.photo.uri, function(data) {
            // console.log(data);
        }, function(err) {
            // console.log(err);
        });

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
        // console.log(remove_data);
        this.props.navigator.pop();
        // console.log('return');
    }


}

module.exports = DufinitionDetail;