const users = [
  {
    date: '23/10/19',
    room: 'CB11.00.00',
  },
  {
    date: '23/10/19',
    room: 'CB11.00.00',
  },
];

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

import React, {Fragment} from 'react';
import {View, Text, Image} from 'react-native';
import {
  Card,
  ListItem,
  Button,
  Icon,
  TouchableWithoutFeedback,
} from 'react-native-elements';
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';
import {withNavigation} from 'react-navigation';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class Workshops extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={(flex = 1)}>
            <View style={styles.container}>
          {workshops.map((u, i) => {
            return (
              <Card
                title= {u.title}
                image={require('../images/pic2.jpg')}
                containerStyle={{padding: 0, paddingBottom: 25}}>
                <View key={i} style={{height: 60, flex: 1}}>
                  <Text style={{marginBottom: 10}}>
                    {u.description}
                  </Text>
                  <Button
                    icon={<Icon name="code" color="#ffffff" />}
                    buttonStyle={{
                      borderRadius: 0,
                      marginLeft: 0,
                      marginRight: 0,
                      marginBottom: 0,
                    }}
                    onPress={() => this.props.navigation.navigate('Date')}
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
