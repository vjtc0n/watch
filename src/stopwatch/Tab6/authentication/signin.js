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

/*var ParseServer = require('parse-server').ParseServer;
var api = new ParseServer({
    databaseURI: 'mongodb://vjtc0n:luukhanhvi@ds015915.mlab.com:15915/signin', // Connection string for your MongoDB database
    //cloud: '/home/myApp/cloud/main.js', // Absolute path to your Cloud Code
    appId: '15915',
    masterKey: 'ds015915', // Keep this key secret!
    //fileKey: 'optionalFileKey',
    serverURL: 'http://localhost:1337/parse' // Don't forget to change to https if needed
});*/


class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errorMessage: ''
        };
        this.onSignupPress = this.onSignupPress.bind(this);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Sign In</Text>
                <Text style={styles.label}>Username:</Text>
                <TextInput style={styles.input}
                           value={this.state.username}
                           onChangeText={(text) => this.setState({username: text})}
                />
                <Text style={styles.label}>Password:</Text>
                <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    value={this.state.password}
                    onChangeText={(text) => this.setState({password: text})}
                />
                <Button text={'Signin'} onPress={this.onPress} />

                <Button text={'I need an account'} onPress={this.onSignupPress} />
            </View>
        );
    }
    onSignupPress() {
        this.props.navigator.push({name: 'signup'});
    }
    onPress() {

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


module.exports = SignIn;