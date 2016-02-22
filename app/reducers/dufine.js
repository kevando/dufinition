// this def needs to not be named counter.js

import * as types from '../actions/actionTypes';

const initialState = {
  count: 0,
  ui: { // i dont like the idea that i would need to init this cause clearing seems like a hassle
    word: null,
    definition: null,
    photo: null
  },
  dufines: [ // Default layout from wordsapi
    {
      "word": "dumb",
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
  ],


};

// i am still kind of confused why a reducer is the place to define an initial state
// whatever though

// this reduce handles EVERHTHING at themoment. but i proably want to split that up

export default function dufine(state = initialState, action = {}) {
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
      // console.log('SET DEF')
      // console.log(action.payload)
        return {
          ...state,
          ui : {
            definition: action.payload // this i guess could be an invalid definition
          }
        }
      case types.CLEAR_WORD:
        return {
          ...state,
          ui: {
            word: null
          }
        }

      case types.ADD_WORD:

        return {
          ...state,
          dufines: [
            ...state.dufines,
            {
              word: action.payload,
              text: 'new text fresh'
            }
          ]
        };

      default:
        return state;
  };
}
