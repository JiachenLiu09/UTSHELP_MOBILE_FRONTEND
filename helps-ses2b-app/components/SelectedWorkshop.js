import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  AsyncStorage
} from 'react-native';

export default class SelectedWorkshop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading:true,
            data: []
        }
    }
    componentDidMount = async () => {
        await AsyncStorage.getItem('studentId').then(
          (data) => {this.setState({
            studentId: data
          })}
        )
        fetch("http://localhost:8888/selectedWorkshops",{
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
            console.log(responseJson);
            this.setState({
                isLoading: false,
                dataSource: this.state.data.concat(responseJson)
              });
        })
        .catch((error) => {
          console.log(error);
        })
    }

    render(){

        if(this.state.isLoading){
          return(
            <View style={{flex: 1, padding: 20}}>
              <ActivityIndicator/>
            </View>
          )
        }
    
        return(
          <View style={{flex: 1, paddingTop:20}}>
            <FlatList
                data={this.state.data}
                renderItem={this.renderWorkshop}
                keyExtractor={item => item.id}
            />
          </View>
        );
      }

      renderWorkshop({ item }) {
        // { item }是一种“解构”写法，请阅读ES2015语法的相关文档
        // item也是FlatList中固定的参数名，请阅读FlatList的相关文档
        return (
          <View>
            <View>
              <Text>{item.name}</Text>
              <Text>{item.placeAvailable}</Text>
            </View>
          </View>
        );
      }

}
