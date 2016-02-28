import React, { Component, StyleSheet, Text, View, PropTypes } from 'react-native';
import * as styles from '../style/styles.js';

// This needs a much better name
class DufineDefinitions extends Component {

  renderDefinitions(){
    const { definition } = this.props.dufine;
    var definitionsCharacterLenth = 0;
    var Definitions = definition.results.map((result,index) => {
      // adding key to stop the react-native child array error. probly dont want to use word cause it could be dup
      index++;
      definitionsCharacterLenth += result.definition.length;
      return (' '+index+') '+result.definition);
    });
    return <Text style={ [ styles.dufineViewDefinitionText, this.setFontSize(definitionsCharacterLenth) ] }>{Definitions}</Text>
  }

  setFontSize(definitionsCharacterLenth) {
    // Would love to find a calculation that works here.
    var fontSize = 14;
    if(definitionsCharacterLenth < 200)
      fontSize = 20;
    if(definitionsCharacterLenth < 50)
      fontSize = 25;
    return {
      fontSize:fontSize
    }
  }

  render() {
    const { dufine } = this.props;
    if(dufine != null){
      return (
        <View style={ styles.dufineViewDefinitionsContainer }>{this.renderDefinitions()}</View>
      );
    } else {
      return(<View></View>);
    }
  }
}

const propTypes = {
  word: PropTypes.string,
};

DufineDefinitions.propTypes = propTypes;

export default DufineDefinitions;
