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

import SearchBar from '../components/SearchBar';

function ProductCategory(props) {
  return (
    <TouchableOpacity
      style={styles.ProductCategoryContainer}></TouchableOpacity>
  );
}

function CategorySection(props) {
  return (
    <View style={styles.row}>
      <View style={{ marginTop: 5, alignItems: 'center' }}>
        <TouchableOpacity style={styles.SubCategorySection}>
          <Image style={styles.categoryIcon} source={props.img1} />
        </TouchableOpacity>
        <Text style={styles.textIcon}>{props.name1}</Text>
      </View>
      <View style={{ marginTop: 5, alignItems: 'center' }}>
        <TouchableOpacity style={styles.SubCategorySection}>
          <Image style={styles.categoryIcon} source={props.img2} />
        </TouchableOpacity>
        <Text style={styles.textIcon}>{props.name2}</Text>
      </View>
    </View>
  );
}

function SingleCategorySection(props) {
  return (
    <View style={styles.row}>
      <View style={{ marginTop: 5, alignItems: 'center' }}>
        <TouchableOpacity style={styles.SubCategorySection}>
          <Image style={styles.categoryIcon} source={props.img1} />
        </TouchableOpacity>
        <Text style={styles.textIcon}>{props.name1}</Text>
      </View>
    </View>
  );
}

function Line(){
  return(
    <View style ={styles.line}></View>
  )
}

export default function Products({ navigation }) {
  //Font Section
  const [fontsLoaded] = useFonts({
    Font1: require('../assets/fonts/FCMinimalRegular.ttf'),
    FontBold: require('../assets/fonts/FCMinimalBold.ttf'),
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container2}>
        <SearchBar />
        <Text
          style={{
            fontFamily: 'Font1',
            fontSize: 32,
            fontWeight: 'bold',
            right: 125,
          }}>
          ประเภทสินค้า
        </Text>
        <View style={styles.PCContainer}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.categoryContainer}>
            <CategorySection
              img1={require('../assets/icons/grid.png')}
              name1="ทั้งหมด"
              img2={require('../assets/icons/electricKeyboard.png')}

              name2="คีย์บอร์ด"
   
            />
            <CategorySection
              img1={require('../assets/icons/piano.png')}
              name1="เปียโนไฟฟ้า"
              img2={require('../assets/icons/drumSet.png')}
              name2="กลองชุด"

            />
            <CategorySection
              img1={require('../assets/icons/electricDrum.png')}
              name1="กลองไฟฟ้า"
              img2={require('../assets/icons/electricGuitar.png')}
              name2="กีต้าร์ไฟฟ้า"

            />
            <CategorySection
              img1={require('../assets/icons/guitar.png')}
              name1="กีต้าร์โปร่ง"
              img2={require('../assets/icons/effectPedal.png')}
              name2="เอฟเฟค"

            />
            <CategorySection
              img1={require('../assets/icons/bass.png')}
              name1="เบส"
              img2={require('../assets/icons/recorder.png')}
              name2="อุปกรณ์บันทึกเครื่องเสียง"

            />
            <CategorySection
              img1={require('../assets/icons/amplifier.png')}
              name1="แอมป์"
              img2={require('../assets/icons/microphone.png')}
              name2="ไมโครโฟน"

            />
            <SingleCategorySection
              img1={require('../assets/icons/stereo.png')}
              name1="เครื่องเสียง"
            />
          </ScrollView>
          <Line />
        </View>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 15,
    alignItems: 'center',
  },
  container2: {
    flex: 1,
    alignItems: 'center',
  },
  ProductCategoryContainer: {
    height: 100,
    width: '90%',
    backgroundColor: '#bc110f',
    margin: 10,
    borderRadius: 15,
  },
  PCContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 30,
    marginTop: 15,
  },

  SubCategorySection: {
    height: 100,
    width: 100,
    backgroundColor: 'white',
    marginHorizontal: 17,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#e31613',
  },
  categoryContainer: {
    marginHorizontal: 0,
  },
  row: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  categoryIcon: {
    width: 75,
    height: 75,
  },
  textIcon: {
    marginTop: 5,
    fontFamily: 'Font1',
    fontSize: 20,
  },
  line :{
    width: 380,
    height: 0.1,
    borderWidth: 0.5,
    borderColor: '#e31613',
    marginVertical: 25
  }
});

//#1D1E2D = light black blue
//#0D0D17 = dark black blue
//#bc110f = dark red
//#e31613 = main red
//#bc110f = light red
//#ffffff = main white
//#a5a8ac = light grey
