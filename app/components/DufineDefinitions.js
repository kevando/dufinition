


import React, { Component, StyleSheet, Text, View, PropTypes } from 'react-native';


// This needs a much better name
class DufineDefinitions extends Component {
  constructor(props) {
    super(props);
    // dont think i need this
  }

  renderDefinitions(){
    const { definition } = this.props.dufine;
    // console.log('DufineBig',this.props)
    Definitions = definition.results.map((result,index) => {
      // adding key to stop the react-native child array error. probly dont want to use word cause it could be dup
      return (
          <Text style={styles.definitionText}><Text style={styles.definitionCount}>{++index}</Text> {result.definition}</Text>
      );
    });

    return Definitions;
  }

  render() {
    const { dufine } = this.props;
    if(dufine != null){

      return (
        <View>
          {this.renderDefinitions()}
        </View>
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

const styles = StyleSheet.create({

  definitionText: {
    fontWeight: '300',
    fontSize: 14,
    fontFamily: 'Georgia'
  },
  definitionCount: {
    fontWeight: '600',
    fontSize: 16,
    fontFamily: 'Georgia'
  }
});

export default DufineDefinitions;
