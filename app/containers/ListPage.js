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

const GoogleAnalytics = require('react-native-google-analytics-bridge');

class ListPage extends Component {
  constructor(props) {
    super(props);
    this.goToDufine = this.goToDufine.bind(this);
    this.clearActiveDufine = this.clearActiveDufine.bind(this);
  }

  // I wonder if this should be an action
  goToDufine(dufineData) {
    GoogleAnalytics.trackEvent('Dufine','Viewed', { label: dufineData.word } );
    const { state } = this.props; // redux state
    this.props.toRoute({
      name: dufineData.word,
      component: DufineView,
      data: dufineData,
      rightCorner: TrashCan,
    });
  }

  clearActiveDufine(){
    // Before going to search we need to clear the active state
    // and this is my solution
    const { state, actions } = this.props; // redux state
    var activeDufine = state.ui.dufine
    if(activeDufine != null){
      actions.clearActiveDufine();
    }
  }

  render() {
    GoogleAnalytics.trackScreenView('ListPage');
    const { state } = this.props; // redux state

    // this.clearActiveDufine(); // i dont really like thius but whatever
    // Dufines is a list of dufine objects. probly want to create a schema for that data somewhere.
    //This is getting pulled from the redux state
    var sortedDufines = state.dufines; // dont modify state
    sortedDufines.sort(function(a, b) {
      var textA = a.word.toUpperCase();
      var textB = b.word.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    const Dufines = sortedDufines.map((dufineData) => {
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
