import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import treeList from './TreeList';
import treeDetail from './TreeDetail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TreeList"
          component={treeList}
          options={{title: 'Tree List'}}
        />
        <Stack.Screen name="TreeDetail" component={treeDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
