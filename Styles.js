'use strict';

var React = require('react-native');

var {
    StyleSheet,
    //PixelRatio, //used for avatar circle
} = React;

module.exports = StyleSheet.create({

    navWrap: {
        flex: 1,
        marginTop: 70 /* Height of NavigatorIOS */
    },
    nav: {
        flex: 1,
    },
    button: {
        backgroundColor: '#009DDD',
        padding: 10,
        margin: 10
    },
    buttonText: {
        color: '#fff',
    }


});