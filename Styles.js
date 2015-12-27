'use strict';

var React = require('react-native');

var {
    StyleSheet,
    //PixelRatio, //used for avatar circle
} = React;

module.exports = StyleSheet.create({

  
    /* udemy days tutorial */
    container: {
        flex: 1, // fill entire screen
        //justifyContent: 'center',
        alignItems: 'stretch', // run as far left/right as possible
    },
    header: { // yellow
        flex: 1,
    },
    footer: { // blue
        flex: 1,
    },
    timerWrapper: { // red
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonWrapper: { // green 
        flex: 3,
        flexDirection:'row',
        justifyContent: 'space-around', // center horizontally
        alignItems:'center', //center verticall
    },
    timer: {
        fontSize: 60
    },
    button: {
        borderWidth: 2,
        height: 100,
        width: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    startButton: {
        borderColor: 'green'
    },
    stopButton: {
        borderColor: 'red'
    },
    lapButton: {
        borderColor: 'red'
    }

});