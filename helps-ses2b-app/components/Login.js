import React, { Component } from "react";
import {
  Alert,
  Button,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  StyleSheet,
  AsyncStorage,
  Linking,
  Image,
} from "react-native";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentId: "",
      password: ""
    }
    this._loginSuccessPushApp = this._loginSuccessPushApp.bind(this);
    this._signInAsyncAction = this._signInAsyncAction.bind(this);
  }

  _signInAsyncAction = async () => {
    
    fetch("http://localhost:8888/login",{
        method:'POST',
        mode: "cors",
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json',
        },
        body:JSON.stringify({
            studentId:this.state.studentId,
           password:this.state.password,
        })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      if(responseJson.studentId != 0){
        this._loginSuccessPushApp();
      } else {
        Alert.alert(
          "Fail",
          'Invalid email or password.',
          [{ text: "OK", onPress: () => console.log("OK Pressed!") }]
        );
      }
    })
    .catch((error) => {
      console.log(error);
    })
  }

  _loginSuccessPushApp = async () =>{
    await AsyncStorage.setItem('studentId', this.state.studentId);
    await AsyncStorage.setItem('password', this.state.password);
    AsyncStorage.getItem('studentId').then(
      (message) => {console.log(message)}
    )
    this.props.navigation.navigate('HomePage');
   }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={{
            uri:
              "https://media.cdn.gradconnection.com/uploads/ba2c4acf-f0f8-45b9-a605-0bd41ba615ec-UTS_Logo_Vertical_Lockup_RGB_BLK.png"
          }}
        />

        <Text style={styles.titleText}>HELPS</Text>

        <TextInput
          value={this.state.studentId}
          keyboardType="number-pad"
          onChangeText={studentId => this.setState({ studentId })}
          placeholder="Student ID"
          placeholderTextColor="grey"
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          placeholder={"Password"}
          secureTextEntry={true}
          placeholderTextColor="grey"
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={this._signInAsyncAction}
        >
          <Text style={styles.buttonText}> LOGIN </Text>
        </TouchableOpacity>

        <Text
          style={styles.linkText}
          onPress={() =>
            Linking.openURL(
              "https://myaccount.uts.edu.au/password-reset-verify"
            )
          }
        >
          Forgot password?
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  },

  logo: {
    width: 100,
    height: 100,
    alignSelf: "flex-start",
    marginLeft: 150
  },

  titleText: {
    fontFamily: "Arial",
    fontSize: 45,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    marginBottom: 40
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

  linkText: {
    fontFamily: "Arial",
    fontSize: 14,
    alignItems: "center",
    color: "blue",
    textDecorationLine: "underline"
  },

  input: {
    width: 250,
    fontFamily: "Arial",
    fontSize: 20,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "grey",
    marginVertical: 10
  }
});
