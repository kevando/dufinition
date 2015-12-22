'use strict';

var React = require('react-native');
var styles = require('./Styles');

var DufinedView = require('./DufinedView');

//libs
var reactNativeStore = require('react-native-store');

var {
    NavigatorIOS,
    Component,
    View,
    AlertIOS,
    Text,
    TouchableWithoutFeedback
    } = React;


class DufinedPreview extends React.Component {

    constructor(props) { // I think this is instead of getintiialstate
        super(props);
        this.state = {
            definition: this.props.definition
        };
    }

    async onRightButtonPress(){

        console.log('right button');
        // Save Item to async storage
        await this.saveData();

        console.log('this should log after saving data is done')


        this.props.navigator.popToTop();    

    }

    async saveData(){
        console.log('saving data');
        var dufineModel = await reactNativeStore.model("dufine_v2");
        var add_data = await dufineModel.add({
            //searchWord: this.state.word,
            word: this.state.word,
            definition: this.state.definition,
            //photo: this.state.photo,
            //definition: this.state.definition
        });
        

    }

    _handlePhotoSelect() {
        // for some reason i need to 'lazily' load this?
        //var FirstPage = require('./FirstPage');
        //this.props.toggleNavBar();
        this.props.navigator.push({
            title: 'Dufined View',
            component: DufinedView,
            passProps: {
                definition: this.state.definition
            },
            onRightButtonPress: this.onRightButtonPress.bind(this),
            rightButtonTitle: 'Save',
        });
    }

    render() {
        return (
            <View>
                <Text>{this.state.definition.word}</Text>
                <Text>This is a noun or some shit</Text>
                <Text>{this.state.definition.text}</Text>

                <TouchableWithoutFeedback onPress={this._handlePhotoSelect.bind(this)}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>+ photo & go to view</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>

        );
    }

}

module.exports = DufinedPreview;