import 'package:flutter/material.dart';
import 'dart:async';
import 'package:http/http.dart' as http;
import 'dart:convert';

class WorkshopSelection extends StatefulWidget {
  _WorkshopSelectionState createState() => _WorkshopSelectionState();
}

class _WorkshopSelectionState extends State<WorkshopSelection> {

  Map workshopData;
  List workshopList;

  Future getData() async {
    http.Response response = await http.get("http://localhost:8081/workshopList");
    workshopData = json.decode(response.body);
    setState(() {
      workshopList = workshopData["data"];
    });
    debugPrint(workshopList.toString());
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
        title: Text('Select Workshop'),
      ),
      body: ListView.builder(
        itemCount: workshopList == null ? 0 : workshopList.length,
        itemBuilder: (BuildContext context, int index) {
          return Card(
            child: Row(
              children: <Widget>[
                Text("${workshopList[index]["name"]} ${workshopList[index]["description"]}")
              ],
            ),
          );
        },
      )
    );
  }
}