import React, { Component } from 'react-native';
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

// getting ride of this for now
// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const createStoreWithMiddleware = applyMiddleware(middleware,thunk)(createStore);
// commenting out now for storage
//const reducer = combineReducers(reducers);

const store = createStoreWithMiddleware(reducer);

// I guess this just loads the state. This just seems to work
// I think I will replace this with realm.io
const load = storage.createLoader(engine);
load(store);

// Notice that our load function will return a promise that can also be used
// to respond to the restore event.

export default class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <DufineApp />
      </Provider>
    );
  }
}
