import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Button, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from 'react-native-vector-icons';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation'
​
// You can import from local files
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import Profile from './components/Profile';
​
// or any pure javascript modules available in npm
const HomeStack = createStackNavigator(
 {
   Home: { screen: HomePage },
  },
  {
    //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#0303BF',
      },
      headerTintColor: '#FFFFFF',
      title: 'UTS HELPS',
      //Header title
    },
  }
);
​
const BookingStack = createStackNavigator(
  {
    Booking: { screen: BookingPage },
  },
  {
    //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#0303BF',
      },
      headerTintColor: '#FFFFFF',
      title: 'UTS HELPS',
      //Header title
    },
  }
);
​
const ProfileStack = createStackNavigator(
  {
    Profile: { screen: Profile},
  },
  {
    //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#0303BF',
      },
      headerTintColor: '#FFFFFF',
      title: 'UTS HELPS',
      //Header title
    },
  }
);
​
const App = createBottomTabNavigator(
  {
    //Defination of Navigaton bottom options
    Home: { screen: HomeStack },
    Bookings: { screen: BookingStack },
    Profile: {screen: ProfileStack},
  },
  {
    //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
        } else if (routeName === 'Bookings') {
          iconName = `ios-book${focused ? '' : '-outline'}`;
        } else if (routeName === 'Profile'){
          iconName = `ios-person${focused ? '' : '-outline'}`;
        }
​
        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#0303BF',
      inactiveTintColor: 'gray',
    },
  }
);
//For React Navigation 2.+ need to export App only
//export default App;
//For React Navigation 3.+
export default createAppContainer(App);