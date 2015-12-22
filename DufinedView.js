'use strict';

var React = require('react-native');
var styles = require('./Styles');

var reactNativeStore = require('react-native-store');


var {
    NavigatorIOS,
    Component,
    View,
    Text,
    TouchableWithoutFeedback,
    TouchableHighlight,
    AlertIOS,
    } = React;


class DufinedView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            definition: this.props.definition
        }
    }
    _handleChangePage() {

        // this.props.toggleNavBar();
        this.props.navigator.popToTop();
    }



    goBack(){
        this.props.navigator.popToTop();
    }

    confirmDelete() {
        AlertIOS.alert(
            'Delete Definition',
            'Are you sure?',
            [
              {text: 'Yes', onPress: () =>  this.deleteDefinition()},
              {text: 'No', onPress: () => console.log('User cancelled deletion')},
            ]
        );
    }
    async deleteDefinition(){
        console.log('delete this bitch')
        var dufineModel = await reactNativeStore.model("dufine_v2");
        var remove_data = await dufineModel.remove({
            searchWord: this.state.definition.searchWord
        });
        console.log('remove_data');
        this.props.navigator.pop();
        // console.log('return');
    }
    exportDefinition(){

    }

    render() {
        return (
            <View style={styles.container}>
                <View ref="definition">
                    <View style={styles.dufTop}>
                        <View style={styles.avatarContainer}>
                        </View>
                        <View style={styles.dufinitionText}>
                            <Text style={styles.georgia}>{this.state.definition.word}</Text>
                        </View>
                        
                    </View>
                    
                </View>
                
                <TouchableHighlight style={styles.button}
                                    underlayColor='red'
                                    onPress={this.confirmDelete.bind(this)}>
                    <Text style={styles.buttonText}>delete this</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button}
                                    underlayColor='#f1c40f'
                                    onPress={this.exportDefinition.bind(this)}>
                    <Text style={styles.buttonText}>save this</Text>
                </TouchableHighlight>
            </View>
        );
    }

}

module.exports = DufinedView;