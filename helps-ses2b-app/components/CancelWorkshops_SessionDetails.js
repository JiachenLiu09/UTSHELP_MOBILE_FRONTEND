import React, { Component } from 'react';
import { View, Text, Image, AsyncStorage, Alert, StyleSheet, ScrollView } from 'react-native'
import { Card, ListItem, Button, Icon, TouchableWithoutFeedback, StackNavigator } from 'react-native-elements'
import { NavigationActions, StackActions } from 'react-navigation'
import moment from 'moment';

export default class SessionDetailsScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sessionId: JSON.stringify(this.props.navigation.getParam('sessionId')),
      type: '',
      date: '',
      startTime: '',
      advisorName: '',
      roomId: '',
      roomCampus: '',
      roomLevel: '',
      roomNumber: ''
    }
  }

  componentDidMount = async () => {
    await fetch("http://utshelpmobileserver-env.eemrgf7eub.us-east-2.elasticbeanstalk.com:8888/sessionDetail",{
        method:'POST',
        mode: "cors",
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json',
        },
        body:JSON.stringify({
          sessionId: this.state.sessionId
        })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        type: responseJson.type,
        date: responseJson.date,
        startTime: responseJson.startTime,
        roomId: responseJson.roomId,
        advisorName: responseJson.advisorName
      })
    })
    .catch((error) => {
      console.log(error);
      throw error;
    })

    fetch("http://utshelpmobileserver-env.eemrgf7eub.us-east-2.elasticbeanstalk.com:8888/room",{
        method:'POST',
        mode: "cors",
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json',
        },
        body:JSON.stringify({
          roomId: this.state.roomId
        })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        roomCampus: responseJson.campus,
        roomLevel: responseJson.level,
        roomNumber: responseJson.roomNumber
      })
    })
    .catch((error) => {
      console.log(error);
      throw error;
    })
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',}}>
        <Text style={{ paddingBottom: 20, fontSize: 20, fontWeight: "bold"}}>Session Detail</Text>
        <ScrollView vertical>
          <View style={styles.component}>
            <Text style={styles.info}>Date: {moment(parseInt(this.state.date)).format('YYYY-MM-DD')}</Text>
            <Text style={styles.info}>Time: {moment(parseInt(this.state.startTime)).format('HH:mm')}</Text>
            <Text style={styles.info}>Advisor: {this.state.advisorName}</Text>
            <Text style={styles.info}>Type: {this.state.type}</Text>
            <Text style={styles.info}>Room: CB{this.state.roomCampus} Level{this.state.roomLevel} {this.state.roomNumber}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  component: {
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 20,
  },
})