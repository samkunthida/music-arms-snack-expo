import * as React from 'react';
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import Constants from 'expo-constants';
import { FontAwesome } from '@expo/vector-icons';

export default function Login({ navigation }) {
  //Font Section
  const [fontsLoaded] = useFonts({
    Font1: require('../assets/fonts/FCMinimalRegular.ttf'),
    FontBold: require('../assets/fonts/FCMinimalBold.ttf')
  });

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [btnPressLogin, setBtnPressLogin] = useState(false);
  const onLogin = () => {
    setBtnPressLogin(true);
  };
  const offLogin = () => {
    setBtnPressLogin(false);
  };

  const [btnPressReg, setBtnPressReg] = useState(false);
  const onReg = () => {
    setBtnPressReg(true);
  };
  const offReg = () => {
    setBtnPressReg(false);
  };

  const btnLogin = () => {
    navigation.navigate('HomeStack');
  };

  const btnRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <View style={styles.LogoSection}>
          <Image style={styles.Logo} source={require('../assets/Logo.png')} />
        </View>
        <Text style={{alignSelf: 'center', fontFamily: 'FontBold', fontSize: 34,marginBottom: 25, color: '#0D0D17'}}> เข้าสู่ระบบ </Text>
        <View>
          <Text style={styles.inputLabel}>ชื่อผู้ใช้</Text>
          <View style = {styles.InputContainer}> 
          <TextInput
            style={styles.inputBox}
            onChangeText={setUsername}
            placeholder='ชื่อผู้ใช้'
            placeholderTextColor= "white"
          />
          <View style = {styles.InputIcon}> 
          <FontAwesome name="user" size={24} color = {'#e31613'}/>
          </View>
          </View>
          <View>
            <Text style={styles.inputLabel}>รหัสผ่าน</Text>
          </View>
          <View style = {styles.InputContainer}> 
          <TextInput
            style={styles.inputBox}
            onChangeText={setPassword}
            placeholder='รหัสผ่าน'
            placeholderTextColor= "white"
            secureTextEntry
          />
          <View style = {styles.InputIcon}> 
          <FontAwesome name="lock" size={24} color = {'#e31613'}/>
          </View>
          </View>
          <TouchableOpacity
            style={[
              styles.button1,
              { backgroundColor: btnPressLogin ? '#bc110f' : '#e31613' },
            ]}
            activeOpacity={0.9}
            onPressIn={onLogin}
            onPressOut={offLogin}
            onPress={btnLogin}>
            <Text style={styles.buttonText1}> เข้าสู่ระบบ </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button2,
              { backgroundColor: btnPressReg ? '#fffff' : '#fffff' },
            ]}
            activeOpacity={0.9}
            onPressIn={onReg}
            onPressOut={offReg}
            onPress={btnRegister}>
            <Text style={styles.buttonText2}> สร้างบัญชีใหม่ </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.textBtnSection}>
            <Text style={styles.textBtn}> ลืมรหัสผ่าน?</Text>
          </TouchableOpacity>
        </View>
    </ScrollView>
    </KeyboardAvoidingView>
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
  inputBox: {
    fontFamily: 'Font1',
    fontSize: 26,
    paddingLeft: 50,
    marginBottom: 20,
    height: 45,
    width: 350,
    borderBottomWidth: 1.5,
    borderColor: '#e31613',
    borderRadius: 5,
    backgroundColor: 'white',
  },
  inputLabel: {
    fontFamily: 'Font1',
    fontSize: 24,
    marginBottom: 10,
  },
  LogoSection: {
    alignItems: 'center',
  },
  Logo: {
    width: 350,
    height: 73.5,
    marginBottom: 60,
    marginTop: 30,
  },
  button1: {
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  button2: {
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#e31613',
  },
  buttonText1: {
    fontFamily: 'Font1',
    fontSize: 22,
    color: 'white',
  },
  buttonText2: {
    fontFamily: 'Font1',
    fontSize: 22,
    color: '#e31613',
  },
  textBtnSection:{
    alignItems: 'center',
    marginTop: 25,
  },
  textBtn: {
    fontFamily: 'Font1',
    color: '#e31613',
    fontSize: 22,
    textDecorationLine: 'underline',
  },
  InputContainer: {
    
  },
    InputIcon: {
    position: 'absolute',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    bottom: 20,
  },
});

//#1D1E2D = light black blue
//#0D0D17 = dark black blue
//#FF1915 = dark red
//#e31613 = main red
//#bc110f = light red
//#ffffff = main white
//#ebebeb = light grey
