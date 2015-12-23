'use strict';

var React = require('react-native');
var HowContent = require('./HowContent');

var {
    StyleSheet,
    NavigatorIOS,
    Component,
    View,
    Text
    } = React;

var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

class Settings extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Settings for that stuff
                </Text>
                <Text>
                    What stuff? This app sucks
                </Text>
            </View>
        );
    }
}

module.exports = Settings;