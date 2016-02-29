'use strict'; // not sure why

// Trying this router to see how it works
import Router from 'react-native-simple-router';
import React, { Component, Navigator, View, Styles, Text, StyleSheet } from 'react-native'; // need View in order to stack the Header with DufineApp
import { bindActionCreators } from 'redux';


// calls from the twitter approach
import ListPage from '../containers/ListPage'; //
import Welcome from './Welcome';
import BackButton from '../components/BackButton'; //
import SearchAndCompose from '../components/icons/SearchAndCompose';
import GetSettings from '../components/icons/GetSettings';
import AppSettings from '../components/AppSettings'

import * as dufineActions from '../actions/dufineActions';
import { connect } from 'react-redux';

import * as styles from '../style/styles.js';
const GoogleAnalytics = require('react-native-google-analytics-bridge');
GoogleAnalytics.setDryRun(false);

const listRoute = {
  name: 'Home',
  component: ListPage,
  leftCorner: GetSettings,
  rightCorner: SearchAndCompose
};
const welcomeRoute = {
  name: 'Welcome',
  // component: AppSettings,
  component: Welcome,
  // rightCorner: return(<View></View>);,
};


class DufineApp extends Component {
  constructor(props) {
    super(props);
    this.getFirstRoute = this.getFirstRoute.bind(this);
  }

  getFirstRoute(){
    if(this.props.state.showWelcome)
      return welcomeRoute;
    else
      return listRoute;
  }
  render() {
    GoogleAnalytics.trackEvent('App','Loaded');
    return (
      <Router
        firstRoute={listRoute}
        headerStyle={styles.header}
        backButtonComponent={BackButton}

      />
    );
  }

}

// I do not understand any of this..
export default connect(state => ({
  state: state.dufine // Grabs data from the reducer
}),
(dispatch) => ({
  actions: bindActionCreators(dufineActions, dispatch)
})
)(DufineApp);
