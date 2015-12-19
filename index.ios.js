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



    // getInitialState() { // so i think this is not used
    //     return {
    //         navigationBarHidden: false
    //     };
    // }

    toggleNavBar() {
        this.setState({navigationBarHidden: !this.state.navigationBarHidden});
    }

    onPressCancel(text) {
        console.log('cancel')
    }
    onPressSubmit(text) {
        console.log('submitted '+text);
        // Validate there is something typed in

        this.refs.nav.push({
            title: 'Preview',
            component: DufinedPreview,
            passProps: { word: text },
            
        });

        

        //this.saveData();
    }

    onRightButtonPress() { 
        
        AlertIOS.prompt(  
            'Enter a word', '',  
            [
                {text: 'Submit', onPress: (text) => this.onPressSubmit(text)}, 
                {text: 'Cancel', onPress: (text) => this.onPressCancel()}
            ]
        )
    }

    async saveData(){
        console.log('saving data');
        var dufineModel = await reactNativeStore.model("dufine_v2");
        var add_data = await dufineModel.add({
            searchWord: 'asdfa',
            //photo: this.state.photo,
            //definition: this.state.definition
        });
        
        AlertIOS.alert(
            'Dufine Saved!',
            'Nice job.'
          )
        // Figure out how to direct user to a new component
        //this.props.navigator.popToTop();
        

    }
    onLeftButtonPress() { 
        // this.props.toggleNavBar();
        this.props.navigator.push({
            title: 'List of Definitions',
            component: DufinedList,
            passProps: {
                // toggleNavBar: this.props.toggleNavBar.bind(this),
            },
            leftButtonTitle: ' ',
        });
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
                    
      
                }} />
            
            
        );
    }
}


AppRegistry.registerComponent('Dufine', () => Dufine);