//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
//import all the basic component we have used
 
export default class HomePage extends React.Component {
  //Home Screen to show in Home Option
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start', fontWeight: 'bold' }}>
        <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 30 }}>Upcoming Events</Text>
      </View>
  
    );
  }
}