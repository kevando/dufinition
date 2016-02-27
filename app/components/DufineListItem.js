import React, { Component,StyleSheet, Text, TouchableHighlight, Image, View, PropTypes } from 'react-native';
import * as styles from '../style/styles.js';
var capitalize = require('capitalize')
class Dufine extends Component {
  constructor(props) {
    super(props);
    this.goToDufine = this.goToDufine.bind(this);
  }

  goToDufine() {
    this.props.goToDufine(this.props);
  }

  render() {
    const { definition, word} = this.props;

    return (
      <TouchableHighlight underlayColor="transparent" onPress={this.goToDufine}>
        <View style={styles.dufineListItemContainer}>
          <View style={styles.dufineListItemRight}>
              <Text style={styles.dufineListItemWord}>{capitalize(definition.word)}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const propTypes = {
  goToDufine: PropTypes.func.isRequired,
  text: PropTypes.string,
  user: PropTypes.object,
};



Dufine.propTypes = propTypes;


export default Dufine;
