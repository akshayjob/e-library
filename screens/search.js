import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class SearchScreen extends Component{
    render(){
        return(
            <View style = {styles.container}>
            <Text style = {styles.Text} >
                Search Screen
            </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
   container:{
       flex : 1,
       justifyContent:"center",
       alignItems:"center",
       backgroundColor:"#5653d4"
   },
   Text:{
       color:"#ffffff",
       fontSize:30,
   }
})