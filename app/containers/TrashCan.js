import React, { Component, StyleSheet, AlertIOS, TouchableHighlight, Text } from 'react-native';

import {bindActionCreators} from 'redux';
import * as DufineActions from '../actions/dufineActions';
import { connect } from 'react-redux';

class TrashCan extends Component {
  constructor(props) {
    super(props);
    this.onDeletePress = this.onDeletePress.bind(this);
    this.deleteDufineConfirm = this.deleteDufineConfirm.bind(this);

    this.styles = StyleSheet.create({
      icon: {
        width: 21,
        height: 21,
        marginTop: 4,
        marginRight: 15,
      },
    });
  }

  deleteDufineConfirm() {
    const { deleteDufine } = this.props.actions;
    deleteDufine()

    // todo take user back to list
  }

  onDeletePress() {


    AlertIOS.alert(
      'You sure bro?', 'this delete is for keeps',
      [{text: 'Yes', onPress: this.deleteDufineConfirm},
      {text: 'No', onPress: ()=> console.log('dont deleteeeee')}]
    )
    // deleteDufine();
  }

  render() {
    return (
      <TouchableHighlight underlayColor="transparent" onPress={this.onDeletePress}>
        <Text>Delete</Text>
      </TouchableHighlight>
    );
  }
}


// getting a better handle on This
export default connect(state => ({
  state: state.counter
}),
(dispatch) => ({
  actions: bindActionCreators(DufineActions, dispatch)
})
)(TrashCan);
