import React, { Component, StyleSheet, TextInput, TouchableHighlight, View, Text  } from 'react-native';

// lets make this a redux compontent
import { bindActionCreators } from 'redux';
import * as dufineActions from '../actions/dufineActions'
import {connect } from 'react-redux';

import WordInput from './WordInput';
import DufineView from './DufineView';
import DufineWord from '../components/DufineWord';
import DufineDefinitions from '../components/DufineDefinitions';
import DownloadButton from './DownloadButton';
import * as styles from '../style/styles.js';


class Welcome extends Component {
  constructor(props) {
    super(props);
    this.onButtonPress = this.onButtonPress.bind(this);
    console.log('welcom props',this.props)
  }
  onButtonPress() {
    const { ui } = this.props.state;
    console.log('ui',ui)
    // probly not good to clear the flag before user completes first dufine, but it works
    // this.props.reset();
    this.props.toRoute({
      name: ui.word,
      data: ui.dufine,
      component: DufineView,

    });

  }

  render() {
    // console.log(this.props)
    return(
      <View style={styles.welcomeContainer}>
        <Text>Who would you find if you looked up idiot in the dictionary?</Text>
        <TouchableHighlight style={styles.button} onPress={this.onButtonPress}>
          <Text>Select a photo</Text>
        </TouchableHighlight>


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
)(Welcome);
