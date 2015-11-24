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
                <Text style={styles.instructions}>2) Confirm Definition</Text>
                <Text style={styles.instructions}>3) Upload photo</Text>
                <Text style={styles.instructions}>4) Generate Dufinition</Text>
                <Text style={styles.instructions}>5) Share with your homies!</Text>
<TouchableHighlight style={styles.button} onPress={() =>this.testPhoto()}>
                    <Text style={styles.buttonText}>Use Test photo</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

module.exports = HowContent;