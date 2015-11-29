/**
 * Created by echessa on 4/24/15.
 */

'use strict';

var React = require('react-native');
var UIImagePickerManager = require('NativeModules').UIImagePickerManager;

var reactNativeStore = require('react-native-store');
var styles = require('./Styles');

var {
    Component,
    TouchableHighlight,
    Text,
    View,
    TouchableOpacity,
    Image,
    CameraRoll,
    AlertIOS,
    } = React;



class PreviewDufinition extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchWord: props.searchWord,
            photo: props.photo,
            definition: props.definition
        };
    }


    render() {
        return (
            <View style={styles.container}>
                <View>
                    <View style={styles.dufTop}>
                        <View style={styles.avatarContainer}>
                            <Image source={{uri: this.state.photo.uri}} style={styles.dufPhoto}/>
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
            
                <TouchableHighlight style={styles.button} onPress={this.saveData.bind(this)}>
                    <Text style={styles.buttonText}>Save this Dufinition</Text>
                </TouchableHighlight>
            </View>
        );
    }

    async saveData(){
        // console.log('1');
        var dufineModel = await reactNativeStore.model("dufine_v2");
        var add_data = await dufineModel.add({
            searchWord: this.state.searchWord,
            photo: this.state.photo,
            definition: this.state.definition
        });
        
        AlertIOS.alert(
            'Dufine Saved!',
            'Nice job.'
          )
        // Figure out how to direct user to a new component
        //this.props.navigator.popToTop();
        

    }


}


module.exports = PreviewDufinition;