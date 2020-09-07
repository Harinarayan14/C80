import React,{Component}from 'react';
import { DrawerItems } from '@react-navigation/drawer';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView} from 'react-native';
import firebase from 'firebase';

export default class SideBar extends Component{
    render(){
        return(
            <View>
                <View>
            <DrawerItems
            {
                ...this.props
            }
            />
            </View>
            <View>
            <TouchableOpacity style={styles.button} onPress={()=>{
                this.props.navigator.navigate("WelcomeScreen");
                firebase.auth().signOut();
            }}>
                <Text>
                    Logout
                </Text>
            </TouchableOpacity>
            </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    Drawer:{
        width:400,
        border:1,
        backgroundColor:"white",
        color:"red"
    },
    
  button:{
    width:"75%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop:20
    }
})
