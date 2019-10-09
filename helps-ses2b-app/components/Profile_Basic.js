import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  Linking,
  AsyncStorage,
  DeviceEventEmitter
} from 'react-native';

export default class Basic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName:'',
      lastName:'',
      studentId:'',
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
    fetch("http://utshelpmobileserver-env.eemrgf7eub.us-east-2.elasticbeanstalk.com:8888/studentInformation",{
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
        firstName:responseJson.firstName,
        lastName:responseJson.lastName,
        studentId:responseJson.studentId
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>My Profile</Text>
        </View>
        <Image
          style={styles.profilePic}
          source={{
            uri:
              'http://cf.ltkcdn.net/socialnetworking/images/std/168796-281x281-girl-swear-icon.png'
          }}
        />
        <View style={styles.component}>
          <Text style={styles.info}>Student ID: {this.state.studentId}</Text>
          <Text style={styles.info}>First name: {this.state.firstName}</Text>
          <Text style={styles.info}>Last name: {this.state.lastName}</Text>
        </View>
        <ScrollView vertical>
          <View style={styles.bodyContent}>
            <Text style={styles.info}>
              Hello and welcome to UTS HELPS! {'\n'}
            </Text>
            <TouchableHighlight
              onPress={() =>
                Linking.openURL(
                  'https://www.uts.edu.au/current-students/support/helps'
                )
              }>
              <Image
                source={{
                  uri:
                    'https://www.codec.ie/wp-content/uploads/2019/04/upcoming-workshops-image.png'
                }}
                style={{ height: 150, width: 405 }}
              />
            </TouchableHighlight>
              <Text></Text>
              <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Detail')}>
                <Text style={styles.buttonText}> View Details </Text>
              </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    height: 40,
    borderColor: '#EFF0F1',
    borderTopWidth: 1,
    borderBottomWidth: 2,
    backgroundColor: 'white',
  },

  headerText: {
    fontSize: 18,
    color: 'blue',
    alignSelf: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },

  component: {
    marginTop: 10,
    marginLeft: 120,
    marginBottom: 20,
  },

  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: 'grey',
    marginBottom: 10,
    alignSelf: 'flex-start',
    position: 'absolute',
    marginTop: 75,
    marginLeft: 20,
  },
  container: {
    height: 700,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#0E4BEB",
    width: 250,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "#0E4BEB",
    marginBottom: 20,
    marginTop: 23
  },
  buttonText: {
    fontFamily: "Arial",
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold"
  },
  body: {
    marginTop: 10,
    marginBottom: 0,
    fontSize: 16,
    fontWeight: 'bold',
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
    borderTopWidth: 2,
    borderTopColor: '#EFF0F1',
  },

  profileText: {
    fontSize: 14,
    color: 'grey',
    fontWeight: 'bold',
    marginTop: 10,
  },

  info: {
    fontSize: 15,
    color: 'blue',
    fontWeight: 'bold',
    marginTop: 10,
  },
});