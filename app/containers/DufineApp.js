'use strict'; // not sure why

// Trying this router to see how it works
import Router from 'react-native-simple-router';
import React, { Component, View, Styles, Text, StyleSheet } from 'react-native'; // need View in order to stack the Header with DufineApp
import { bindActionCreators } from 'redux';


// calls from the twitter approach
import ListPage from '../containers/ListPage'; //
import BackButton from '../components/BackButton'; //
import SearchAndCompose from '../components/icons/SearchAndCompose';
import GetSettings from '../components/icons/GetSettings';

import * as dufineActions from '../actions/dufineActions';
import { connect } from 'react-redux';


const firstRoute = {
  name: 'Home',
  component: ListPage,
  leftCorner: GetSettings,
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#5cafec',
  },
});

class DufineApp extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    // i guess this app got sent props consisting of state and actions
    // from where tho?
		// const { state, actions } = this.props;

    return (

      <Router
        firstRoute={firstRoute}
        headerStyle={styles.header}
        backButtonComponent={BackButton}
        rightCorner={SearchAndCompose}
      />

    );
    // I guess {...actions} pulls in all the actions
  }
  render_non_navigator() {
    // i guess this app got sent props consisting of state and actions
    // from where tho?
    const { state, actions } = this.props;
    return (
      <View>
        <Header title={state.activeComponent} />
        <DufineList
          dufineList={state.dufineList}
          {...actions} />

      </View>

    );

  }

}

// I do not understand any of this..
export default connect(state => ({
  state: state.counter // what is this? do i need to add other state data here?
}),
(dispatch) => ({
  actions: bindActionCreators(dufineActions, dispatch)
})
)(DufineApp);
