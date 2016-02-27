import React, { Component, StyleSheet, TextInput, TouchableHighlight, View, Text  } from 'react-native';

// lets make this a redux compontent
import { bindActionCreators } from 'redux';
import * as dufineActions from '../actions/dufineActions'
import {connect } from 'react-redux';

// this container should get renamed
// and it should pull very heavily from components that it will share with the dufineBig which should change names as well
import WordInput from './WordInput';
import DufinePhoto from './AddPhotoButton';
import DufineWord from '../components/DufineWord';
import DufineDefinitions from '../components/DufineDefinitions';
// import DufinePhoto from '../components/DufinePhoto';


const styles = StyleSheet.create({
  topContainer: { //
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff'
  },
  wordContainer: { //
    flex: 1,
    padding: 10,
    marginLeft:10,
  },
})

class DufineView extends Component {
  constructor(props) {
    super(props);

    const { actions, data } = this.props;
    // console.log('DufineView constructor data',data)
    if(data != null)
      actions.setActiveDufine(data)
    else
      actions.setActiveDufine(null)

  }
  render() {
    // this renders twice. should probly fix that todo

    const { state } = this.props;
    // console.log('DufineView render state',state);
    // todo create this as a button compotnent
    return (
      <View>
        <View style={styles.topContainer}>

          <View style={styles.wordContainer}>
          {( state.ui.dufine == null
            ? <WordInput />
            : <DufineWord definition={ state.ui.dufine.definition } />
          )}
          </View>

          <View>
            <DufinePhoto dufine={state.ui.dufine} />
          </View>
        </View>
        <DufineDefinitions dufine={state.ui.dufine}/>
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
