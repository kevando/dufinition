/**
 * Created by echessa on 4/24/15.
 */

'use strict';

var React = require('react-native');
var SearchResults = require('./SearchResults');
var SelectPhoto = require('./SelectPhoto');
var styles = require('./Styles');

var {
    View,
    Text,
    Component,
    TextInput,
    TouchableHighlight,
    ActivityIndicatorIOS,
    } = React;


class HowContent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.instructions}>1) Search for a Word</Text>
                <Text style={styles.instructions}>2) Confirm Definition</Text>
                <Text style={styles.instructions}>3) Upload photo</Text>
                <Text style={styles.instructions}>4) Generate Dufinition</Text>
                <Text style={styles.instructions}>5) Share with your homies!</Text>
            </View>
        );
    }
}

module.exports = HowContent;