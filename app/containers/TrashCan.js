import React, { Component, StyleSheet, AlertIOS, TouchableHighlight, Text } from 'react-native';
var Icon = require('react-native-vector-icons/FontAwesome'); // not sure how to write this otherwise
import {bindActionCreators} from 'redux';
import * as DufineActions from '../actions/dufineActions';
import { connect } from 'react-redux';


const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
    marginTop: 0,
    marginRight: 8,
  },
});


class TrashCan extends Component {
  constructor(props) {
    super(props);
    this.onDeletePress = this.onDeletePress.bind(this);
    this.deleteDufineConfirm = this.deleteDufineConfirm.bind(this);


  }

  deleteDufineConfirm() {
    const { deleteDufine } = this.props.actions;
    deleteDufine()

    // todo take user back to list
  }

  onDeletePress() {
    // this.props.toBack(); // how the fuck to get this to work

    AlertIOS.alert(
      'You sure bro?', 'this delete is for keeps',
      [{text: 'Yes', onPress: this.deleteDufineConfirm},
      {text: 'No', onPress: ()=> console.log('dont deleteeeee')}]
    )
    // deleteDufine();
  }

  render() {
    console.log('TrashCan',this.props)
    return (
      <TouchableHighlight underlayColor="transparent" onPress={this.onDeletePress}>
        <Icon style={styles.icon} name="trash-o" size={25} color="#fff" />
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
