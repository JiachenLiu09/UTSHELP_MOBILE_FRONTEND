import 'package:flutter/material.dart';
import 'dart:async';
import 'package:http/http.dart';
import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';


class MyInformationPage extends StatefulWidget {
  _MyInformationPageState createState() => _MyInformationPageState();
}

class _MyInformationPageState extends State<MyInformationPage> {

  Map studentData;

  Future getData() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    String email = prefs.getString('email')??null;
    var body = {
      "email": email
    };

    Response response = await post(
      "http://localhost:8081/studentInformation", 
      body: body, 
    );
    setState(() {
      studentData = json.decode(response.body);
    });
    print("Information"+ studentData.toString());
  }

  @override
    void initState() {
      super.initState();
      getData();
    }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('My Information'),
      ),
      body: Center(
        child: Text(studentData.toString()),
      )
    );
  }
}