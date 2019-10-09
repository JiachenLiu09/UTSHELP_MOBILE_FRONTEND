import React, { Component }from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Basic from './Profile_Basic';
import ProfileDetails from './Profile_Details';

class Pro_Basic extends React.Component {
  render() {
    return (
      <Basic navigation={this.props.navigation}/>
    );
  }
}

class Pro_Details extends React.Component {
  render() {
    return (
      <ProfileDetails navigation={this.props.navigation}/>
    );
  }
}
  

const ProfileStack = createStackNavigator(
  {
    Basic : Pro_Basic,
    Detail: Pro_Details
  },
  {
    initialRouteName: 'Basic'
  }
)

export default createAppContainer(ProfileStack);