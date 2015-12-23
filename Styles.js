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
    buttonRed: {
        backgroundColor: 'red',
    },


    /* ListView */
    listViewContainer: {
        backgroundColor: 'green',
        marginTop:0,
        paddingTop:0,

    },
    listRow: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderBottomColor: '#666',
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 0,
        paddingBottom: 0,

    },
    listRowText: {
        fontSize:20,
    },
    rightContainer: {
        flex:1
    },
    thumbnail: {
        width: 50,
        height: 50,
        borderColor: '#666',
        borderWidth: 1,
        margin:10,
        marginRight: 25,

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