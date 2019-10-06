import React, { Component }from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeBooking from './SelectWorkshops';
import DateSelect from './DateSelect';
import ConfirmPage from './Confirm';

class Workshops extends React.Component {
  render() {
    return (
      <HomeBooking navigation={this.props.navigation}/>
    );
  }
}

class DateScreen extends React.Component {
  render() {
    return (
      <DateSelect navigation={this.props.navigation}/>
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
    DateSelect: DateScreen,
    Confirm: ConfirmScreen
  },
  {
    initialRouteName: 'HomeBooking'
  }
)

export default createAppContainer(BookingStack);