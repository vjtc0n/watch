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

import SideMenu from 'react-native-side-menu';
import Menu from './menu';

import Tab4 from '../stopwatch/tab4';

class Button extends Component {
    handlePress(e) {
        if (this.props.onPress) {
            this.props.onPress(e);
        }
    }

    render() {
        return (
            <TouchableOpacity
                onPress={this.handlePress.bind(this)}
                style={this.props.style}>
                <Text>{this.props.children}</Text>
            </TouchableOpacity>
        );
    }
}

class NavigatorTab extends Component {
    render() {
        return(
            <Navigator
                initialRoute={{name: 'tab3'}}
                renderScene={this.changeTab}
            />
        );
    }

    changeTab(route, navigator) {
        switch (route.name) {
            case "tab3": return (
                <View style={styles.tabScreen}>
                    <Tab3 clickTab4={()=>{navigator.push({name: 'tab4'});}} />
                </View>
            );
            case "tab4": return (
                <View style={styles.tabScreen}>
                    <Tab4 clickTab3={()=>{navigator.pop({name: 'tab3'});}} />
                </View>
            );
        }
    }
}

export default class Tab3 extends Component {
    state = {
        isOpen: false,
        selectedItem: 'About'
    };

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    updateMenuState(isOpen) {
        this.setState({ isOpen});
    }

    onMenuItemSelected = (item) => {
        this.setState({
            isOpen: false,
            selectedItem: item
        });
    }





    render() {
        const menu = <Menu onItemSelected={this.onMenuItemSelected} />;

        return (
            <SideMenu
                menu={menu}
                isOpen={this.state.isOpen}
                onChange={(isOpen) => this.updateMenuState(isOpen)}>
                <View style={styles.container}>
                    <Button style={styles.button} onPress={() => this.toggle()}>
                        <Image
                            source={{ uri: 'http://i.imgur.com/vKRaKDX.png', width: 32, height: 32 }} />
                    </Button>
                    <Text style={styles.welcome}>
                        Welcome to React Native!
                    </Text>
                    <Text style={styles.instructions}>
                        Current selected menu item is: {this.state.selectedItem}
                    </Text>
                    <TouchableOpacity onPress={this.props.clickTab4}>
                        <Text style={styles.tab4Button}>Go to Tab 4</Text>
                    </TouchableOpacity>
                </View>

            </SideMenu>
        );
    }
}

/*export default class Tab4 {
    render() {
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={this.props.clickTab3}>
                    <Text style={styles.tab4Button}>Go to Tab 4</Text>
                </TouchableOpacity>
            </View>
        );
    }
}*/

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        top: 20,
        padding: 10
    },
    caption: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    },
    tabScreen: {
        flex: 1
    },
    tab2Button: {
        marginBottom: 50
    },
    tab4Button: {
        marginBottom: 100
    }
});



module.exports = NavigatorTab;