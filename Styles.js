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

    /* Definition Component */
    definitionContainer: {
        backgroundColor: '#ccc',
        padding: 5,
    },
    definition: {
        backgroundColor: '#fff',
        margin: 5,
    },

    dufTop: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    definitionWord: {
        fontSize: 50,
    },
    definitionType: {
        fontSize: 30,
        fontStyle: 'italic'
    },
    definitionWordContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    definitionText: {
        flex: 1,
        flexDirection: 'column',
    },

    definitionBottom:{
        backgroundColor: '#fff'
    },

    dufinitionDefinition: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',

    },

    photoContainer: {
        backgroundColor: '#eee',
        margin: 10,
    },

    definitionPhoto: {
        height: 100,
        width: 100
    },
    georgia: {
        fontFamily: "Georgia",
        fontSize: 30,
        textAlign: "left",
        margin: 10,
    },


});