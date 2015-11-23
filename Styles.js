'use strict';

var React = require('react-native');

var {
  StyleSheet,
  PixelRatio, //used for avatar circle
} = React;

module.exports = StyleSheet.create({
container: {
        marginTop: 65,
        padding: 10,
    },
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
    saved: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    },



   listRow: {
    
    flexDirection: 'row',
    backgroundColor: '#ccc',
  },
    
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
  thumbnail: {
    width: 53,
    height: 81,
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