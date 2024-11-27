import * as React from 'react';
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
  ScrollView,
} from 'react-native';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import Constants from 'expo-constants';

export default function Review({ navigation }) {
  //Font Section
  const [fontsLoaded] = useFonts({
    Font1: require('../assets/fonts/FCMinimalRegular.ttf'),
  });

  return (
    <ScrollView style={styles.container} >

      </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    padding: 8,
    alignItems: 'center',

  },
});

//#1D1E2D = light black blue
//#0D0D17 = dark black blue
//#bc110f = dark red
//#e31613 = main red
//#bc110f = light red
//#ffffff = main white
//#ebebeb = light grey
