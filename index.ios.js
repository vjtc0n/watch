

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  TabBarIOS

} from 'react-native';

import Tab1 from './src/stopwatch/tab1';
import Tab2 from './src/stopwatch/tab2';
import NavigatorTab from './src/stopwatch/tab3';
import Tab5 from './src/stopwatch/tab5';
import Tab6 from './src/stopwatch/tab6';
console.disableYellowBox = true;

class StopWatch extends Component {

  constructor(props){
    super(props)
    this.state = {
      selectedTab: 'tab6'
    };

  }


  tab1Change() {
    this.setState({
      selectedTab: 'tab1'
    });
  }

  tab2Change() {
    this.setState({
      selectedTab: 'tab2'
    });
    
  }

  tab3Change() {
    this.setState({
      selectedTab: 'tab3'
    });

  }
  
  tab5Change() {
    this.setState({
      selectedTab: 'tab5'
    });
  }

  tab6Change() {
    this.setState({
      selectedTab: 'tab6'
    });
  }

  render() {


    return (
        <View style={styles.main}>
          <TabBarIOS>
            <TabBarIOS.Item
                selected={this.state.selectedTab === "tab1"}
                icon={require("./src/images/home-icon-silhouette.png")}
                onPress={this.tab1Change.bind(this)} >
              <View style={styles.tabScreen}>
                <Tab1 />
              </View>
             </TabBarIOS.Item>

            <TabBarIOS.Item
                selected={this.state.selectedTab === "tab2"}
                icon={require("./src/images/apple.png")}
                onPress={this.tab2Change.bind(this)} >
              <View style={styles.tabScreen}>
                <Tab2 title="Demo"/>
              </View>
            </TabBarIOS.Item>

            <TabBarIOS.Item
                selected={this.state.selectedTab === "tab3"}
                icon={require("./src/images/apple.png")}
                onPress={this.tab3Change.bind(this)} >
              <View style={styles.tabScreen}>
                <NavigatorTab />
              </View>
            </TabBarIOS.Item>
            
            <TabBarIOS.Item
                selected={this.state.selectedTab === "tab5"}
                icon={require("./src/images/apple.png")}
                onPress={this.tab5Change.bind(this)} >
              <View style={styles.tabScreen}>
                <Tab5 />
              </View>
            </TabBarIOS.Item>

            <TabBarIOS.Item
                selected={this.state.selectedTab === "tab6"}
                icon={require("./src/images/apple.png")}
                onPress={this.tab6Change.bind(this)} >
              <View style={styles.tabScreen}>
                <Tab6 />
              </View>
            </TabBarIOS.Item>

          </TabBarIOS>

        </View>

    );
  }
}

const styles = StyleSheet.create({
  main:{
    flex: 1,
    flexDirection: 'column'

  },
  tabScreen: {
    flex: 1
  }
  
});


AppRegistry.registerComponent('stopwatch', () => StopWatch);
