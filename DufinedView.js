'use strict';

var React = require('react-native');
var styles = require('./Styles');

var reactNativeStore = require('react-native-store');


var {
    NavigatorIOS,
    Component,
    View,
    Text,
    TouchableWithoutFeedback,
    TouchableHighlight,
    AlertIOS,
    Image,
    } = React;


class DufinedView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            definition: this.props.definition,
            photo: this.props.photo
        }
    }
    _handleChangePage() {

        // this.props.toggleNavBar();
        this.props.navigator.popToTop();
    }



    goBack(){
        this.props.navigator.popToTop();
    }

    confirmDelete() {
        AlertIOS.alert(
            'Delete Definition',
            'Are you sure?',
            [
              {text: 'Yes', onPress: () =>  this.deleteDefinition()},
              {text: 'No', onPress: () => console.log('User cancelled deletion')},
            ]
        );
    }
    async deleteDefinition(){
        console.log('delete this bitch')
        var dufineModel = await reactNativeStore.model("dufine_v2");
        var remove_data = await dufineModel.remove({
            searchWord: this.state.definition.searchWord
        });
        console.log('remove_data');
        this.props.navigator.pop();
        // console.log('return');
    }
    exportDefinition(){

    }

    render() {
        // console.log(this.state.photo)
        return (
            <View style={styles.container}>
                <View ref="definition" style={styles.definitionContainer}>
                    <View style={styles.definition} >
                        <View style={styles.dufTop}>                            
                            <View style={styles.definitionWordContainer}>
                                <Text style={[styles.georgia,styles.definitionWord]}>{this.state.definition.word}</Text>
                                <Text style={[styles.georgia,styles.definitionType]}>{this.state.definition.partOfSpeech}</Text>
                            </View>

                            <View style={styles.photoContainer}>                                
                                <Image source={{uri: this.state.photo.uri}} style={styles.definitionPhoto}/>
                            </View>
                            
                        </View>
                        <View style={styles.definitionBottom}>
                            <View style={styles.dufinitionDefinition}>
                                <Text style={styles.georgia}>{this.state.definition.text}</Text>
                            </View>
                        </View>

                    </View>
                    
                </View>
                
                <TouchableHighlight style={styles.button}
                                    underlayColor='red'
                                    onPress={this.confirmDelete.bind(this)}>
                    <Text style={styles.buttonText}>delete this</Text>
                </TouchableHighlight>
            </View>
        );
    }

}

module.exports = DufinedView;