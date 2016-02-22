import * as types from './actionTypes';

export function increment() {
  return {
    type: types.INCREMENT
  };
}

export function decrement() {
  return {
    type: types.DECREMENT
  };
}

export function getDefinition(word){

  return {
    type: types.GET_DEFINITION,
    payload: request
  }
}

// ui
export function setDefinition(responseData){

  return {
    type: types.SET_DEFINITION,
    payload: responseData
  }
}

// MODIFY UI
export function clearWord() {
  return {
    type: types.CLEAR_WORD,
  }
}
