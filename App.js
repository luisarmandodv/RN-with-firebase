import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import firebase from "firebase";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  componentDidMount() {
    // Initialize Firebase
    let config = {
      apiKey: "AIzaSyBzHuq7Oa1EOwlZJSOUmUWMJsmR4ERm3Mc",
      authDomain: "mytwitterclone-armando.firebaseapp.com",
      databaseURL: "https://mytwitterclone-armando.firebaseio.com",
      projectId: "mytwitterclone-armando",
      storageBucket: "mytwitterclone-armando.appspot.com",
      messagingSenderId: "1020178712723"
    };
    firebase.initializeApp(config);

    firebase
      .database()
      .ref("users")
      .on("value", data => {
        console.log(data.toJSON());
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
