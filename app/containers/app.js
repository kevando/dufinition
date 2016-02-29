import React, { Component, Text, View } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'; // I guess this is middleware

import * as reducers from '../reducers';
import DufineApp from './DufineApp';

//storage
import * as storage from 'redux-storage'; //
const reducer = storage.reducer(combineReducers(reducers)); // this is new from stoage package
import createEngine from 'redux-storage-engine-reactnativeasyncstorage';
const engine = createEngine('async-data-v1');

const middleware = storage.createMiddleware(engine);

// getting ride of this for now becaus I added redux-storage
// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const createStoreWithMiddleware = applyMiddleware(middleware,thunk)(createStore);
// commenting out now for storage
//const reducer = combineReducers(reducers);

const store = createStoreWithMiddleware(reducer);

// I guess this just loads the state. This just seems to work
// I think I will replace this with realm.io
const load = storage.createLoader(engine);
// engine.save({}); // This clears the state from local storage
// load(store);

// Notice that our load function will return a promise that can also be used
// to respond to the restore event.

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {loading: true}
  }

  render() {
    // Redux initial state will always default to loading
    if(this.state.loading)
      load(store).then((newState) => this.setState({loading:false}));

      // Does it make sense to put this in the app state?
    if(this.state.loading){
      return(<View><Text>Loading</Text></View>);
    } else {
      return(
        <Provider store={store}>
          <DufineApp />
          </Provider>
      );
    }
  }
}
