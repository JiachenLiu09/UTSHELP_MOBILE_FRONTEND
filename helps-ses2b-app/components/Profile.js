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
  AsyncStorage
} from 'react-native';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName:'',
      lastName:'',
      studentId:''
    }
  }
  componentDidMount = async () => {
    await AsyncStorage.getItem('studentId').then(
      (data) => {this.setState({
        studentId: data
      })}
    )
    fetch("http://localhost:8888/studentInformation",{
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
              'http://cf.ltkcdn.net/socialnetworking/images/std/168796-281x281-girl-swear-icon.png',
          }}
        />

        <View style={styles.component}>
        <Text style={styles.profileText}>Student Id: {this.state.studentId}</Text>
          <Text style={styles.profileText}>First name: {this.state.firstName}</Text>
          <Text style={styles.profileText}>Last name: {this.state.lastName}</Text>
         
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
                    'https://www.codec.ie/wp-content/uploads/2019/04/upcoming-workshops-image.png',
                }}
                style={{ height: 150, width: 405 }}
              />
            </TouchableHighlight>
              <TouchableHighlight
                onPress={() =>
                  Linking.openURL(
                    //CHANGE URL
                    'https://www.uts.edu.au/current-students/support/helps'
                  )
                }>
              <Image
                source={{
                  uri:
                    'https://i.pinimg.com/originals/c9/f2/9c/c9f29c52404625beeb9ccfa3be8fe57a.png',
                }}
                style={{ height: 150, width: 405 }}
              />
            </TouchableHighlight>
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
