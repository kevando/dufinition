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
    },


    /* ListView */
    listRow: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 25,
        paddingBottom: 25,
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


});