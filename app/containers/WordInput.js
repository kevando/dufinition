import React, { Component, StyleSheet, TextInput, TouchableHighlight, View, Text  } from 'react-native';

// lets make this a redux compontent
import { bindActionCreators } from 'redux';
import * as dufineActions from '../actions/dufineActions'
import {connect } from 'react-redux';
import * as styles from '../style/styles.js';
import DufineView from './DufineView'; //
// this container should get renamed
// and it should pull very heavily from components that it will share with the dufineBig which should change names as well

class WordInput extends Component {

  constructor(props) {
    super(props); //
    this.state = { term: '' ,responseText: ''} // maybe set this to the ui state?

    this.onInputChange = this.onInputChange.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onInputChange(event) {
    this.setState({
      term:event.nativeEvent.text
    });
    this.checkIfWordExists = this.checkIfWordExists.bind(this);
  }
  checkIfWordExists(dufines){ // bad function refactor todo
    var Exists = false;
    dufines.map((dufine) => {
      if(this.state.term.toLowerCase() == dufine.word)
        Exists = true;
    });
    return Exists;
  }
  async onButtonPress() {
    // grab action that will pull definition from wordsapi
    const { getDefinition, setDefinition } = this.props.actions;
    if(this.state.term ==''){
      this.setState({responseText:'Please enter a word'});
      return;
    }
    // Check if word already exists
    if(this.checkIfWordExists(this.props.state.dufines)){
      this.setState({responseText:'You already dufined this word'});
      return;
    }

    //
    //
    // this should totally be in the action but i cannot figure out how to get the promise to works
    // not sure how to do this yet
    //
    const API_KEY = 'i5OFV6PQGkmsh1HhWu7b9c76bNodp1Df8DmjsnKzsbV0G6Ke9r';
    const word = this.state.term;
    const REQUEST_URL = `https://wordsapiv1.p.mashape.com/words/${word}`;
    try {
      let response = await fetch(REQUEST_URL,{
        headers: {'Accept': 'application/json','Content-Type': 'application/json', 'X-Mashape-Key': API_KEY},
      }).then((response) => response.json()); // format response to json
      // console.log('response',response)
      setDefinition(response);
      this.props.onWordSubmit(word);
    } catch(error) {
      // console.log('error',error);
      this.setState({responseText: 'Some error, likely word was not found'})
      throw error;
    }

  }

  render() {
    const { ui } = this.props.state;
    return (
      <View style={styles.dufineInputWrapper}>
        <View style={styles.dufineInputContainer}>
        <View style={styles.dufineInput}>
          <TextInput style={styles.input} value={this.state.term} onChange={this.onInputChange} />
        </View>
        <View style={styles.dufineInputButton}>
          <TouchableHighlight onPress={this.onButtonPress} style={styles.button} >
            <Text>Next</Text>
          </TouchableHighlight>
        </View>

      </View>
      <View style={styles.inputErrorContainer}><Text style={styles.error}>{this.state.responseText}</Text></View>
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
)(WordInput);
