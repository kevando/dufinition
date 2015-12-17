'use strict';

var React = require('react-native');
var styles = require('./Styles');

var SecondPage = require('./SecondPage');

var {
    NavigatorIOS,
    Component,
    View,
    Text,
    TouchableWithoutFeedback
    } = React;


class FirstPage extends React.Component {

    _handleChangePage() { 
        this.props.toggleNavBar();
        this.props.navigator.push({
            title: 'second page',
            component: SecondPage,
            passProps: {
                toggleNavBar: this.props.toggleNavBar.bind(this),
            }
        });
    }

    render() {
        return (
            <View>
                <Text>First page yo</Text>

                <TouchableWithoutFeedback onPress={this._handleChangePage.bind(this)}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Go to 2nd page</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>

        );
    }

}

module.exports = FirstPage;