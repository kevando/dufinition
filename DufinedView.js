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
            photo: this.props.photo,
            word: this.props.definition.word
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
        var dufineModel = await reactNativeStore.model("dufine_v3.1");
        var remove_data = await dufineModel.remove({
            word: this.state.definition.word
        });
        console.log('remove_dataa');
        this.props.navigator.pop();
        // console.log('return');
    }
    exportDefinition(){

    }

    async onSaveButtonPress(){
        console.log('right button');
        // Save Item to async storage
        await this.saveData();
        this.props.navigator.popToTop();    
    }

    async saveData(){
        console.log('saving data word: ');
        var dufineModel = await reactNativeStore.model("dufine_v3.1");
        var add_data = await dufineModel.add({
            //searchWord: this.state.word,
            word: this.state.word,
            definition: this.state.definition,
            photo: this.state.photo,
            //definition: this.state.definition
        });
    }

    render() {
        // console.log(this.state.photo)

        var callToAction;
        if(this.props.preview){
            callToAction = (
                <TouchableHighlight style={styles.button}
                    onPress={this.onSaveButtonPress.bind(this)}>
                    <Text style={styles.buttonText}>save this</Text>
                </TouchableHighlight>
            )
        } else{
            callToAction = (
                <TouchableHighlight style={[styles.button,styles.buttonRed]}
                    onPress={this.confirmDelete.bind(this)}>
                    <Text style={styles.buttonText}>delete this</Text>
                </TouchableHighlight>
            );
        }
        
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
                {callToAction}
               
            </View>
        );
    }

}

module.exports = DufinedView;