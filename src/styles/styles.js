/**
 * Created by vjtc0n on 7/1/16.
 */
import React from 'react-native';
import {
    StyleSheet,
    Dimensions
} from 'react-native';

var width = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
    },
    header: {
        flex: 1,
    },
    footer: {
        flex: 1,
        flexDirection: 'column',
        marginBottom: 50
    },
    timerWrapper: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonWrapper:{
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    timer: {
        fontSize: 60,
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
        borderColor: '#00CC00'
    },
    stopButton: {
        borderColor: '#CC0000'
    },
    lap: {
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    lapText: {
        fontSize: 30,

    },
    scrollView: {
        flex: 9/10,
        flexDirection: 'column'
    },
    bottom:{
        flex: 1/10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    bottomGrid: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    returnToTopButton: {
        flex: 1,
        borderWidth: 2,
        alignItems: 'center',

    },
    whiteBox: {
        flex: 1
    }


    /*instructions: {
     textAlign: 'center',
     color: '#333333',
     marginBottom: 5,
     },*/
});

module.exports = styles;