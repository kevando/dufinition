'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({

  header: {
    height:50,
    backgroundColor: '#4071b8',
  },

  container: {
    flex: 1,
    backgroundColor: '#f5f8fa',
  },

  /* Dufine List Item */
  dufineListItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingTop: 4,
    paddingBottom: 10,
  },
  dufineListItemRight: {
    flex: 1,
    padding: 10,
  },
  dufineListItemWord: {
    fontFamily: 'Georgia',
    fontWeight: '400',
    fontSize: 18,
  },

  /* Dufine View */
  dufineViewContainer: { //
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff'
  },
  dufineViewWordContainer: { //
    flex: 1,
    padding: 10,
    marginLeft:10,
  },
  dufineViewPronunciation: {
    fontSize: 16,
    color: '#8999a5',
    marginTop: 10,
    marginBottom: 10,
  },
  dufineViewWord: {
    fontWeight: '600',
    fontSize: 25,
    fontFamily: 'Georgia'
  },
  dufineViewPartOfSpeech: {
    fontWeight: '600',
    fontSize: 20,
    fontFamily: 'Georgia',
    fontStyle: 'italic',
  },
  dufineViewDefinitionsContainer: {
    paddingRight: 20,
    paddingLeft: 20,
  },
  dufineViewDefinitionText: {
    fontWeight: '300',
    fontSize: 14,
    fontFamily: 'Georgia',
  },
  dufineViewDefinitionCount: {
    fontWeight: '600',
    fontSize: 16,
    fontFamily: 'Georgia'
  },
  /* Dufine Input */
  dufineInputContainer: {
    flex:1,
    padding:10,
    backgroundColor:'#ccc',
  },
  input: {
    backgroundColor: '#fff',
    flex: 2,
    height: 32,
    marginTop: 6,
    paddingLeft: 10,
    color: 'white',
  },
  button: {
    backgroundColor: '#8c88bf',
    flex: 3,
    height: 32,
    marginTop: 6,
    padding: 10,
    borderRadius: 4,
  },
  error: {
    color: 'red',
  }




});
