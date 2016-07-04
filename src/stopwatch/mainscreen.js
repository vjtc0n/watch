/**
 * Created by vjtc0n on 7/1/16.
 */
import React from 'react-native';

function border(color) {
    return {
        borderColor: color,
        borderWidth: 4
    }
}
function getCurrentStatusBarHeight(height) {
    return {
        paddingTop: height
    }
}

module.exports = {
    border,
    getCurrentStatusBarHeight
};