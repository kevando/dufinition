import React, { AppRegistry, StyleSheet } from 'react-native';

// import Router from '../index';
import Router from 'react-native-simple-router';

import HomePage from './pages/HomePage';
import BackButton from './components/BackButton';
import SearchAndCompose from './components/icons/SearchAndCompose';
import AddPeople from './components/icons/AddPeople';

const firstRoute = {
  name: 'Home',
  component: HomePage,
  leftCorner: AddPeople,
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#5cafec',
  },
});

export default class TwitterApp extends React.Component {
  render() {
    return (
      <Router
        firstRoute={firstRoute}
        headerStyle={styles.header}
        backButtonComponent={BackButton}
        rightCorner={SearchAndCompose}
      />
    );
  }
}



AppRegistry.registerComponent('Dufine', () => TwitterApp);

//AppRegistry.registerComponent('Dufine', () => App);



// Previous app code
//var React = require('react-native');
//var {AppRegistry} = React;
//var Main = require('./src/main');
