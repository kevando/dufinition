// this def needs to not be named counter.js

import * as types from '../actions/actionTypes';
const GoogleAnalytics = require('react-native-google-analytics-bridge');

const initialState = {
  ui: {
    dufine: {
      word: "idio" ,
      definition:{
        "word": "idiot",
        "results": [
          {
            "definition": "a person of subnormal intelligence",
            "partOfSpeech": "noun",
          }
        ],
        "syllables": {
          "count": 3,
          "list": [
            "id",
            "i",
            "ot"
          ]
        },
        "pronunciation": {
          "all": "'ɪdiət"
        },
      }
    }
  },
  dufines: [], // list of dufines
  showWelcome: true, // this should initialize to true and be set to false every other time
  loading: true,
};

// i am still kind of confused why a reducer is the place to define an initial state
// whatever though

// this reduce handles EVERHTHING at themoment. but i proably want to split that up

export default function dufine(state = initialState, action = {}) {
  // console.log('initialstate',state);
  // console.log('state before reducer',state);
  // console.log('ACTION: ',action);
  switch (action.type) {
      // should probly also be a UI_SET_WORD
      case types.SET_DEFINITION:
        return {
          ...state,
          ui: {
            dufine: {
              word: "fresh",
              definition: action.payload
            }

          }
        }

      case types.CLEAR_ACTIVE_DUFINE:
        return {
          ...state,
          ui: {
            dufine: null // this might need to change if ui gets more objects
          }
        }
        case types.SET_ACTIVE_DUFINE:
          return {
            ...state,
            ui: {
              dufine: action.payload
            }
          }

      //
      // When a user clicks save
      //
      case types.SAVE_DUFINE:
      GoogleAnalytics.trackEvent('Dufine','Added', { label: state.ui.dufine.definition.word } );
        return {
          ...state,
          dufines: [
            ...state.dufines,
            {
              word: state.ui.dufine.definition.word.toLowerCase(),
              photo: state.ui.dufine.photo,
              definition: state.ui.dufine.definition
            }
          ]
        };

        case types.DELETE_DUFINE:
          GoogleAnalytics.trackEvent('Dufine','Deleted', { label: state.ui.dufine.definition.word } );
          var elementPosition = state.dufines.map(function(dufine) {return dufine.definition.word; }).indexOf(state.ui.dufine.definition.word);
          var firstHalf = state.dufines.slice(0, elementPosition);
          var secondHalf = state.dufines.slice(elementPosition + 1)

          return {
            ...state,
            dufines: [
              ...firstHalf,
              ...secondHalf
            ],
          }

      case types.CLEAR_WELCOME_FLAG:
        return {
          ...state,
          showWelcome: false,
        }
      //
      // When a user uploads a Photo
      //
      case types.SAVE_PHOTO: // change to this to set photo
        return {
          ...state,
          ui: {
            dufine: {
              word: state.ui.dufine.word,
              photo: action.payload,
              definition: state.ui.dufine.definition
            }

          }
        }
      default:
        return state;
  };
}
