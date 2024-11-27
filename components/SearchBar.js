import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { useFonts } from 'expo-font';

const SearchBar = () => {
  const [search, setSearch] = useState('');

  const handleSearch = () => {

  };
  //Font Section
  const [fontsLoaded] = useFonts({
    Font1: require('../assets/fonts/FCMinimalRegular.ttf'),
    FontBold: require('../assets/fonts/FCMinimalBold.ttf'),
  });
  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
      <TextInput
        style={styles.input}
        placeholder="ค้นหาสินค้า ยี่ห้อ รุ่น"
        placeholderTextColor="#bc110f"
        onChangeText={text => setSearch(text)}
      />
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
      <Feather name="search" size={24} color="#e31613"  />
      </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  input: {
    flex: 0.8,
    height: 40,
    paddingHorizontal: 20,
    fontSize: 20,
    fontFamily: 'Font1'
  },
  searchButton: {
    position: 'absolute',
    right: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e31613',
    borderRadius: 10,
    backgroundColor: 'white',
    position: 'relative',
    width: 375,
  },
});

export default SearchBar;
