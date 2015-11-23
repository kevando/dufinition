'use strict';

var React = require('react-native');
var HowContent = require('./HowContent');

var {
    StyleSheet,
    NavigatorIOS,
    Component
    } = React;

var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

class How extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
                    title: 'How this works',
                    component: HowContent
            }}/>
        );
    }
}

module.exports = How;