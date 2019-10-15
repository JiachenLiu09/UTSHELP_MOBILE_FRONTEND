import React, { Component }from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import BookedWorkshopsPage from './CancelWorkshops_BookedWorkshopList';
import CancellingConfirmScreen from './CancelWorkshops_CancellingConfirm';
import SessionDetailsScreen from './CancelWorkshops_SessionDetails';

class Workshops extends React.Component {
  render() {
    return (
      <BookedWorkshopsPage navigation={this.props.navigation}/>
    );
  }
}

class CancellingConfirm extends React.Component {
  render() {
    return (
      <CancellingConfirmScreen navigation={this.props.navigation}/>
    );
  }
}

class SessionDetails extends React.Component {
  render() {
    return (
      <SessionDetailsScreen navigation={this.props.navigation}/>
    );
  }
}

const BookingStack = createStackNavigator(
  {
    HomeCanceling: Workshops,
    CancellingConfirm: CancellingConfirm,
    SessionDetails: SessionDetails
  },
  {
    initialRouteName: 'HomeCanceling'
  }
)

export default createAppContainer(BookingStack);