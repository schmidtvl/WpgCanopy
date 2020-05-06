import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme, useTheme, StackActions } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';

// Components
import HomeScreen from './src/components/Home';
import TreeListScreen from './src/components/TreeList';
import TreeItemScreen from './src/components/TreeItem';

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Trees" component={TreeListScreen} />
      <HomeStack.Screen name="Tree" component={TreeItemScreen} />
    </HomeStack.Navigator>
  );
}

const TreeStack = createStackNavigator();
function TreeStackScreen() {
  return (
    <TreeStack.Navigator>
      <TreeStack.Screen name="Trees" component={TreeListScreen} />
      <TreeStack.Screen name="Tree" component={TreeItemScreen} />
      <TreeStack.Screen name="Home" component={HomeScreen} />
    </TreeStack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStackScreen} options={{ title: 'Home' }} />
          </Tab.Navigator>
        }
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
