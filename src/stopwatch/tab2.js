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
    ScrollView,
    ListView,
    Image

} from 'react-native';

var DATA = [
    {khoahoc:"Lap trinh", giangvien:"ABC"},
    {khoahoc:"Lap trinh", giangvien:"ABC"},
    {khoahoc:"Lap trinh", giangvien:"ABC"}
];

const uri = 'http://screenrant.com/wp-content/uploads/batman-v-superman-henry-cavill3.jpg';

class Tab2 extends Component {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1,r2)=>r1!=r2});
        this.state = {
            dataSource: ds.cloneWithRows(DATA)
        };
    }

    renderRow(property) {
        var length = DATA.length;
        return(
            <View>
                <Text>{length - 1}</Text>
                <Text>{property.khoahoc}</Text>
                <Text>{property.giangvien}</Text>
            </View>
        );
    }



    render() {
        return(
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text>{this.props.title}</Text>
                </View>
                <View style={styles.listView}>
                    <Image source={require('../images/batman-v-superman-henry-cavill3.jpg')}
                           style={styles.logo} />
                    <Image source={{uri}}
                           style={styles.logo} />
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderRow}
                    />

                </View>
            </View>

        );
    }
}

Tab2.propTypes = {
    title: React.PropTypes.string
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginBottom: 50
    },
    title: {
        flex: 1/10,
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    listView: {
        flex: 9/10
    },
    logo: {
        width: 60,
        height: 60
    }

});

module.exports = Tab2;