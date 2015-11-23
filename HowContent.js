/**
 * Created by echessa on 4/24/15.
 */

'use strict';

var React = require('react-native');
var SearchResults = require('./SearchResults');
var SelectPhoto = require('./SelectPhoto');
var styles = require('./Styles');

var {
    StyleSheet,
    View,
    Text,
    Component,
    TextInput,
    TouchableHighlight,
    ActivityIndicatorIOS,
    AlertIOS,
    } = React;


class HowContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            errorMessage: '',
            searchWord: '',

        };
    }


    render() {
        var spinner = this.state.isLoading ?
            ( <ActivityIndicatorIOS
                hidden='true'
                size='large'/> ) :
            ( <View/>);
        return (
            <View style={styles.container}>
                <Text style={styles.instructions}>1) Search for a Word</Text>
                <Text style={styles.instructions}>2) Confirm Definition</Text>
                <Text style={styles.instructions}>3) Upload photo</Text>
                <Text style={styles.instructions}>4) Generate Dufinition!</Text>
            </View>
        );
    }



}

module.exports = HowContent;