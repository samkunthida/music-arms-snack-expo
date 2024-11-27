import * as React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

//import Screens
import Login from './Screens/Login';
import Register from './Screens/Register';
import Home from './Screens/Home';
import Products from './Screens/Products';
import Favourite from './Screens/Favourite';
import Review from './Screens/Review';
import Profile from './Screens/Profile';
import ProductDetails from './Screens/ProductDetails';

//import Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//import fonts
import { useFonts } from 'expo-font';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomeStack"
            component={HomeStack}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetails}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

function HomeStack() {
  const [fontsLoaded] = useFonts({
    Font1: require('./assets/fonts/FCMinimalRegular.ttf'),
  });

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#e31613',
        inactiveTintColor: 'gray',

        labelStyle: {
          fontFamily: 'Font1',
          fontSize: 16,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'หน้าหลัก',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Product"
        component={Products}
        options={{
          tabBarLabel: 'สินค้า',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="pricetags" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'โปรไฟล์',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#e31613',
    padding: 0,
  },
});

//#1D1E2D = light black blue
//#0D0D17 = dark black blue
//#FF1915 = dark red
//#e31613 = main red
//#bc110f = light red
//#ffffff = main white
//#ebebeb = light grey

      // <Tab.Screen
      //   name="Favourite"
      //   component={Favourite}
      //   options={{
      //     tabBarLabel: 'ถูกใจ',
      //     headerShown: false,
      //     tabBarIcon: ({ color, size }) => (
      //       <Ionicons name="heart" color={color} size={size} />
      //     ),
      //   }}
      // />
