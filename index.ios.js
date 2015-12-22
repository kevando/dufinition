'use strict';

var React = require('react-native');
var reactNativeStore = require('react-native-store');
var styles = require('./Styles');

var WelcomeView = require('./Welcome');
var DufinedList = require('./DufinedList');
var DufinedPreview = require('./DufinedPreview');

var {
    AppRegistry,
    TabBarIOS,
    Component,
    Navigator,
    NavigatorIOS,
    AlertIOS,
    View,
    Text
   } = React;


class Dufine extends Component {


    toggleNavBar() {
        this.setState({navigationBarHidden: !this.state.navigationBarHidden});
    }

    onPressCancel(text) {
        console.log('cancel')
    }

    onPressSubmit(word) {
        console.log('submitted '+word);
        // Validate there is something typed in
        // and it has a definition
        
        // This  function should not include the redirect code, but it does for now
        this.getWordDefinition(word);


        // this.refs.nav.push({
        //     title: 'Preview',
        //     component: DufinedPreview,
        //     passProps: { definition: definition },
        // });
    }
    getWordDefinition(word) {
        // Set loading state while it queries this api
        var baseURL = 'http://api.wordnik.com/v4/word.json/'+word.toLowerCase()+'/definitions?limit=1&includeRelated=false&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
        this.setState({isLoading: true});
        fetch(baseURL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({ isLoading: false, errorMessage: ''});
                console.log(responseData);
                if (responseData.length > 0) {
                    console.log(responseData[0]);
                    this.refs.nav.push({
                        title: 'Preview',
                        component: DufinedPreview,
                        passProps: { definition: responseData[0] },
                    });
                } else {
                    //this.setState({ errorMessage: 'No results found'});
                    AlertIOS.alert(
                        word + ' is not a word', '',
                        [{text: 'Okay', onPress: () => console.log('User cancelled deltion')},]
                    );
                }
            })
            .catch(error =>
                this.setState({
                    isLoading: false,
                    errorMessage: error
                }))
            .done();

    }

    onRightButtonPress() { 
        AlertIOS.prompt(  
            'Pick a word', '',  
            [
                {text: 'Cancel', onPress: () => this.onPressCancel()},
                {text: 'Next', onPress: (word) => this.onPressSubmit(word)}, 
            ]
        )
    }

   
    onLeftButtonPress() { 
        console.log('settings page');
    }


    render() {
        return (
            <NavigatorIOS
                ref="nav"
                itemWrapperStyle={styles.navWrap}
                style={styles.nav}
                initialRoute={{
                    component: DufinedList,
                    title: 'Dufined',
                    passProps: { toggleNavBar: this.toggleNavBar.bind(this), },
                    rightButtonTitle: 'add',
                    onRightButtonPress: this.onRightButtonPress.bind(this),
                    leftButtonTitle: 'settings',
                    onLeftButtonPress: this.onLeftButtonPress.bind(this),
                    
      
                }} />
            
            
        );
    }
}


AppRegistry.registerComponent('Dufine', () => Dufine);