// this def needs to not be named counter.js

import * as types from '../actions/actionTypes';

const initialState = {
  // count: 0,
  ui: { // i dont like the idea that i would need to init this cause clearing seems like a hassle
    dufine: {
      word: null, // same todo
      definition: null, // same
      photo: null, // will go a way
    }
  },
  dufines: [ // Default layout from wordsapi
    {
      word: "dumb",
      photo: {data:'http://i.imgur.com/iu4446t.jpg'},
      definition: {
        "word": "dumb OG",
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
  // console.log('state before reducer',state);
  // console.log('action',action);
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
        return {
          ...state,
          dufines: [
            ...state.dufines,
            {
              word: state.ui.dufine.definition.word, // this should probly be the payload
              photo: state.ui.dufine.photo,
              definition: state.ui.dufine.definition
            }
          ]
        };

        case types.DELETE_DUFINE:
          var elementPosition = state.dufines.map(function(dufine) {return dufine.definition.word; }).indexOf(state.ui.activeDufine.definition.word);
          console.log('delete dufine reducer',state.ui.activeDufine);
          console.log('index',elementPosition);

          var firstHalf = state.dufines.slice(0, elementPosition);
          var secondHalf = state.dufines.slice(elementPosition + 1)
          console.log('first',firstHalf);
          console.log('second',secondHalf);

          // dufines: [
          //   ...state.dufines,
          //   {
          //     // photo: state.photo,
          //     definition: state.dufines.splice(elementPosition)
          //   }


          return {
            ...state,
            dufines: [
              ...firstHalf,
              ...secondHalf
            ],
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
