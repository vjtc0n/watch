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

class Tab4 extends Component {
  render() {
    return(
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.clickTab3}>
          <Text style={styles.text}>Back to Tab3</Text>
        </TouchableOpacity>


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



module.exports = Tab4;