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
                <Text style={styles.instructions}>Search for a word</Text>
                <View>
                    <Text style={styles.fieldLabel}>Dictionary Word:</Text>
                    <TextInput style={styles.searchInput} onChange={this.searchWordInput.bind(this)}/>
                </View>
                <TouchableHighlight style={styles.button}
                                    underlayColor='#f1c40f'
                                    onPress={this.searchWords.bind(this)}>
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
        console.log(baseURL)

        fetch(baseURL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({ isLoading: false});
                console.log(responseData)
                if (responseData.length > 0) {
                    this.props.navigator.push({
                        title: 'Preview Definition',
                        component: SelectPhoto,
                        passProps: {searchWord: this.state.searchWord, definition: responseData[0]}
                    });
                } else {
                    this.setState({ errorMessage: 'No results found'});
                    AlertIOS.alert(
                        'Word definition was NOT found',
                        null,
                        [
                          {text: 'Button', onPress: () => console.log('Button Pressed!')},
                        ]
                    )
                }
            })
            .catch(error =>
                this.setState({
                    isLoading: false,
                    errorMessage: error
                }))
            .done();

        // this.props.navigator.push({ // i believe this is only possuble by wrapping in NavigatorIOS
        //     title: 'Select Photo',
        //     component: SelectPhoto,
        //     passProps: {searchWord: this.state.searchWord} // i think state vars dont get passed through nav push
        // });

    }

    searchWordInput(event) {
        this.setState({ searchWord: event.nativeEvent.text });
    }




}

module.exports = SearchWord;