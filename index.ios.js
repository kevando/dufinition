'use strict';

var React = require('react-native');
var styles = require('./Styles');

var WelcomeView = require('./Welcome');
//var SecondPage = require('./SecondPage');

var {
    AppRegistry,
    TabBarIOS,
    Component,
    Navigator,
    NavigatorIOS
   } = React;


class Dufine extends Component {

    constructor(props) { // I think this is instead of getintiialstate
        super(props);
        this.state = {
            navigationBarHidden: false
        };
    }

    // getInitialState() { // so i think this is not used
    //     return {
    //         navigationBarHidden: false
    //     };
    // }

    toggleNavBar() {
        this.setState({navigationBarHidden: !this.state.navigationBarHidden});
    }

    render() {
        return (
            <NavigatorIOS
                ref="nav"
                itemWrapperStyle={styles.navWrap}
                style={styles.nav}
                navigationBarHidden={this.state.navigationBarHidden}
                initialRoute={{
                    component: WelcomeView,
                    title: 'Hello',
                    passProps: { toggleNavBar: this.toggleNavBar.bind(this), },
      
                }} />
            
            
        );
    }
}


AppRegistry.registerComponent('Dufine', () => Dufine);