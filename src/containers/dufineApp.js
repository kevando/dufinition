'use strict'; // not sure why

import React, { Component, View, Navigator } from 'react-native'; // need View in order to stack the Header with DufineApp
// I am not sure this is a good approach.
import { bindActionCreators } from 'redux';

import Counter from '../components/counter'; //
import Header from '../components/header'; // i dont know this is the best way to do this
import List from '../components/list'; // i dont know this is the best way to do this
// import DufineList from '../components/dufineList';

import * as counterActions from '../actions/counterActions';
import { connect } from 'react-redux';


var ROUTES = {
	List: List,
  header: Header,
	// dufineview: DufineView,
	// dufinepreview: DufinePreview,
	// welcome: Welcome
};

class DufineApp extends Component {
  constructor(props) {
    super(props);

    this.renderScene = this.renderScene.bind(this);
  }

  renderScene(route, navigator){ // called any time navigator gets pushed/popped
    const { state, actions } = this.props; // i gues this calls down to all the components rendered by nav
    // console.log(actions)
		var Component = ROUTES[route.name];
		return <Component route={route} navigator={navigator} {...actions} />;
	}

  render() {
    // i guess this app got sent props consisting of state and actions
    // from where tho?
    const { state, actions } = this.props;
    return (

      <Navigator
        initialRoute={{name: state.initialComponent}}
        renderScene={this.renderScene}

        configureScene={() => {return Navigator.SceneConfigs.FloatFromRight; }} />

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
