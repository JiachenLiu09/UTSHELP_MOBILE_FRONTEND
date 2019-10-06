import React, { Component } from "react";
import { Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Profile from "./Profile";
import { Colors } from "react-native-paper";
import FlatListBasics from "./BookedWorkshopList";
import Booking from "./AddWorkshop";
import AddWorkshop from "./AddWorkshop";

const tabBarIcon = name => ({ tintColor }) => (
  <FontAwesome
    style={{ backgroundColor: "transparent" }}
    name={name}
    color={tintColor}
    size={22}
  />
);
class MyInformation extends React.Component {
    static navigationOptions = {
      tabBarIcon: tabBarIcon('user'),
      tabBarLabel: 'My Profile',
    };
    render() {
      return (
        <Profile />
      );
    }
};
class BookedWorkshops extends React.Component {
  static navigationOptions = {
    tabBarIcon: tabBarIcon('book'),
    tabBarLabel:'View my workshops'
  };
  render() {
    return (
      <FlatListBasics />
    );
  }
};
class SelectWorkshops extends React.Component {
  static navigationOptions = {
    tabBarIcon: tabBarIcon('plus'),
    tabBarLabel:'Book workshops'
  };
  render() {
    return (
      <Booking />
    );
  }
};
export default createAppContainer(
  createMaterialBottomTabNavigator({
    My: { screen: MyInformation },
    View: {screen: BookedWorkshops },
    Select: { screen: AddWorkshop }
  })
);