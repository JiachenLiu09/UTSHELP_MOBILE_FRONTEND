const workshopDate = [
  {
    date: '23/10/19',
    room: 'CB11.00.00'
  },
  {
    date: '23/10/19',
    room: 'CB11.00.00'
  },
]

import React, { Component } from 'react';
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon, TouchableWithoutFeedback } from 'react-native-elements'
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';

export default class DateScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={flex = 1}>
          <View style={styles.container}>
            {workshopDate.map((u, i) => {
              return (
                <Card 
                  title = "Select Available Day"
                  key={i}>
                  <View style={{height: 60, flex: 1, flexDirection: 'row' }}>
                    <Button
                        style={{ width: 50, height: 50, position: 'relative', backgroundColor: 'yellow' }}
                        title={u.room}
                        disabled
                        color='yellow'
                    />
                    <Text style={{fontSize: 20, marginLeft: 30,marginTop: 5}}>{u.date}</Text>
                    <Button
                      icon={<Icon name='code' color='#ffffff' />}
                      backgroundColor='#03A9F4'
                      buttonStyle={{ borderRadius: 0, marginLeft: 40, marginRight: 0, marginBottom: 0, position: 'absolute', alignItems: 'flex-end' }}
                      onPress={() => this.props.navigation.navigate('Confirm')}
                      title='Book' 
                      />
                    </View>
                </Card>
              )
            })}
          </View>
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