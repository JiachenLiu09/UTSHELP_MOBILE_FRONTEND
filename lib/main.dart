import 'dart:async';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:uts_help/login.dart';
import 'package:uts_help/menu.dart';

void main() {
  runApp(new MaterialApp(
    title: 'UTS HELP',
    theme: new ThemeData(
        brightness: Brightness.light,
        backgroundColor: Colors.white,
    ),
    home: new SplashScreen(),
    routes: <String, WidgetBuilder>{
      '/login': (BuildContext context) => new Login(),
      '/menu': (BuildContext context) => new MenuPage()
    },
  ));
}

class SplashScreen extends StatefulWidget {
  @override
  _SplashScreenState createState() => new _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  startTime() async {
    var _duration = new Duration(seconds: 3);
    return new Timer(_duration, navigationPage);
  }

  void navigationPage() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    String email = prefs.getString('email')??null;
    String password = prefs.getString('password')??null;
    if(email != null && password != null){
      print(email);
      print(password);
      //if the information is correct, go to the menu page
      //fake data
      if(false)
        Navigator.of(context).pushReplacementNamed('/menu');
      else
        Navigator.of(context).pushReplacementNamed('/login');
    }
    else
      Navigator.of(context).pushReplacementNamed('/login');
  }

  @override
  void initState() {
    super.initState();
    startTime();
  }

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      body: new Center(
        child: Text(
          'UTS HELP',
          style: TextStyle(fontSize: 42.0),
        ),
      )
    );
  }
}

