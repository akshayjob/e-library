import React ,{ Component } from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import * as Permissions from "expo-permissions";
import {BarCodeScanner} from "expo-barcode-scanner"

export default class TransactionScreen extends Component{
    constructor(){
        super()
        this.state = {
            domState:"normal",
            hasCameraPermissions:null,
            scanned:false,
            scannedData:""
        }
    }

    getCameraPermissions = async (domState) => {
        const{status} = await Permissions.askAsync(Permissions.CAMERA)
        this.setState({
            hasCameraPermissions:status==="granted",
            domState:domState,
            scanned:false
        })
    }
    render(){
        return(
            <View style = {styles.container}>
            <Text style = {styles.Text} >
            Transaction Screen
            </Text>
            <TouchableOpacity
                style = {[styles.button,{marginTop:25}]}
                onPress = {()=>this.getCameraPermissions("scanner")}>
                <Text>
                    Scan QR Code
                </Text>
            </TouchableOpacity>
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
   },
   button:{
       width:"43%",
       height:55,
       justifyContent:"Center",
       backgroundColor:"#f48d20",
       borderRadius:15,
   },
   buttonText:{
     fontSize:24,
     color:"#ffffff",
   }
})