const users = [
    {
        date: '23/10/19',
        room: 'CB11.00.00'
    },
    {
        date: '23/10/19',
        room: 'CB11.00.00'
    },
]


import React, { Fragment } from 'react';
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon, TouchableWithoutFeedback } from 'react-native-elements'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    StatusBar,
} from 'react-native';

import { navigation } from 'react-navigation';

export default class Confirm extends React.Component {
    render() {
        return (

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',}}>
        <Text style={{ paddingBottom: 20, fontSize: 20, fontWeight: "bold"}}>Confirm Booking</Text>

        <Button
          title="Confirm"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>

        );
    }
}