import * as types from '../actions/actionTypes';

const initialState = {
  count: 0,
  activeComponent: 'List',
  dufineList: ['blah','duuude','kevoo'],
  // dataSource: this.state.dataSource.cloneWithRows(tracks)
};

export default function counter(state = initialState, action = {}) {
  // console.log('state',state);
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
      case types.VIEW:
        return {
          ...state,
          activeComponent: 'View'
        };
      default:
        return state;
  };
}
