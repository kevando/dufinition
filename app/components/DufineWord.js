import React, { Component, StyleSheet, Text, TouchableHighlight, Image, View, PropTypes } from 'react-native';
import * as styles from '../style/styles.js';
var capitalize = require('capitalize');

// This needs a much better name
class DufineWord extends Component {

  render() {
    const { definition } = this.props;

    return (
      <View style={styles.dufineViewWordContainer}>
        <Text style={styles.dufineViewWord}>{capitalize(definition.word)}</Text>
        <Text style={styles.dufineViewPronunciation}>| {definition.pronunciation} |</Text>
        <Text style={styles.dufineViewPartOfSpeech}>{definition.results[0].partOfSpeech}</Text>
      </View>
    );
  }
}

const propTypes = {
  word: PropTypes.string,
};

DufineWord.propTypes = propTypes;

export default DufineWord;
