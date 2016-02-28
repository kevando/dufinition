import React, { Component, StyleSheet, TextInput, TouchableHighlight, View, Text  } from 'react-native';

// lets make this a redux compontent
import { bindActionCreators } from 'redux';
import * as dufineActions from '../actions/dufineActions'
import {connect } from 'react-redux';

import WordInput from './WordInput';
import DufinePhoto from './AddPhotoButton';
import DufineWord from '../components/DufineWord';
import DufineDefinitions from '../components/DufineDefinitions';
import DownloadButton from './DownloadButton';
import * as styles from '../style/styles.js';


class DufineView extends Component {
  constructor(props) {
    super(props);

    const { actions, data } = this.props;
    // todo clear active duine in a different spot, this is terrible todo
    if(data != null)
      actions.setActiveDufine(data)
    else
      actions.setActiveDufine(null)

  }
  render() {
    // this renders twice. should probly fix that todo
    // pretty sure its cause of the conditional in the constructor

    const { state } = this.props;
    // console.log('DufineView render state',state);
    // todo create this as a button compotnent

    // And then this whole mess of code should get refactored todo
    return (
      <View style={styles.dufineViewWrapper}>
        <View style={styles.dufineViewContainer} ref="dufine">
          <View style={styles.dufineViewDufineContainer}>
            {( state.ui.dufine == null
              ? <WordInput />
              : <DufineWord definition={ state.ui.dufine.definition } />
            )}
            <View>
              <DufinePhoto dufine={state.ui.dufine} />
            </View>
          </View>
          <DufineDefinitions dufine={state.ui.dufine}/>
        </View>
        <View style={styles.dufineViewDownloadContainer}>
        {( state.ui.dufine != null
          ? <DownloadButton dufine={state.ui.dufine} refs={this.refs}/>
          : void 0
        )}

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
)(DufineView);
