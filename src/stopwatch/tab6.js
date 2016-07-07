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
    Navigator

} from 'react-native';
import SignIn from '../stopwatch/Tab6/authentication/signin';
import SignUp from '../stopwatch/Tab6/authentication/signup';

var ROUTES = {
    signin: SignIn,
    signup: SignUp
};


class Tab6 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <Navigator
                    initialRoute={{name: 'signin'}}
                    renderScene={this.renderScene}
                    configureScene={() => {return Navigator.SceneConfigs.FloatFromRight;}}
                />
            </View>
        );
    }

    renderScene(route, navigator) {
        var Component = ROUTES[route.name]; // ROUTES['signin'] => SignIn
        return <Component route={route}
                          navigator={navigator}
               />;
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 50,
        marginTop: 20
    }
});


module.exports = Tab6;