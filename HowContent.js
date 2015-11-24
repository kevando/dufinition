'use strict';

var React = require('react-native');
var SearchResults = require('./SearchResults');
var SelectPhoto = require('./SelectPhoto');
var styles = require('./Styles');
//var Search = require('./Search');

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
    testPhoto(){

        console.log(this)

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.instructions}>1) Search for a Word</Text>
                <Text style={styles.instructions}>2) Upload photo</Text>
                <Text style={styles.instructions}>3) Generate Dufinition</Text>
                <Text style={styles.instructions}>4) Share with your homies!</Text>
            </View>
        );
    }
}

module.exports = HowContent;