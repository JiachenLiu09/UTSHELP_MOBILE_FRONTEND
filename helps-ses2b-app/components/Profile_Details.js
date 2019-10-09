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
  TextInput,
  Button,
  Icon,
  Picker,
  RadioButton,
  AsyncStorage
} from 'react-native';

export default class ProfileDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileId: '',
      studentId: '',
      preferredFirstName:'',
      degree :'',
      year:'',
      status: '',
      firstLanguage: '',
      countryOfOrigin: ''
    }
  }

  _updateProfile = async () => {
    fetch("http://utshelpmobileserver-env.eemrgf7eub.us-east-2.elasticbeanstalk.com:8888/updateProfile",{
        method:'POST',
        mode: "cors",
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json',
        },
        body:JSON.stringify({
          profileId: this.state.profileId,
          preferredFirstName: this.state.preferredFirstName,
          degree: this.state.degree,
          year: this.state.year,
          status: this.state.status,
          firstLanguage: this.state.firstLanguage,
          countryOfOrigin: this.state.countryOfOrigin
        })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      if(responseJson.inf == 'success') {
        this.props.navigation.replace('Detail');
        Alert.alert(
          "Success",
          'Update successfully!',
          [{ text: "OK", onPress: () => console.log("OK Pressed!") }]
        );
      } else {
        Alert.alert(
          "Fail",
          'Cannot update.',
          [{ text: "OK", onPress: () => console.log("OK Pressed!") }]
        );
      }
    })
    .catch((error) => {
      console.log(error);
    })
  }

  componentDidMount = async () => {
    await AsyncStorage.getItem('studentId').then(
      (data) => {this.setState({
        studentId: data
      })}
    )
    fetch("http://utshelpmobileserver-env.eemrgf7eub.us-east-2.elasticbeanstalk.com:8888/studentProfile",{
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
        profileId: responseJson.profileId,
        preferredFirstName: responseJson.preferredFirstName,
        degree :responseJson.degree,
        year:responseJson.year,
        status: responseJson.status,
        firstLanguage: responseJson.firstLanguage,
        countryOfOrigin: responseJson.countryOfOrigin
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.profilePic}
          source={{
            uri:
              'http://cf.ltkcdn.net/socialnetworking/images/std/168796-281x281-girl-swear-icon.png',
          }}
        />

        <View style={styles.Component}>
          <Text style={styles.info}>{'\n'}</Text>
          <Text style={styles.info}>{'\n'}</Text>
          <Text style={styles.info}>{'\n'}</Text>
        </View>

        <ScrollView vertical>
          <View style={styles.bodyContent}>
            <View style={styles.body}>
              <TouchableOpacity style={styles.name}>
                <Text style={styles.label}>Preferred First Name: </Text>
                <TextInput
                  placeholder={this.state.preferredFirstName}
                  value={this.state.preferredFirstName}
                  onChangeText={preferredFirstName => this.setState({ preferredFirstName })}
                  style={{
                    height: 30,
                    width: 160,
                    borderColor: '#ffffff',
                    textAlign: 'left',
                    marginTop: 10,
                     borderWidth: 0,
                    fontSize: 16,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.name}>
                <Text style={styles.label}>Degree: </Text>
                <TextInput
                  placeholder={this.state.degree}
                  value={this.state.degree}
                  onChangeText={degree => this.setState({ degree })}
                  style={{
                    height: 30,
                    width: 160,
                    borderColor: '#ffffff',
                    textAlign: 'left',
                    marginTop: 10,
                    borderWidth: 0,
                    fontSize: 16,
                  }}
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.name}>
                <Text style={styles.label}>Year: </Text>
                <TextInput
                  placeholder={this.state.year}
                  value={this.state.year}
                  onChangeText={year => this.setState({ year })}
                  style={{
                    height: 30,
                    width: 160,
                    borderColor: '#ffffff',
                    textAlign: 'left',
                    marginTop: 10,
                    borderWidth: 0,
                    fontSize: 16,
                  }}
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.name}>
                <Text style={styles.label}>Status: </Text>
                <TextInput
                  placeholder={this.state.status}
                  value={this.state.status}
                  onChangeText={status => this.setState({ status })}
                  style={{
                    height: 30,
                    width: 160,
                    borderColor: '#ffffff',
                    textAlign: 'left',
                    marginTop: 10,
                    borderWidth: 0,
                    fontSize: 16,
                  }}
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.name}>
                <Text style={styles.label}>First Language: </Text>
                <TextInput
                  placeholder={this.state.firstLanguage}
                  value={this.state.firstLanguage}
                  onChangeText={firstLanguage => this.setState({ firstLanguage })}
                  style={{
                    height: 30,
                    
                    width: 160,
                    borderColor: '#ffffff',
                    textAlign: 'left',
                    marginTop: 10,
                    borderWidth: 0,
                    fontSize: 16,
                  }}
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.name}>
                <Text style={styles.label}>Country of Origin: </Text>
                <TextInput
                  placeholder={this.state.countryOfOrigin}
                  value={this.state.countryOfOrigin}
                  onChangeText={countryOfOrigin => this.setState({ countryOfOrigin })}
                  style={{
                    height: 30,
                    width: 160,
                    borderColor: '#ffffff',
                    textAlign: 'left',
                    marginTop: 10,
                    borderWidth: 0,
                    fontSize: 16,
                  }}
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={this._updateProfile}>
                <Text style={styles.buttonText}> Update My Details </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        <Text>Navigation Bar</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    marginTop: 25,
    height: 40,
    borderColor: '#EFF0F1',
    borderTopWidth: 1,
    borderBottomWidth: 2,
    backgroundColor: 'white',
  },

  headerText: {
    fontSize: 18,
    color: 'black',
    alignSelf: 'center',
    marginTop: 10,
    marginLeft: 70,
    fontWeight: 'bold',
  },

  back:{
    color: '#0E4BEB',
    fontSize: 16,
    marginLeft: 30,
    fontWeight: 'bold',
  },

  Component: {
    marginTop: 35,
    marginLeft: 0,
    marginBottom: 65,
  },

  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: 'red',
    marginBottom: 10,
    position: 'absolute',
    marginTop: 95,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  container: {
    height: 700,
    backgroundColor: '#ffffff',
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 2,
    marginLeft: 0,
    borderTopColor: '#EFF0F1',
  },

  body: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderTopWidth: 0,
    marginLeft: 0,
    borderTopColor: '#EFF0F1',
    
  },

  info: {
    fontSize: 16,
    color: 'black',
    marginTop: 10,
    textAlign: 'left',
    alignItems: 'flex-start',
    marginBottom: 10,
  },

  label: {
    fontSize: 16,
    color: '#0E4BEB',
    fontWeight: 'bold',
    marginTop: 14,
    textAlign: 'left',
    marginBottom: 10,
  },

  name: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 0,
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#0E4BEB',
    width: 180,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: '#0E4BEB',
    marginBottom: 20,
    marginTop: 23,
    borderRadius: 5,
    marginLeft: 55,
  },

  head:{
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 0,
  },
  buttonText: {
    fontFamily: 'Arial',
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});
