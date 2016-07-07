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
    TabBarIOS,
    Dimensions,
    Image

} from 'react-native';

const window = Dimensions.get('window');
const uri = 'http://pickaface.net/includes/themes/clean/img/slide2.png';


class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dataSource: null
        };
    }


    render() {
        return (
            <ScrollView scrollsToTop={false} style={styles.menu}>
                <View style={styles.avatarContainer}>
                    <Image
                        style={styles.avatar}
                        source={{ uri}}/>
                    <Text style={styles.name}>Your name</Text>
                </View>

                <Text
                    onPress={() => this.props.onItemSelected('About')}
                    style={styles.item}>
                    About
                </Text>

                <Text
                    onPress={() => this.props.onItemSelected('Contacts')}
                    style={styles.item}>
                    Contacts
                </Text>
            </ScrollView>
        );
    }
}

Menu.propTypes = {
    onItemSelected: React.PropTypes.func.isRequired
};


const styles = StyleSheet.create({
    menu: {
        flex: 1,
        width: window.width,
        height: window.height,
        backgroundColor: 'gray',
        padding: 20
    },
    avatarContainer: {
        marginBottom: 20,
        marginTop: 20
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        flex: 1
    },
    name: {
        position: 'absolute',
        left: 70,
        top: 20
    },
    item: {
        fontSize: 14,
        fontWeight: '300',
        paddingTop: 5
    }
});

module.exports = Menu;