import 'package:flutter/material.dart';
import 'package:uts_help/myInformation.dart';
import 'package:uts_help/workshopManagement.dart';
import 'package:uts_help/workshopSelection.dart';

class MenuPage extends StatelessWidget {
  const MenuPage({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Menu',
      theme: ThemeData(
        primarySwatch: Colors.grey
      ),
      home: BottomAppbarDemo(),
    );
  }
}

class BottomAppbarDemo extends StatefulWidget {
  BottomAppbarDemo({Key key}) : super(key: key);

  _BottomAppbarDemoState createState() => _BottomAppbarDemoState();
}

class _BottomAppbarDemoState extends State<BottomAppbarDemo> {
  int _index = 0;
  List<Widget> _eachView;

  @override
  void initState() {
    _eachView = List();
    _eachView
      ..add(MyInformationPage())
      ..add(WorkshopManagementPage());
    super.initState();
  }
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _eachView[_index],
      floatingActionButton: FloatingActionButton(
        child: Icon(
          Icons.add,
          color: Colors.white,
        ),
        onPressed: (){
          Navigator.of(context).push(
            MaterialPageRoute(
              builder: (BuildContext context){
                return WorkshopSelection();
              }
            )
          );
        },
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.centerDocked,
      bottomNavigationBar: BottomAppBar(
        color: Colors.grey,
        shape: CircularNotchedRectangle(),
        child: Row(
          mainAxisSize: MainAxisSize.max,
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: <Widget>[
            IconButton(
              icon: Icon(Icons.person),
              color: Colors.white,
              onPressed: (){
                setState(() {
                  _index = 0;
                });
              },
            ),
            IconButton(
              icon: Icon(Icons.book),
              color: Colors.white,
              onPressed: (){
                setState(() {
                  _index = 1;
                });
              },
            )
          ],
        ),
      ),
    );
  }
}