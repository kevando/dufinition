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


class SearchPage extends Component {
  constructor(props) {
    super(props);

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
        <View>

        {( ui.definition == null
          ? <WordInput />
          : <DufineWord definition={ ui.definition } />
        )}

        </View>


        <View>
        {( ui.definition != null
          ? <AddPhotoButton />
          : void 0
        )}
        </View>
        <View>
        {( ui.photo != null
          ? <DufinePhoto photo={ui.photo} />
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
)(SearchPage);
