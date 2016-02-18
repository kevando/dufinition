'use strict'; // not sure why

// Trying this router to see how it works
import Router from 'react-native-simple-router';

import React, { Component, View, Styles } from 'react-native'; // need View in order to stack the Header with DufineApp
// I am not sure this is a good approach.
import { bindActionCreators } from 'redux';

import Counter from '../components/counter'; //
import Header from '../components/header'; // i dont know this is the best way to do this
import List from './list'; // i dont know this is the best way to do this
// import DufineList from '../components/dufineList';

import * as counterActions from '../actions/counterActions';
import { connect } from 'react-redux';

const ROUTES = {
	list: List,
	header: Header,
}

const listRoute = {
  name: 'Dufines',
  component: ROUTES.list,

};

class DufineApp extends Component {
  constructor(props) {
    super(props);
  }

	renderRoute(){
		this.props.toRoute({
			name:'header component',
			component: List
		})
	}


  render() {
    // i guess this app got sent props consisting of state and actions
    // from where tho?
		// const { state, actions } = this.props;


    return (

			<Router
        firstRoute={listRoute}
        headerStyle={{backgroundColor: '#5cafec',}}
				passProps={{renderMethod:this.renderRoute}}
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

  }

}

// I do not understand any of this..
export default connect(state => ({
  state: state.counter
}),
(dispatch) => ({
  actions: bindActionCreators(counterActions, dispatch)
})
)(DufineApp);
