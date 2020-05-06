import * as React from 'react';
import { Button, View, Text, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Constants from 'expo-constants';
import * as fs from 'fs';

const tree_json = [
  {
    id: '1',
    name: 'tree1',
    extra: 'extra1',
  },
  {
    id: '2',
    name: 'tree2',
    extra: 'extra2',
  },
  {
    id: '3',
    name: 'tree3',
    extra: 'extra3',
  },
];

function Item({ title, itemData, navigation }) {
  return (
    <View style={styles.item}>
      <Button buttonStyle={styles.title} color="#0a4a1b" title={title} onPress={() => navigation.navigate('Tree')} />
      <Text>{itemData.extra}</Text>
    </View>
  );
}
/*
 <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Trees screen</Text>
      </View>
  */

export default function TreeListScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Trees screen</Text>
      </View>
      <FlatList
        data={tree_json}
        renderItem={({ item }) => <Item title={item.name} itemData={item} navigation={navigation} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
    width: '100%',
  },
});
