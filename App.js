import React from 'react';
import { Button, View, Text } from 'react-native';
import Main from './components/Main.js';
import Workshops from './components/Workshops.js';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Confirm from './components/Confirm.js';
import Date from './components/Main.js';


/**export default class App extends React.Component {
  render() {
    return (
      <Main />
    );
  }*/

  class HomeScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text></Text>
          <Workshops navigation={this.props.navigation}/>
          
        </View>
      );
    }
  }
  
  class DetailsScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
        </View>
      );
    }
  }

  class ConfirmScreen extends React.Component {
    render() {
      return (
        <Confirm navigation={this.props.navigation}/>
      );
    }
  }

  class DateScreen extends React.Component {
    render() {
      return (
        <Date navigation={this.props.navigation}/>
      );
    }
  }

  const RootStack = createStackNavigator(
    {
      Home: HomeScreen,
      Details: DetailsScreen,
      Confirm: ConfirmScreen,
      Date: DateScreen,
    },
    {
      initialRouteName: 'Home',
    }
  );
  
  const AppContainer = createAppContainer(RootStack);
  
  export default class App extends React.Component {
    render() {
      return <AppContainer />;
    }
  }



/** } */
