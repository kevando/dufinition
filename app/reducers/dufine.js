// this def needs to not be named counter.js

import * as types from '../actions/actionTypes';

const initialState = {
  count: 0,
  ui: { // i dont like the idea that i would need to init this cause clearing seems like a hassle
    word: null,
    definition: null,
    photo: null,
    activeDufine: null
  },
  dufines: [ // Default layout from wordsapi
    {
      photo: null,
      definition: {
        "word": "dumb ogggg",
        "results": [
          {
            "definition": "unable to speak because of hereditary deafness",
            "partOfSpeech": "adjective",
          },
          {
            "definition": "slow to learn or understand; lacking intellectual acuity",
            "partOfSpeech": "adjective",
            "synonyms": [
              "dense",
              "dim",
              "dull",
              "obtuse",
              "slow"
            ],
            "similarTo": [
              "stupid"
            ],
            "derivation": [
              "dumbness"
            ],
            "examples": [
              "dumb officials make some really dumb decisions"
            ]
          },
          {
            "definition": "temporarily incapable of speaking",
            "partOfSpeech": "adjective",
            "synonyms": [
              "speechless"
            ],
            "similarTo": [
              "inarticulate",
              "unarticulate"
            ],
            "examples": [
              "struck dumb"
            ]
          },
          {
            "definition": "lacking the power of human speech",
            "partOfSpeech": "adjective",
            "similarTo": [
              "unarticulate",
              "inarticulate"
            ],
            "examples": [
              "dumb animals"
            ]
          }
        ],
        "syllables": {
          "count": 1,
          "list": [
            "dumb"
          ]
        },
        "pronunciation": {
          "all": "dəm"
        },
        "frequency": 4.68
      }
    }
  ],


};

// i am still kind of confused why a reducer is the place to define an initial state
// whatever though

// this reduce handles EVERHTHING at themoment. but i proably want to split that up

export default function dufine(state = initialState, action = {}) {
  // console.log('initialstate',state);
  // console.log('state',state);
  // console.log('action',action);
  switch (action.type) {
    case types.INCREMENT:
      // I think this is saying to create a new instance of state, and append
      return {
        ...state,
        count:state.count + 1
      };
      case types.DECREMENT:
        return {
          ...state,
          count: state.count - 1
        };
      // should probly also be a UI_SET_WORD
      case types.SET_DEFINITION:
        return {
          ...state,
          ui: {
            ...state.ui,
            definition: action.payload
          }
        }
      case types.CLEAR_WORD:
        return {
          ...state,
          ui: {
            word: null
          }
        }

      //
      // When a user clicks save
      //
      case types.SAVE_DUFINE:
      console.log('SAVE_DUFINE',state.ui)
        return {
          ...state,
          dufines: [
            ...state.dufines,
            {
              word: state.ui.definition.word,
              photo: state.ui.photo,
              definition: state.ui.definition
            }
          ]
        };
        case types.SET_ACTIVE_DUFINE:
        console.log('SETACTIFSD',action.payload)
          return {
            ...state,
            ui: {
              activeDufine: action.payload
            }
          }

        case types.DELETE_DUFINE:
          var elementPosition = state.dufines.map(function(dufine) {return dufine.definition.word; }).indexOf(state.ui.activeDufine.definition.word);
          console.log('delete dufine reducer',state.ui.activeDufine);
          console.log('index',elementPosition);
          var newDufineArray = state.dufines.splice(elementPosition,1);
          console.log('newdufinearray',newDufineArray)

          // dufines: [
          //   ...state.dufines,
          //   {
          //     // photo: state.photo,
          //     definition: state.dufines.splice(elementPosition)
          //   }


          return {
            ...state,
            dufines: [
              ...state.dufines.slice(0, elementPosition),
              ...state.dufines.slice(elementPosition + 1)
            ],
            }

      //
      // When a user uploads a Photo
      //
      case types.SAVE_PHOTO:
        return {
          ...state,
          ui: {
            ...state.ui,
            photo: action.payload
          }
        }

      //
      // Trying to see if this async load shit worked
      // this works, but i dont think these actions are used ever..
      // i should look into this more
      case types.LOAD:
            return { ...state, loaded: true };

        case types.SAVE:
            console.log('Something has changed and written to disk!');

      default:
        return state;
  };
}
