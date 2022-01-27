import React, { Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import BottomTabNavigator from './components/bottomTabNavigator';

export default class App extends Component {
  render(){
  return (
    <BottomTabNavigator/>
  );
  }
}

