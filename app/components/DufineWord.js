


import React, { Component, StyleSheet, Text, TouchableHighlight, Image, View, PropTypes } from 'react-native';


// This needs a much better name
class DufineWord extends Component {
  constructor(props) {
    super(props);
    // dont think i need this
  }


  render() {
    const { definition } = this.props;

    return (
      <View>
        <Text style={styles.word}>{definition.word}</Text>
        <Text style={styles.pronunciation}>| {definition.pronunciation} |</Text>
        <Text style={styles.partOfSpeech}>{definition.results[0].partOfSpeech}</Text>
      </View>
    );
  }

}

const propTypes = {
  word: PropTypes.string,

};

DufineWord.propTypes = propTypes;

const styles = StyleSheet.create({

  rtBold: {
    fontSize: 14,
    marginRight: 3,
    fontWeight: '600',
  },
  rtText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#748999',
    flexWrap: 'wrap',
    alignSelf: 'stretch'

  },

  pronunciation: {
    fontSize: 16,
    color: '#8999a5',
    marginTop: 10,
    marginBottom: 10,
  },
  word: {
    fontWeight: '600',
    fontSize: 25,
    fontFamily: 'Georgia'
  },
  partOfSpeech: {
    fontWeight: '600',
    fontSize: 20,
    fontFamily: 'Georgia',
  },
});

export default DufineWord;
