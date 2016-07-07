/**
 * Created by vjtc0n on 7/7/16.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    ScrollView,
    ListView,
    Image,
    TouchableOpacity,
    Navigator,
    TextInput

} from 'react-native';

class Button extends Component {
    render() {
        return (
            <TouchableHighlight
                underlayColor={'gray'}
                style={styles.button}
                onPress={this.props.onPress}
            >
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        borderColor: 'black',
        marginTop: 10
    },
    buttonText: {
        flex: 1,
        alignSelf: 'center',
        fontSize: 20
    }
});

module.exports = Button;