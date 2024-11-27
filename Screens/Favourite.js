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

function ProductCard(){
  return(
    <View style={styles.prodCard}> </View>
  )
}

export default function Favourite({ navigation }) {
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
  prodCard:{
    height: 250,
    width: 400,
    borderWidth: 1,
    borderColor: '#e31613',
    borderRadius: 10
  }
});

//#1D1E2D = light black blue
//#0D0D17 = dark black blue
//#bc110f = dark red
//#e31613 = main red
//#bc110f = light red
//#ffffff = main white
//#ebebeb = light grey
