'use strict';

var React = require('react-native');
var styles = require('./Styles');

var DufinedView = require('./DufinedView');
var DufinedList = require('./DufinedList');

var {
    NavigatorIOS,
    Component,
    View,
    Text,
    TouchableWithoutFeedback
    } = React;
 

class Main extends React.Component {

    onLeftButtonPress() { 
        // this.props.toggleNavBar();
        this.props.navigator.push({
            title: 'List of Definitions',
            component: DufinedList,
            passProps: {
                // toggleNavBar: this.props.toggleNavBar.bind(this),
            },
            leftButtonTitle: ' ',
        });
    }

    _handlePhotoSelect() { 
        //this.props.toggleNavBar();
        this.props.navigator.push({
            title: 'View first dufined',
            component: DufinedView,
            passProps: {
                toggleNavBar: this.props.toggleNavBar.bind(this),
            },
            rightButtonTitle: 'share',
            onRightButtonPress: this.onRightButtonPress,
            leftButtonTitle: 'close',
            onLeftButtonPress: this.onLeftButtonPress.bind(this),
            
        });
    }

    render() {
        return (
            <View>
                <Text>If you looked up idiot in the dictionary, who would you find?</Text>

                <TouchableWithoutFeedback onPress={this._handlePhotoSelect.bind(this)}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Select a photo</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>

        );
    }

}

module.exports = Main;