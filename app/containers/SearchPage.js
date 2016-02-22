import React, { Component, StyleSheet, TextInput, TouchableHighlight, View, Text  } from 'react-native';

// lets make this a redux compontent
import { bindActionCreators } from 'redux';
import * as dufineActions from '../actions/dufineActions'
import {connect } from 'react-redux';

class SearchPage extends Component {
  constructor(props) {
    super(props); //
    this.state = { term: '' }

    this.onInputChange = this.onInputChange.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);

    this.styles = StyleSheet.create({
      input: {
        backgroundColor: '#3f88bf',
        width: 220,
        height: 32,
        marginTop: 6,
        paddingLeft: 10,
        color: 'white',
        borderRadius: 4,
      },
    });
  }

  onInputChange(event) {
    this.setState({
      term:event.nativeEvent.text
    })
  }
  onButtonPress() {
    // action i guess
    this.props.actions.addWord(this.state.term);

    this.setState({
      term:'' // clear input form
    })

  }

  // button should be its own Component and addWord should be an action

  render() {

    // let addWord be the action

    const { addWord, increment } = this.props.actions;

    // console.log(addWord)
    // console.log(increment)

    // todo create this as a button compotnent
    return (
      <View>
      <View>
      <TextInput style={this.styles.input} value={this.state.term} onChange={this.onInputChange} />
      </View>
      <View>
      <TouchableHighlight onPress={this.onButtonPress} >
        <Text>submit</Text>
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
)(SearchPage);
