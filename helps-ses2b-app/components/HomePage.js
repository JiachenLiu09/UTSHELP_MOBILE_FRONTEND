import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AddWorkshop from "./AddWorkshop_Home";
import CancelWorkshops from "./CancelWorkshops_Home";
import Profile_Home from "./Profile_Home";

const tabBarIcon = name => ({ tintColor }) => (
  <FontAwesome
    style={{ backgroundColor: "transparent" }}
    name={name}
    color={tintColor}
    size={22}
  />
);
class Profile extends React.Component {
    static navigationOptions = {
      tabBarIcon: tabBarIcon('user'),
      tabBarLabel: 'My Profile',
    };
    render() {
      return (
        <Profile_Home />
      );
    }
};
class Cancel extends React.Component {
  static navigationOptions = {
    tabBarIcon: tabBarIcon('book'),
    tabBarLabel:'View my workshops'
  };
  render() {
    return (
      <CancelWorkshops />
    );
  }
};
class Book extends React.Component {
  static navigationOptions = {
    tabBarIcon: tabBarIcon('plus'),
    tabBarLabel:'Book workshops'
  };
  render() {
    return (
      <AddWorkshop />
    );
  }
};

const HomeTab = createBottomTabNavigator({
    My: { screen: Profile },
    View: {screen: Cancel },
    Select: { screen: Book }
  }
);

export default createAppContainer(HomeTab);