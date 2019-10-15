import React, { Component } from 'react';
import {View, Text, Image, AsyncStorage, DeviceEventEmitter} from 'react-native';
import {
  Card,
  //ListItem,
  Button,
  Icon,
  //TouchableWithoutFeedback,
} from 'react-native-elements';
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';
import ActionButton from 'react-native-action-button';
import moment from 'moment';

export default class BookedWorkshopsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentId:'',
      bookedWorkshops:[],
      sessions: [],
      refresh: ''
    }
  }
  componentDidMount = async () => {
    this.deEmitter = DeviceEventEmitter.addListener('left', (a) => {
      this.setState({
        refresh: a
      })
    });

    await AsyncStorage.getItem('studentId').then(
      (data) => {this.setState({
        studentId: data
      })}
    )
    await fetch("http://utshelpmobileserver-env.eemrgf7eub.us-east-2.elasticbeanstalk.com:8888/bookedWorkshops",{
        method:'POST',
        mode: "cors",
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json',
        },
        body:JSON.stringify({
          studentId:this.state.studentId
        })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        bookedWorkshops: responseJson
      })
    })
    .catch((error) => {
      console.log(error);
      throw error;
    })
    fetch("http://utshelpmobileserver-env.eemrgf7eub.us-east-2.elasticbeanstalk.com:8888/sessions",{
        method:'POST',
        mode: "cors",
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json',
        },
        body:JSON.stringify({
          studentId:this.state.studentId
        })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        sessions: responseJson
      })
    })
    .catch((error) => {
      console.log(error);
      throw error;
    })
  }
    render() {
      return (
        <View style={styles.container}>
          <Text style={{ paddingBottom: 20, fontSize: 20, fontWeight: "bold"}}>Sessions</Text>
          <ScrollView style={{height: 300}}>
            <View style={styles.container}>
              {this.state.sessions.map((u, i) => {
                return (
                  <Card
                    key={i}
                    title= {u.type}
                    containerStyle={{padding: 0, paddingBottom: 25}}>
                    <View style={{height: 60, flex: 1}}>
                      <Button
                        icon={<Icon name="code" color="#ffffff" />}
                        buttonStyle={{
                          borderRadius: 0,
                          marginLeft: 0,
                          marginRight: 0,
                          marginBottom: 0,
                        }}
                        onPress={() => this.props.navigation.navigate('SessionDetails', {
                          sessionId: u.sessionId
                        })}
                        title="View Details"
                      />
                    </View>
                  </Card>
                );
              })}</View>
          </ScrollView>
          <View>
            <Text> </Text>
          </View>
          <Text style={{ paddingBottom: 20, fontSize: 20, fontWeight: "bold"}}>Workshops</Text>
          <ScrollView style={(flex = 1)}>
            <View style={styles.container}>
              {this.state.bookedWorkshops.map((u, i) => {
                return (
                  <Card
                    key={i}
                    title= {u.name}
                    containerStyle={{padding: 0, paddingBottom: 25}}>
                    <View style={{height: 60, flex: 1}}>
                      <Text>
                        Place available: {u.placeAvailable}
                      </Text>
                      <Text>
                        Time: {moment(parseInt(u.startDate)).format('YYYY-MM-DD HH:mm')} - {moment(parseInt(u.endDate)).format('YYYY-MM-DD HH:mm')}
                      </Text>
                      <Button
                        icon={<Icon name="code" color="#ffffff" />}
                        buttonStyle={{
                          borderRadius: 0,
                          marginLeft: 0,
                          marginRight: 0,
                          marginBottom: 0,
                        }}
                        onPress={() => this.props.navigation.navigate('CancellingConfirm', {
                          workshopId: u.workShopId
                        })}
                        title="Cancel Now"
                      />
                    </View>
                  </Card>
                );
              })}</View>
          </ScrollView>
          <ActionButton
          buttonColor='rgba(0,255,0,0.4)'
          onPress={() => { this.props.navigation.replace('HomeCanceling')}}
          renderIcon={() => (<View style={styles.actionButtonView}><Icon name='loop' style={styles.actionButtonIcon} />
          <Text style={styles.actionButtonText}>Refresh</Text>
          </View>)}
        />
          <View style={styles.footer}></View>
        </View>
      );
    }
  }
    
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    },
    actionButtonView:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      color: 'green'
    },
    actionButtonIcon: {
      fontSize: 20,
      height: 22,
      color: 'white',
    },
    actionButtonText: {
      fontSize: 14,
      color: 'white',
    }
  });
