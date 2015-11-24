'use strict';

var React = require('react-native');
var SearchWord = require('./SearchWord');

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

class Search extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
                    title: 'Create New Dufinition',
                    component: SearchWord
            }}/>
        );
    }
}

module.exports = Search;