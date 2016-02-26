import React, { Component, StyleSheet, TextInput, TouchableHighlight, View, Text  } from 'react-native';

// lets make this a redux compontent
import { bindActionCreators } from 'redux';
import * as dufineActions from '../actions/dufineActions'
import {connect } from 'react-redux';

// this container should get renamed
// and it should pull very heavily from components that it will share with the dufineBig which should change names as well
import WordInput from './WordInput';
import AddPhotoButton from './AddPhotoButton';
import DufineWord from '../components/DufineWord';
import DufinePhoto from '../components/DufinePhoto';


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
    console.log('data',data)
    if(data != null)
      actions.setActiveDufine(data)

  }

  // button should be its own Component and addWord should be an action

  render() {

    // let addWord be the action


    const { ui } = this.props.state;

    console.log('SearchPage ui',ui)
    // console.log(increment)

    // todo create this as a button compotnent
    return (
      <View>
      <View style={styles.topContainer}>

        <View style={styles.wordContainer}>
        {( ui.activeDufine == null
          ? <WordInput />
          : <DufineWord definition={ ui.activeDufine.definition } />
        )}
        </View>

        <View>
        {( ui.activeDufine != null
          ? <DufinePhoto photo={ui.activeDufine.photo} />
          : void 0
        )}
        </View>
        <View>
        {( ui.photo == false
          ? <DufinePhoto photo={ui.photo} />
          : void 0
        )}
        </View>
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
