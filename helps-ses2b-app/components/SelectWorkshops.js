const workshops = [
    { 
      title: 'Workshop 1',  
      category: '',    
      date: '23/10/19',
      room: 'CB11.00.00',
      description: 'A Little about the workshop. Please click below to book into a session.'
    },
    {
      title: 'Workshop 2',  
      category: '',    
      date: '23/10/19',
      room: 'CB11.00.00',
      description: 'A Little about the workshop. Please click below to book into a session.'
    },
];
    
const users1 = [
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
];

import React, { Component } from 'react';
import {View, Text, Image} from 'react-native';
import {
  Card,
  //ListItem,
  Button,
  Icon,
  StackNavigator
  //TouchableWithoutFeedback,
} from 'react-native-elements';
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';

export default class Workshops extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource:[]
    }
  }
  componentDidMount = async () => {
    fetch("http://localhost:8888/workshops",{
        method:'GET',
        mode: "cors",
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json',
        }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        dataSource: responseJson
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
          <ScrollView style={(flex = 1)}>
            <View style={styles.container}>
              {this.state.dataSource.map((u, i) => {
                return (
                  <Card
                    key={i}
                    title= {u.name}
                    //image={require('../images/pic2.jpg')}
                    containerStyle={{padding: 0, paddingBottom: 25}}>
                    <View style={{height: 60, flex: 1}}>
                      <Text style={{marginBottom: 10}}>
                        {u.placeAvailable}
                      </Text>
                      <Button
                        icon={<Icon name="code" color="#ffffff" />}
                        buttonStyle={{
                          borderRadius: 0,
                          marginLeft: 0,
                          marginRight: 0,
                          marginBottom: 0,
                        }}
                        onPress={() => this.props.navigation.navigate('Confirm', {
                          workshopId: u.workShopId
                        })}
                        title="Book Now"
                      />
                    </View>
                  </Card>
                );
              })}</View>
          </ScrollView>
          <View style={styles.footer}></View>
        </View>
      );
    }
  }
    
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });