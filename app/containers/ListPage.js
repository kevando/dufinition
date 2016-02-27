import React, { Component, StyleSheet, ScrollView, PropTypes } from 'react-native';

import DufineListItem from '../components/DufineListItem'; //
import DufineView from './DufineView'; //
import TrashCan from './TrashCan'

// From the tweet app, this was a component, changing this to a container now so it has access to redux
// at least i think thats how it works. here is the redux connection code
import { bindActionCreators } from 'redux';
import * as dufineActions from '../actions/dufineActions'; // not sure that i need this
import { connect } from 'react-redux';

import * as styles from '../style/styles.js';

const propTypes = {
  toRoute: PropTypes.func.isRequired,
};


class ListPage extends Component {
  constructor(props) {
    super(props);
    this.goToDufine = this.goToDufine.bind(this);
    this.clearActiveDufine = this.clearActiveDufine.bind(this);
  }

  // I wonder if this should be an action
  goToDufine(dufineData) {
    // i dont know if its the best approach to send in the data object for every single function call
    // console.log('goToDufine',dufineData)
    this.props.actions.setActiveDufine(dufineData);

    const { state } = this.props; // redux state

    this.props.toRoute({
      name: dufineData.word,
      component: DufineView,
      data: dufineData,
      // customAction: this.props.toBack,
      rightCorner: TrashCan,
    });
  }

  clearActiveDufine(){
    // Before going to search we need to clear the active state
    // and this is my solution
    const { state, actions } = this.props; // redux state
    var activeDufine = state.ui.dufine
    // console.log('STATE from clearduf',state.ui.activeDufine)
    // console.log(activeDufine)
    if(activeDufine != null){
      console.log('CELAR SADF');
      actions.clearActiveDufine();
    }
  }

  render() {
    //console.log('this.props',this.props); // these props include route data, as well as action and state data from redux
    const { state } = this.props; // redux state
    // console.log('STATE from render',state)

    // this.clearActiveDufine(); // i dont really like thius but whatever
    // Dufines is a list of dufine objects. probly want to create a schema for that data somewhere.
    //This is getting pulled from the redux state
    const Dufines = state.dufines.map((dufineData) => {
      // test var dufineData = state.dufines[0];
      // adding key to stop the react-native child array error. probly dont want to use word cause it could be dup
      return <DufineListItem {...dufineData} onPress={this.goToRoute} goToDufine={this.goToDufine} key={dufineData.word }/>;
    });

    return (
      <ScrollView style={styles.container}>
        {Dufines}
      </ScrollView>
    );
  }
}

ListPage.propTypes = propTypes;

// export default ListPage;
// I do not understand any of this..
export default connect(state => ({
  state: state.dufine // this grabs information from the reducer.
}),
(dispatch) => ({
  actions: bindActionCreators(dufineActions, dispatch)
})
)(ListPage);
