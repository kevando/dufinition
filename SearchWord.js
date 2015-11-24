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


class SearchWord extends Component {

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
                <View>
                    <Text style={styles.fieldLabel}>Search for a word to dufine:</Text>
                    <TextInput 
                        style={styles.searchInput} 
                        onChange={this.searchWordInput.bind(this)} />
                </View>
                <TouchableHighlight 
                    style={styles.button}
                    onPress={this.searchWords.bind(this)}
                >
                    <Text style={styles.buttonText}>Search</Text>
                </TouchableHighlight>
                {spinner}
                <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>
            </View>
        );
    }

    searchWords() {
        // Set loading state while it queries this api
        var baseURL = 'http://api.wordnik.com/v4/word.json/'+this.state.searchWord.toLowerCase()+'/definitions?limit=1&includeRelated=false&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
        this.setState({isLoading: true});
        fetch(baseURL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({ isLoading: false, errorMessage: ''});
                if (responseData.length > 0) {
                    this.props.navigator.push({
                        title: 'Create New Dufinition',
                        component: SelectPhoto,
                        passProps: {searchWord: this.state.searchWord, definition: responseData[0]}
                    });
                } else {
                    this.setState({ errorMessage: 'No results found'});
                }
            })
            .catch(error =>
                this.setState({
                    isLoading: false,
                    errorMessage: error
                }))
            .done();

    }

    searchWordInput(event) {
        this.setState({ searchWord: event.nativeEvent.text });
    }

}

module.exports = SearchWord;