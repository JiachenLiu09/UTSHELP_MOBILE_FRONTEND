import React, { Component } from 'react';
import { View, Text, Image, AsyncStorage, Alert } from 'react-native'
import { Card, ListItem, Button, Icon, TouchableWithoutFeedback, StackNavigator } from 'react-native-elements'
import { NavigationActions, StackActions } from 'react-navigation'

export default class CancellingConfirmScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      studentId: "",
      workshopId: JSON.stringify(this.props.navigation.getParam('workshopId'))
    }
  }

  componentDidMount = async () => {
    await AsyncStorage.getItem('studentId').then(
      (data) => {this.setState({
        studentId: data
      })}
    )
  }

  _bookWorkshop = async () => {
    
    fetch("http://utshelpmobileserver-env.eemrgf7eub.us-east-2.elasticbeanstalk.com:8888/cancel",{
        method:'POST',
        mode: "cors",
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json',
        },
        body:JSON.stringify({
            studentId: this.state.studentId,
            workshopId: this.state.workshopId
        })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      if(responseJson.inf == 'success') {
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'HomeCanceling' })],
        });
        this.props.navigation.dispatch(resetAction);
      }
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',}}>
        <Text style={{ paddingBottom: 20, fontSize: 20, fontWeight: "bold"}}>Confirm Cancelling</Text>
          <Button
            title="Cancel"
            onPress={this._bookWorkshop}
          />
      </View>
    );
  }
}