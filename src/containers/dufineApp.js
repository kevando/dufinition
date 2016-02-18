'use strict'; // not sure why

import React, { Component, View, Navigator } from 'react-native'; // need View in order to stack the Header with DufineApp
// I am not sure this is a good approach.
import { bindActionCreators } from 'redux';

import Counter from '../components/counter'; //
import Header from '../components/header'; // i dont know this is the best way to do this
import DufineList from '../components/dufineList';

import * as counterActions from '../actions/counterActions';
import { connect } from 'react-redux';

class DufineApp extends Component {
  constructor(props) {
    super(props);
  }

  renderScene(route, navigator){
    console.log('RENDER SCENE', route);
    const Component = route.component;
    return (
      <Component navigator={navigator} route={route} {...this.props} />
    )
  }

  render() {
    // i guess this app got sent props consisting of state and actions
    // from where tho?
    const { state, actions } = this.props;
    return (
  

      <Navigator
          renderScene={(route, nav) => this.renderScene(route, nav)}
          initialRoute={{ name: 'Signin', component: Header}}

      />








    );
    // I guess ...actions pulls in all the actions
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
    // I guess ...actions pulls in all the actions
  }
  render_counter() {
    const { state, actions } = this.props;
    return (
      <Counter
        counter={state.count}
        {...actions} />

    );
  }
}
export default connect(state => ({
  state: state.counter
}),
(dispatch) => ({
  actions: bindActionCreators(counterActions, dispatch)
})
)(DufineApp);
