'use strict';

var React = require('react-native');

var {
  StyleSheet,
  PixelRatio, //used for avatar circle
} = React;

module.exports = StyleSheet.create({

    /* Global Styling */
    container: {
        marginTop: 65,
        padding: 10,
    },

    /* ListView */
    listRow: {
    	flex: 1,
    	flexDirection: 'row',
    	backgroundColor: '#ccc',
    	justifyContent: 'center',
    	alignItems: 'center',
  	},
  	rightContainer: {
  		flex:1
  	},
    thumbnail: {
    	width: 53,
    	height: 81,

  	},

    /* Dufinition Component */
    dufTop: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    dufinitionText: {
        flex: 1,
        flexDirection: 'column',
    },
    dufinitionDefinition: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',

    },

    dufPhoto: {
        height: 100,
        width: 100
    },
    georgia: {
        fontFamily: "Georgia",
        fontSize: 20,
        textAlign: "left",
        margin: 10,
    },


    /* -------------- */
    searchInput: {
        height: 36,
        marginTop: 10,
        marginBottom: 10,
        fontSize: 18,
        borderWidth: 1,
        flex: 1,
        borderRadius: 4,
        padding: 5
    },
    button: {
        height: 36,
        backgroundColor: 'blue',
        borderRadius: 8,
        justifyContent: 'center',
        marginTop: 15
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    instructions: {
        fontSize: 18,
        alignSelf: 'center',
        marginBottom: 15
    },
    fieldLabel: {
        fontSize: 15,
        marginTop: 15
    },
    errorMessage: {
        fontSize: 15,
        alignSelf: 'center',
        marginTop: 15,
        color: 'red'
    },

    formInput: {
        flex: 1,
        height: 26,
        fontSize: 13,
        borderWidth: 1,
        borderColor: "#555555",
    },




   
    
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
  

  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    
    width: 150,
    height: 150
  }



});