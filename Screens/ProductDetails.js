import * as React from 'react';
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import Constants from 'expo-constants';

function AddtoFavBtn() {
  const [btnPressFav, setBtnPressFav] = useState(false);
  const onFav = () => {
    setBtnPressFav(true);
  };
  const offFav = () => {
    setBtnPressFav(false);
  };
  return (
    <TouchableOpacity
      style={[
        styles.favButton,
        { backgroundColor: btnPressFav ? '#bc110f' : '#e31613' },
      ]}
      activeOpacity={0.9}
      onPressIn={onFav}
      onPressOut={offFav}>
      <Text style={styles.textN, {color: 'white',fontSize:20,fontFamily: 'Font1'}}> เพิ่มใน Favourite </Text>
    </TouchableOpacity>
  );
}

function DetailCard(props) {
  return (
    <View style={styles.DetailCard}>
      <View style={styles.textContainer}>
        <Text style={styles.textFont}>{props.name}</Text>
      </View>
      <View style = {styles.ImageContainer}>
        <Image style={styles.productImage} source={props.image} resizeMode="contain" />
      </View>
  <View>
      <Text style={{fontFamily: 'Font1',fontSize: 22}}>
      <Text style={{fontFamily: 'FontBold',fontSize: 22}}>ยี่ห้อ: </Text> {props.brand}
      </Text>

      <Text style={{fontFamily: 'Font1',fontSize: 22}}>
      <Text style={{fontFamily: 'FontBold',fontSize: 22}}>รุ่น: </Text> {props.type}
      </Text>

      <Text style={{fontFamily: 'Font1',fontSize: 22}}>
      <Text style={{fontFamily: 'FontBold',fontSize: 22}}>ประเทศที่ผลิด: </Text>{props.country} 
      </Text>

      <Text style={{fontFamily: 'Font1',fontSize: 22}}>
      <Text style={{fontFamily: 'FontBold',fontSize: 22}}>ราคา: </Text> {props.price} บาท
      </Text>

    </View>
    </View>
  );
}


export default function Products({ navigation }) {
  //Font Section
  const [fontsLoaded] = useFonts({
    Font1: require('../assets/fonts/FCMinimalRegular.ttf'),
    FontBold: require('../assets/fonts/FCMinimalBold.ttf'),
  });

  return (
    <ScrollView style={styles.container}>
<DetailCard
name = 'MADE IN JAPAN LIMITED HYBRID II TELECASTER®, NOIR'
image={require('../assets/products/guitar1.jpg')}
brand = 'Fender'
type = 'Hybrid II Telecaster กีต้าร์ไฟฟ้า'
country = 'ประเทศญี่ปุ่น'
price = '35,100'
 />
 <AddtoFavBtn />
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
  DetailCard: {
    height: 700,
    width: 400,
    borderRadius: 20,
    backgroundColor: 'white',
    padding: 20,
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#e31613'
  },
  ImageContainer:{
    alignSelf:'center',
    borderWidth: 1,
    borderColor: '#e31613',
    padding: 15,
    justifyContent: 'center',
    height: 430,
    width: 400,
    margin: 10
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    height: 400,
    alignSelf: 'center'
  },
  textFont: {
    fontFamily: 'Font1',
    fontSize: 40
  },
    textN: {
    fontFamily: 'Font1',
    fontSize: 18,
  },
    favButton: {
    height: 40,
    width: 350,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 20
  },
});

//#1D1E2D = light black blue
//#0D0D17 = dark black blue
//#bc110f = dark red
//#e31613 = main red
//#bc110f = light red
//#ffffff = main white
//#a5a8ac = light grey
