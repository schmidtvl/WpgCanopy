import React, {Component} from 'react';
import {
  ActivityIndicator,
  Button,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
} from 'react-native';

import treeData from './wpg_trees_test.json';

export default class TreeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
    };
  }

  componentDidMount() {
    this.setState({
      dataSource: treeData,
      isLoading: false,
    });
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 10, paddingLeft: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => (
            <TouchableHighlight
              onPress={() =>
                this.props.navigation.navigate('TreeDetail', {
                  treeDetail: item,
                })
              }>
              <View>
                <Text>{item.common_name}</Text>
              </View>
            </TouchableHighlight>
          )}
          keyExtractor={(item, index) => index}
        />
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
