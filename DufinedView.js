'use strict';

var React = require('react-native');
var styles = require('./Styles');



var {
    NavigatorIOS,
    Component,
    View,
    Text,
    TouchableWithoutFeedback
    } = React;


class DufinedView extends React.Component {

    _handleChangePage() {
        // for some reason i need to 'lazily' load this?
        var FirstPage = require('./FirstPage');
        this.props.toggleNavBar();
        this.props.navigator.push({
            title: 'first page',
            component: FirstPage,
            passProps: {
                toggleNavBar: this.props.toggleNavBar.bind(this),
            }
        });
    }

    render() {
        return (
            <View>
                <Text>second page yo</Text>

                <TouchableWithoutFeedback onPress={this._handleChangePage.bind(this)}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Go to first page</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>

        );
    }

}

module.exports = DufinedView;