'use strict';

var React = require('react-native');
var Featured = require('./Featured');
var Search = require('./Search');
var Photo = require('./Photo');

var {
    AppRegistry,
    TabBarIOS,
    Component
   } = React;

class BookSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            avatarSource: null
        };
    }

    render() {
        return (
            <TabBarIOS selectedTab={this.state.selectedTab}>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'featured'}
                    icon={{uri:'featured'}}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'featured'
                        });
                    }}>
                    <Featured/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'search'}
                    icon={{uri:'search'}}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'search'
                        });
                    }}>
                    <Search/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    selected={this.state.selectedTab === 'photo'}
                    icon={{uri:'more'}}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'photo'
                        });
                    }}>
                    <Photo/>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}


AppRegistry.registerComponent('BookSearch', () => BookSearch);