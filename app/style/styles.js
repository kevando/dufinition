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
  dufineInputWrapper: {
    flex:1,
    flexDirection: 'column',
  },
  dufineInputContainer: {
    flex:1,
    padding:10,
    borderBottomColor:'#ccc',
    borderBottomWidth:1,
    flexDirection: 'row',
  },
  dufineInput: {
    flex: 7,
  },
  dufineInputButton: {
    flex:2,
  },
  input: {
    backgroundColor: '#fff',
    flex: 2,
    height: 35,
    marginTop: 0,
    paddingLeft: 10,
    borderColor: '#666',
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#8c88bf',
    flex: 3,
    height: 35,
    padding: 10,
  },
  inputErrorContainer: {
    flex:1,
  },
  error: {
    color: 'red',
  },
  dufineViewPhotoContainer: {
    marginRight: 20,
    paddingTop: 2,
    flexDirection: 'row',
    backgroundColor: "#ccc",
    width: 120,
    flex:1,
    height: 120,
    alignItems: 'stretch',
  },
  dufineViewAddPhoto: {
    backgroundColor: '#9f88bf',
    flex:1,

  },
  dufineViewAddPhotoText: {
    flex:1,
    backgroundColor: '#ccc',
    textAlign: 'center',
    paddingTop:50,
    color:'#666'
  },
  dufineViewPhoto: {
    backgroundColor: 'gray',
    width: 120,
    height: 120,
    margin: 1,
  },

  /* App Settings Page */
  appSettingsButton: {
    backgroundColor: 'red',
    width: 180,
    marginTop: 6,
    padding: 10,
    textAlign: 'center',
    color: 'white',
  },
  appSettingsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },



});
