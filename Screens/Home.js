import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import SearchBar from '../components/SearchBar';

function MainSection() {
  return (
    <TouchableOpacity style={styles.MainSection}>
      <Image
        style={styles.MainSection}
        source={require('../assets/bannerHome.jpg')}
      />
    </TouchableOpacity>
  );
}

function FavouriteBtn() {
  const [isFilled, setIsFilled] = useState(false);

  const handleIconPress = () => {
    setIsFilled(!isFilled);
  };

  return (
    <TouchableOpacity onPress={handleIconPress}>
      {isFilled ? (
        <Ionicons name="heart" size={28} color="red" />
      ) : (
        <Ionicons name="heart-outline" size={28} color="red" />
      )}
    </TouchableOpacity>
  );
}

function RecProductSection({ navigation, ...props }) {
  const btnProductDetails = () => {
    navigation.navigate('ProductDetails');
  };

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.categoryContainer}>
      <TouchableOpacity
        style={styles.RecProductSection}
        onPress={btnProductDetails}>
        <FavouriteBtn />
        <View style={styles.ImageContainer}>
          <Image
            style={styles.productImage}
            source={props.image1}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.textBold}>{props.name1}</Text>
        <Text style={styles.textN}>{props.price1} บาท</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.RecProductSection}>
        <FavouriteBtn />
        <View style={styles.ImageContainer}>
          <Image
            style={styles.productImage}
            source={props.image2}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.textBold}>{props.name2}</Text>
        <Text style={styles.textN}>{props.price2} บาท</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.RecProductSection}>
        <FavouriteBtn />
        <View style={styles.ImageContainer}>
          <Image
            style={styles.productImage}
            source={props.image3}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.textBold}>{props.name3}</Text>
        <Text style={styles.textN}>{props.price3} บาท</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.RecProductSection}>
        <FavouriteBtn />
        <View style={styles.ImageContainer}>
          <Image
            style={styles.productImage}
            source={props.image4}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.textBold}>{props.name4}</Text>
        <Text style={styles.textN}>{props.price4} บาท</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function ViewMoreBtn() {
  const [btnPressView, setBtnPressView] = useState(false);
  const onView = () => {
    setBtnPressView(true);
  };
  const offView = () => {
    setBtnPressView(false);
  };
  return (
    <TouchableOpacity
      style={[
        styles.moreButton,
        { backgroundColor: btnPressView ? '#bc110f' : '#e31613' },
      ]}
      activeOpacity={0.9}
      onPressIn={onView}
      onPressOut={offView}>
      <Text style={styles.textN, {color: 'white',fontSize:20,fontFamily: 'Font1'}}> ดูเพิ่มเติม </Text>
    </TouchableOpacity>
  );
}

function NewProductSection(props) {

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.categoryContainer}>
      <TouchableOpacity style={styles.NewProductSection}>
        <FavouriteBtn />
        <View style={styles.ImageContainer}>
          <Image
            style={styles.productImage2}
            source={props.image1}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.textBold}>{props.name1}</Text>
        <Text style={styles.textN}>{props.price1} บาท</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.NewProductSection}>
        <FavouriteBtn />
        <View style={styles.ImageContainer}>
          <Image
            style={styles.productImage2}
            source={props.image2}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.textBold}>{props.name2}</Text>
        <Text style={styles.textN}>{props.price2} บาท</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.NewProductSection}>
        <FavouriteBtn />
        <View style={styles.ImageContainer}>
          <Image
            style={styles.productImage2}
            source={props.image3}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.textBold}>{props.name3}</Text>
        <Text style={styles.textN}>{props.price3} บาท</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default function Home({ navigation }) {
  //Font Section
  const [fontsLoaded] = useFonts({
    Font1: require('../assets/fonts/FCMinimalRegular.ttf'),
    FontBold: require('../assets/fonts/FCMinimalBold.ttf'),
  });

  return (
    <ScrollView style={styles.container}>
    <View style = {{alignSelf: 'center'}}>
    <SearchBar />
    </View>
      <MainSection />
      <View style={styles.topicIcon}>
        <Text style={styles.textLabel}>แนะนำ</Text>
        <MaterialIcons
          style={styles.icon}
          name="recommend"
          color={'#e31613'}
          size={35}
        />
      </View>
      <RecProductSection
        navigation={navigation}
        image1={require('../assets/products/guitar1.jpg')}
        name1="MADE IN JAPAN LIMITED HYBRID II TELECASTER®, NOIR"
        price1="72,000"
        image2={require('../assets/products/guitar2.jpg')}
        name2="American Professional II Stratocaster® Left-Hand"
        price2="35,000"
        image3={require('../assets/products/amp12.png')}
        name3="MINI TONEMASTER® AMPLIFIER"
        price3="8,900"
        image4={require('../assets/products/guitar3.jpg')}
        name4="MONTEREY STANDARD"
        price4="30,000"
      />
      <ViewMoreBtn />
      <View style={styles.topicIcon}>
        <Text style={styles.textLabel}>มาใหม่</Text>
        <MaterialIcons
          style={styles.icon}
          name="fiber-new"
          color={'#e31613'}
          size={35}
        />
      </View>
      <NewProductSection
      image1={require('../assets/products/drum3.jpg')}
      name1="Mars Maple 5-Piece Rock Shell Pack - MM529SF"
      price1="50,000"
      image2={require('../assets/products/headphone.jpg')}
      name2="Bose Noise Cancelling Headphones 700"
      price2="13,500"
      image3={require('../assets/products/piano.jpg')}
      name3="Clavinova Digital Piano CLP-765GP"
      price3="159,000"
      />
      <ViewMoreBtn />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  topicIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 5,
  },
  MainSection: {
    alignSelf: 'center',
    height: 200,
    width: 375,
    backgroundColor: '#bc110f',
    borderRadius: 10,
    marginBottom: 10,
  },
  productImage: {
    height: 180,
    alignSelf: 'center',
  },
  productImage2:{
    height: 150,
    width: 150,
    alignSelf:'center',
    justifyContent:'center'

  },
  moreButton: {
    height: 40,
    width: 300,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    alignSelf: 'center',
    marginBottom: 20
  },
  ImageContainer: {
    height: 190,
    justifyContent:'center'
  },
  RecProductSection: {
    padding: 5,
    height: 310,
    width: 165,
    backgroundColor: 'white',
    margin: 17,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e31613',
  },
  NewProductSection: {
    padding: 5,
    height: 310,
    width: 165,
    backgroundColor: 'white',
    margin: 17,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e31613',
  },
  categoryContainer: {
    marginHorizontal: 0,
  },
  textLabel: {
    fontFamily: 'FontBold',
    fontSize: 32,
    marginLeft: 17,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textBold: {
    fontFamily: 'FontBold',
    fontSize: 18,
  },
  textN: {
    fontFamily: 'Font1',
    fontSize: 18,
  },
});

//#1D1E2D = light black blue
//#0D0D17 = dark black blue
//#FF1915 = dark red
//#e31613 = main red
//#bc110f = light red
//#ffffff = main white
//#ebebeb = light grey
