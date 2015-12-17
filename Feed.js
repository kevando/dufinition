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

class FeedView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Feed View!
                </Text>
            </View>
        );
    }
}

module.exports = FeedView;