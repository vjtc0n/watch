/**
 * Created by vjtc0n on 7/4/16.
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    ScrollView

} from 'react-native';


import formatTime from 'minutes-seconds-milliseconds';


import styles from '../styles/styles'
import {
    border,
    getCurrentStatusBarHeight
} from '../stopwatch/mainscreen';

class Tab1 extends Component {
    /* Register initial things */
    constructor(props) {
        super(props);
        /* Register states */
        this.state = {
            timeElapsed: null,
            running: false,
            startTime: null,
            lapsLength: 0,
            laps: [],
            contentHeight: 0,
            scrollViewHeight: 0

        };
        /* Register my methods*/
        this.handleStartPress = this.handleStartPress.bind(this);
        this.handleLapPress = this.handleLapPress.bind(this);
        /*this.getLapsLength = this.getLapsLength.bind(this);*/
    }



    render() {


        return (
            <View style={[styles.container, getCurrentStatusBarHeight(20)]}>
                <View style={[styles.header, border('yellow')]}>
                    <View style={[styles.timerWrapper, border('red')]}>
                        <Text style={styles.timer}>
                            {formatTime(this.state.timeElapsed)}
                        </Text>
                    </View>

                    <View style={[border('green'), styles.buttonWrapper]}
                    >
                        <View>
                            {this.startStopButton()}
                        </View>
                        <View>
                            {this.lapStopButton()}
                        </View>

                    </View>
                </View>

                <View style={[styles.footer, border('blue')]}>
                    <ScrollView ref='scrollView'
                                onContentSizeChange={(w, h) => this.contentHeight = h}
                                onLayout={ev => this.scrollViewHeight = ev.nativeEvent.layout.height}
                                style={styles.scrollView}>
                        {this.laps()}

                    </ScrollView>
                    <View style={styles.bottom}>
                        <View style={styles.bottomGrid}>
                            <View style={styles.whiteBox}></View>
                            <TouchableHighlight onPress={() => {this.scrollToBottom()}}
                                                underlayColor="pink"
                                                style={styles.returnToTopButton}>
                                <Text>
                                    Return to Bottom
                                </Text>
                            </TouchableHighlight>
                            <View style={styles.whiteBox}></View>
                        </View>

                    </View>

                </View>

            </View>
        );
    }
    scrollToBottom(animated = true) {
        const scrollHeight = this.contentHeight - this.scrollViewHeight;
        if (scrollHeight > 0) {
            const scrollResponder = this.refs.scrollView.getScrollResponder();
            scrollResponder.scrollResponderScrollTo({x: 0, y: scrollHeight, animated});
        }
    }
    laps() {
        return this.state.laps.map(function (time, index) {

            return (
                <View style={styles.lap}>
                    <Text style={styles.lapText}>
                        Lap #{index + 1}
                    </Text>
                    <Text style={styles.lapText}>
                        {formatTime(time)}
                    </Text>
                </View>
            );
        });


    }
    startStopButton() {
        var style = this.state.running ? styles.stopButton : styles.startButton;
        return (
            <TouchableHighlight
                underlayColor="gray"
                onPress={this.handleStartPress}
                style={[styles.button, style]}
            >
                <Text>
                    {this.state.running ? 'Stop' : 'Start'}
                </Text>
            </TouchableHighlight>
        );
    }
    lapStopButton() {
        return (
            <TouchableHighlight style={styles.button}
                                underlayColor="gray"
                                onPress={this.handleLapPress}>
                <Text>
                    Lap
                </Text>

            </TouchableHighlight>
        );
    }
    handleStartPress() {
        if (this.state.running) {
            clearInterval(this.interval);
            this.setState({running: false});
            return
        }

        /*console.log('Start was pressed')*/
        var startTime = new Date();
        this.setState({
            startTime: new Date()
        });


        this.interval = setInterval(() => {
            /*Update state*/
            this.setState({
                timeElapsed: new Date() - this.state.startTime,
                running: true
            });
        }, 30);


    }

    handleLapPress() {

        var lap = this.state.timeElapsed;
        var length = this.state.lapsLength;
        this.setState({
            startTime: new Date(),
            /*laps: this.state.laps.concat([lap])*/
            laps: [lap].concat(this.state.laps),
            lapsLength: length + 1
        });
        /*console.log(this.state.laps);*/
        /*console.log(this.state.lapsLength);*/
    }



}







module.exports = Tab1;