import 'package:flutter/material.dart';

class WorkshopManagementPage extends StatefulWidget {
  _WorkshopManagementPageState createState() => _WorkshopManagementPageState();
}

class _WorkshopManagementPageState extends State<WorkshopManagementPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('My Workshop'),
      ),
      body: Center(
        child: Text('My WorkShop'),
      )
    );
  }
}