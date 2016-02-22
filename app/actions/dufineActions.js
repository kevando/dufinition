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

// when user wants to upload a photo
export function savePhoto(source) {
  
  return {
    type: types.SAVE_PHOTO,
    payload: source
  }
}
