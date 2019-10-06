import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, AsyncStorage } from 'react-native';

export default class FlatListBasics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentId: '',
      dataSource:[]
    }
  }
  componentDidMount = async () => {
    await AsyncStorage.getItem('studentId').then(
      (data) => {this.setState({
        studentId: data
      })}
    );
    fetch("http://localhost:8888/bookedWorkshops",{
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
        dataSource: responseJson
      })
    })
    .catch((error) => {
      console.log(error);
      throw error;
    })
  }
  render() {
    _extraUniqueKey =(item ,index) => { return "index"+index+item; }
    return (
      <View style={styles.container}>
        <FlatList
          data={
            this.state.dataSource
          }
          renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
