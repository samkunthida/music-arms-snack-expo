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
import { MaterialIcons } from '@expo/vector-icons';

function ProfileImage({image, name}){


  
  return(
    <View style = {styles.ProfileContainer}>
    <View style = {styles.ProfileImage}>
    <Image source={image} style={styles.image} />
    </View>
      <Text style = {styles.TextName}>คุณ {name}</Text>
     </View>
  );
}






export default function Profile({ navigation }) {
  //Font Section
  const [fontsLoaded] = useFonts({
    Font1: require('../assets/fonts/FCMinimalRegular.ttf'),
    FontBold: require('../assets/fonts/FCMinimalBold.ttf'),
  });

   const btnLogout = () => {
     navigation.navigate('Login');
   };

function Menu(){


  return(
    <View> 
<TouchableOpacity style={styles.menuf}>
<View style={styles.topicIcon}>
        <MaterialIcons
          name="account-circle"
          color={'#e31613'}
          size={35}
        />
        <Text style={styles.textLabel}>บัญชีผู้ใช้</Text>
      </View>
    </TouchableOpacity>
<TouchableOpacity style={styles.menu}>
<View style={styles.topicIcon}>
        <MaterialIcons
          name="settings"
          color={'#e31613'}
          size={35}
        />
        <Text style={styles.textLabel}>ตั้งค่า</Text>
      </View>
    </TouchableOpacity>
<TouchableOpacity style={styles.menu}>
<View style={styles.topicIcon}>
<MaterialIcons
          name="help"
          color={'#e31613'}
          size={35}
        />
        <Text style={styles.textLabel}>ฝ่ายสนับสนุน</Text>
      </View>
    </TouchableOpacity>
<TouchableOpacity style={styles.menue} onPress={btnLogout}>
<View style={styles.topicIcon}>
        <MaterialIcons
          name="logout"
          color={'#e31613'}
          size={35}
        />
        <Text style={styles.textLabel}>ออกจากระบบ</Text>
      </View>
    </TouchableOpacity>
</View>
  )
}

  return (
    <ScrollView contentContainerStyle={styles.container} horizontal={false} >
          <ProfileImage navigation={navigation} name = "MHON" image={require('../assets/cat3d.jpg')}/>
          <Menu />
      </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  ProfileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#e31613',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  TextName: {
    marginTop: 10,
    fontFamily: 'FontBold',
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 30,
  },
  ProfileContainer:{
    alignItems: 'center',
  },
  menu:{
    height: 60,
    width: 415,
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: '#e31613',
    justifyContent:'center',
    borderBottomWidth:0
  },
    menuf:{
    height: 60,
    width: 420,
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: '#e31613',
    justifyContent:'center',
    borderBottomWidth:0
  },
    menue:{
    height: 60,
    width: 420,
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: '#e31613',
    justifyContent:'center',
  },
    topicIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
    textLabel: {
    fontFamily: 'Font1',
    fontSize: 20,
    color: '#e31613',
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: 10
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth:1,
    borderColor:'#e31613'
  },
});

//#1D1E2D = light black blue
//#0D0D17 = dark black blue
//#bc110f = dark red
//#e31613 = main red
//#bc110f = light red
//#ffffff = main white
//#ebebeb = light grey
