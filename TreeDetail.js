import React, {Component} from 'react';
import {
  ActivityIndicator,
  Button,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';

export default class TreeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    //const item = this.props.navigation.getParams('treeDetail');
    return (
      <View style={styles.container}>
        <Text>{'tree detail'}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  touchButton: {
    alignSelf: 'center',
    backgroundColor: '#2980b9',
    paddingVertical: 25,
    width: 295,
    margin: 15,
  },
  touchButtonText: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
