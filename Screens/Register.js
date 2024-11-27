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
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');

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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.LogoSection}>
          <Image style={styles.Logo} source={require('../assets/Logo.png')} />
        </View>
        <Text style={{alignSelf: 'center', fontFamily: 'FontBold', fontSize: 34,marginBottom: 25, color: '#0D0D17'}}>สร้างบัญชี
         </Text>
         <View>
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
          </View>
        
        <View>
          <Text style={styles.inputLabel}>อีเมล</Text>
          <View style = {styles.InputContainer}> 
          <TextInput
            style={styles.inputBox}
            onChangeText={setEmail}
            placeholder='อีเมล'
            placeholderTextColor= "white"
          />
          <View style = {[styles.InputIcon,{paddingHorizontal:10}]}> 
          <FontAwesome name="envelope" size={24} color = {'#e31613'}/>
          </View>
          </View>
          </View>

        <View>
          <Text style={styles.inputLabel}>รหัสผ่าน</Text>
          <View style = {styles.InputContainer}> 
          <TextInput
            style={styles.inputBox}
            onChangeText={setPassword}
            placeholder='รหัสผ่าน'
            placeholderTextColor= "white"
          />
          <View style = {styles.InputIcon}> 
          <FontAwesome name="lock" size={24} color = {'#e31613'}/>
          </View>
          </View>
          </View>

        <View>
          <Text style={styles.inputLabel}>ยืนยันรหัสผ่าน</Text>
          <View style = {styles.InputContainer}> 
          <TextInput
            style={styles.inputBox}
            onChangeText={setConfirmPassword}
            placeholder='รหัสผ่าน'
            placeholderTextColor= "white"
          />
          <View style = {styles.InputIcon}> 
          <FontAwesome name="lock" size={24} color = {'#e31613'}/>
          </View>
          </View>
          </View>

          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: btnPressReg ? '#bc110f' : '#e31613' },
            ]}
            activeOpacity={0.9}
            onPressIn={onReg}
            onPressOut={offReg}
            onPress={btnRegister}>
            <Text style={styles.buttonText}> สมัครสมาชิก </Text>
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
    padding: 0,
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
  button: {
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontFamily: 'Font1',
    fontSize: 22,
    color: 'white',
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
//#bc110f = dark red
//#e31613 = main red
//#bc110f = light red
//#ffffff = main white
//#ebebeb = light grey
