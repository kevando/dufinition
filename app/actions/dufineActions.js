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
export function setWord(word) {
  return {
    type: types.SET_WORD,
    payload: word
  }
}
export function clearActiveDufine() {
  return {
    type: types.CLEAR_ACTIVE_DUFINE,
  }
}

// when user wants to upload a photo
export function savePhoto(source) {

  return {
    type: types.SAVE_PHOTO,
    payload: source
  }
}
// when user clicks save, this will dump ui into a new dufine
export function saveDufine() {
  return {
    type: types.SAVE_DUFINE,
  }
}

export function deleteDufine() {
  return {
    type: types.DELETE_DUFINE,
  }
}
export function setActiveDufine(dufine) {
  return {
    type: types.SET_ACTIVE_DUFINE,
    payload: dufine
  }
}

export function clearWelcomeFlag() {
  return {
    type: types.CLEAR_WELCOME_FLAG,
  }
}
