import React, { Component, StyleSheet, TextInput, TouchableHighlight, View, Text  } from 'react-native';

// lets make this a redux compontent
import { bindActionCreators } from 'redux';
import * as dufineActions from '../actions/dufineActions'
import {connect } from 'react-redux';

// this container should get renamed
// and it should pull very heavily from components that it will share with the dufineBig which should change names as well

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#9f88bf',
    width: 220,
    height: 32,
    marginTop: 6,
    padding: 10,
    color: 'white',
    borderRadius: 4,
  },
});




// break this into a seperate file

class AddPhotoButton extends Component {

  constructor(props) {
    super(props); //
    this.onBackButtonPress = this.onBackButtonPress.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);
  }
  onButtonPress() {
    // grab action that will pull definition from wordsapi
    const { getDefinition } = this.props.actions;
    getDefinition(this.state.term);
    this.setState({term:''});

    // I am not sure if this is the best place for this

  }
  // this, along with the touchable highlight should be its own container i think
  onBackButtonPress() {
    console.log(this.props.actions)
    // grab action that will pull definition from wordsapi
    const { clearWord } = this.props.actions;
    clearWord();
    // I am not sure if this is the best place for this

  }

  render() {
    return (
      <View>
      <View>
        <TouchableHighlight onPress={this.onBackButtonPress} >
          <Text style={styles.button}>Change Word</Text>
        </TouchableHighlight>
      </View>
        <View>
          <TouchableHighlight onPress={this.onButtonPress} >
            <Text style={styles.button}>Add Photo</Text>
          </TouchableHighlight>
        </View>
        </View>
    );
  }

}


// proptypes?

export default connect(state =>({
  state: state.dufine // i think this grabs info from the reducer. which tells this compotnent whether to re-render or not
}),
(dispatch) => ({
  actions: bindActionCreators(dufineActions, dispatch)
})
)(AddPhotoButton);
