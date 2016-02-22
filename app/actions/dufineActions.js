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

export function addWord(word){
  console.log('addWord called')
  return {
    type: types.ADD_WORD,
    payload: word
  }
}
