/**
 * Created by vjtc0n on 7/5/16.
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
    TouchableOpacity

} from 'react-native';

class Tab5 extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.text}>ABC</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 50
    },
    text: {
        marginTop: 20
    }
});


module.exports = Tab5;