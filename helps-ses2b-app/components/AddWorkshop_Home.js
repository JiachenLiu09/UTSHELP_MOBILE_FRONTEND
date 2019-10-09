import React, { Component }from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeBooking from './AddWorkshop_SelectWorkshops';
import ConfirmPage from './AddWorkshop_BookingConfirm';

class Workshops extends React.Component {
  render() {
    return (
      <HomeBooking navigation={this.props.navigation}/>
    );
  }
}

class ConfirmScreen extends React.Component {
  render() {
    return (
      <ConfirmPage navigation={this.props.navigation}/>
    );
  }
}

const BookingStack = createStackNavigator(
  {
    HomeBooking: Workshops,
    Confirm: ConfirmScreen
  },
  {
    initialRouteName: 'HomeBooking',
    headerBackTitleVisible: null
  },
  {
    navigationOptions:{
        header:null,
  },
}
)

export default createAppContainer(BookingStack);