'use strict';

var React = require('react-native');
var reactNativeStore = require('react-native-store');
var styles = require('./Styles');


var WelcomeView = require('./Welcome');
var DufinedList = require('./DufinedList');
var DufinedPreview = require('./DufinedPreview');
var Settings = require('./Settings');

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


class Dufine extends React.Component {

    constructor(props){
        
        console.log('i should roll out first bitches')
        super(props);
        this.state = {
            kevin: 'kevo',

        };
        
        console.log('i im not second bitches are gonna get shot')
        console.log(this.state.hasData)
        

    }

    componentDidMount(){
        console.log('component did mout');
        this._getData();
        
        
    }


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
                        [{text: 'Okay', onPress: () => this.onRightButtonPress()},]
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
        //this.state.kevin = 'kevooo'
        AlertIOS.prompt(  
            'Pick a word', '',  
            [
                {text: 'Cancel', onPress: () => this.onPressCancel()},
                {text: 'Next', onPress: (word) => this.onPressSubmit(word)}, 
            ]
        )
    }

   
    onLeftButtonPress() { 
        this.refs.nav.push({
            title: 'Settings',
            component: Settings,
            passProps: {  },
        });
    }

    async _getData(){
        console.log('imma get some data bitches');
        try {
            var dufineModel = await reactNativeStore.model("dufine_v3.1");
            var find_data = await dufineModel.find();
            console.log(find_data.length)
            if (find_data.length > 0){
                console.log('found dat data')
                this.setState({
                    hasData: true
                });
            } else {
                console.log('no data found.. suck it')
                this.setState({
                    hasData: false
                });
            }
        } catch(error){

        }
    }

    render() {
        console.log('render')
        var activeRoute;
        console.log(this.state.hasData)
        if(this.state.hasData){
        //if(false){
            console.log('imma gun run')
            activeRoute = {
                component: DufinedList,
                title: 'Saved Dufiness',
                passProps: { toggleNavBar: this.toggleNavBar.bind(this), },
                rightButtonTitle: 'add',
                onRightButtonPress: this.onRightButtonPress.bind(this),
                leftButtonTitle: 'settings',
                onLeftButtonPress: this.onLeftButtonPress.bind(this),
            }
        } else {
            console.log('imma gun run YOOOO nigga')
            activeRoute = {
                component: WelcomeView,
                title: 'Tutoriaal',
                // passProps: { toggleNavBar: this.toggleNavBar.bind(this), },
                // rightButtonTitle: 'add',
                // onRightButtonPress: this.onRightButtonPress.bind(this),
                // leftButtonTitle: 'settings',
                // onLeftButtonPress: this.onLeftButtonPress.bind(this),
            }
        }


        return (
            <NavigatorIOS
                ref="nav"
                itemWrapperStyle={styles.navWrap}
                style={styles.nav}
                initialRoute={activeRoute} />
            
            
        );
    }
}


AppRegistry.registerComponent('Dufine', () => Dufine);