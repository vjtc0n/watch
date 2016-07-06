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
    TouchableOpacity,
    MapView

} from 'react-native';

import Api from '../stopwatch/api';

class Tab5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pin: {
                latitude: 0,
                longitude: 0
            },
            city: '',
            temperature_F: '',
            temperature_C: '',
            description: ''
        };
        this.onRegionChangeComplete = this.onRegionChangeComplete.bind(this);
    }


    render() {
        return(
            <View style={styles.container}>
                <MapView
                    annotations={[this.state.pin]}
                    onRegionChangeComplete={this.onRegionChangeComplete}
                    style={styles.map}></MapView>
                <View style={styles.textWrapper}>
                    <Text style={styles.text}>{this.state.city}</Text>
                    <Text style={styles.text}>{this.state.temperature_F}</Text>
                    <Text style={styles.text}>{this.state.temperature_C}</Text>
                    <Text style={styles.text}>{this.state.description}</Text>
                </View>
            </View>
        );
    }

    onRegionChangeComplete(region) {
        /*console.log(region);*/
        this.setState({
            pin: {
                longitude: region.longitude,
                latitude: region.latitude
            }
        });

        Api(region.latitude, region.longitude)
        //we don't use .then(function(data){}), we use promise as below, thus if we use "this", it means this component
            .then((data) => {
                console.log(data);
                this.setState(data);
            });

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 50,
        marginTop: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF'
    },
    map: {
        flex: 4/5
    },
    textWrapper: {
        flex: 1/5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 25
    }
});


module.exports = Tab5;