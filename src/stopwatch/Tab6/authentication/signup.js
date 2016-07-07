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
import Button from '../common/button';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.onPress = this.onPress.bind(this);
    }
    render() {
        return(
            <View style={styles.container}>
                <Text>Sign Up</Text>
                <Button text={'Back'}
                        onPress={this.onPress}
                />
            </View>
        );

    }
    onPress() {
        this.props.navigator.pop({name: 'signin'});
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 50,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        padding: 4,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        margin: 5,
        width: 200,
        alignSelf: 'center'
    },
    label: {
        fontSize: 18
    }
});

module.exports = SignUp;