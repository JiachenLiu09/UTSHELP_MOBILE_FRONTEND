import React, { Component } from 'react';
import { View, Text, Image, AsyncStorage, Alert, StyleSheet, ScrollView } from 'react-native'
import { Card, ListItem, Button, Icon, TouchableWithoutFeedback, StackNavigator } from 'react-native-elements'
import { NavigationActions, StackActions } from 'react-navigation'
import moment from 'moment';

export default class BooingConfirmScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      studentId: "",
      workshopId: JSON.stringify(this.props.navigation.getParam('workshopId')),
      name: '',
      startDate: '',
      endDate: '',
      maximumPlace: '',
      placeAvailable: '',
      roomId: '',
      skillSetId: '',
      skillSetName: '',
      roomCampus: '',
      roomLevel: '',
      roomNumber: ''
    }
  }

  componentDidMount = async () => {
    await AsyncStorage.getItem('studentId').then(
      (data) => {this.setState({
        studentId: data
      })}
    )
    await fetch("http://utshelpmobileserver-env.eemrgf7eub.us-east-2.elasticbeanstalk.com:8888/workshopDetail",{
        method:'POST',
        mode: "cors",
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json',
        },
        body:JSON.stringify({
          workshopId: this.state.workshopId
        })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        name: responseJson.name,
        startDate: responseJson.startDate,
        endDate: responseJson.endDate,
        maximumPlace: responseJson.maximumPlace,
        placeAvailable: responseJson.placeAvailable,
        roomId: responseJson.roomId,
        skillSetId: responseJson.skillSetId
      })
    })
    .catch((error) => {
      console.log(error);
      throw error;
    })

    await fetch("http://utshelpmobileserver-env.eemrgf7eub.us-east-2.elasticbeanstalk.com:8888/skillSet",{
        method:'POST',
        mode: "cors",
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json',
        },
        body:JSON.stringify({
          skillSetId: this.state.skillSetId
        })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        skillSetName: responseJson.name
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

  _bookWorkshop = async () => {
    
    fetch("http://utshelpmobileserver-env.eemrgf7eub.us-east-2.elasticbeanstalk.com:8888/book",{
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
          actions: [NavigationActions.navigate({ routeName: 'HomeBooking' })],
        });
        this.props.navigation.dispatch(resetAction);
        //this.props.navigation.replace('HomeBooking');
      } else {
        Alert.alert(
          "Fail",
          'Multiple booking.',
          [{ text: "OK", onPress: () => console.log("OK Pressed!") }]
        );
      }
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',}}>
        <Text style={{ paddingBottom: 20, fontSize: 20, fontWeight: "bold"}}>Confirm Booking</Text>
        <ScrollView vertical>
          <View style={styles.component}>
            <Text style={styles.info}>Workshop name: {this.state.name}</Text>
            <Text style={styles.info}>SkillSet: {this.state.skillSetName}</Text>
            <Text style={styles.info}>Start date: {moment(parseInt(this.state.startDate)).format('YYYY-MM-DD HH:mm')}</Text>
            <Text style={styles.info}>End date: {moment(parseInt(this.state.endDate)).format('YYYY-MM-DD HH:mm')}</Text>
            <Text style={styles.info}>Available place: {this.state.placeAvailable}</Text>
            <Text style={styles.info}>Room: CB{this.state.roomCampus} Level{this.state.roomLevel} {this.state.roomNumber}</Text>
          </View>
          <Button
            title="Confirm"
            onPress={this._bookWorkshop}
          />
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