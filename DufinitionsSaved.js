/**
 * Created by echessa on 4/24/15.
 */

'use strict';

var React = require('react-native');
var DufinitionsList = require('./DufinitionsList');

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

class DufinitionsSaved extends Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
                    title: 'Saved Dufinitions',
                    component: DufinitionsList
            }}/>
        );
    }
}

module.exports = DufinitionsSaved;