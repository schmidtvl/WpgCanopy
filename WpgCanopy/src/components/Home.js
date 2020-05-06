import * as React from 'react';
import { Button, Text, Image, StyleSheet, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageSize: {
    width: 400,
    height: 265,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  titleView: {
    paddingTop: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    width: '100%',
  },
  buttonView: {
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function HomeScreen({ navigation }) {
  const titleText = 'Winnipeg Canopy';
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image style={styles.imageSize} source={require('./../assets/home_image.jpg')} />
      </View>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>{titleText}</Text>
      </View>
      <View style={styles.buttonView}>
        <Button
          title="Trees List"
          buttonStyle={styles.buttons}
          color="#0a4a1b"
          onPress={() => navigation.navigate('Trees')}
        />
      </View>
    </SafeAreaView>
  );
}
