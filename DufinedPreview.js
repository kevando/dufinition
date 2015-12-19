'use strict';

var React = require('react-native');
var styles = require('./Styles');

var DufinedView = require('./DufinedView');

var {
    NavigatorIOS,
    Component,
    View,
    Text,
    TouchableWithoutFeedback
    } = React;


class DufinedPreview extends React.Component {

    constructor(props) { // I think this is instead of getintiialstate
        super(props);
        this.state = {
            word: this.props.word
        };
    }

    _handlePhotoSelect() {
        // for some reason i need to 'lazily' load this?
        //var FirstPage = require('./FirstPage');
        //this.props.toggleNavBar();
        this.props.navigator.push({
            title: 'Dufined View',
            component: DufinedView,
            passProps: {
                
            }
        });
    }

    render() {
        return (
            <View>
                <Text>preview page yo</Text>
                <Text>{this.state.word}</Text>

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