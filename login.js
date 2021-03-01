import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View , Image ,TouchableOpacity,ScrollView, TextInput} from 'react-native';
import logo from '../../Images/logo_4.jpg';
import firebase from "../config/firebase"

export default function Login(props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signup =() => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    
    .then((result)=>{  
     alert("Your account is created successfully")
     props.navigation.navigate("Studentdata")

    
    })
   .catch((error)=> {
   const errorCode = error.code;
   const errorMessage = error.message;
   alert(errorMessage)
   })
 
  }  
  const complogin = () => { 
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((result) => {
      alert("user login successfully") 
  props.navigation.navigate('Studentdata')
  
})
.catch((error) => {
  var errorCode = error.code;
  var errorMessage = error.message;

  alert(errorMessage)
});
}


const studlogin = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((result) => {
      alert("user login successfully") 
  props.navigation.navigate('Companydata')
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
  
      alert(errorMessage)
    });
}

const adminlogin = () => {
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((result) => {
    alert("user login successfully") 
  props.navigation.navigate('Admin')
})
.catch((error) => {
  var errorCode = error.code;
  var errorMessage = error.message;

  alert(errorMessage)
});
}

  return (
    
    <View style={styles.container}>
      
    <View style={styles.main}>
    <Image source={logo} style={{width:50,height:50}} />
    <Text style={{color:"white",fontWeight:"bold",fontSize:20}}>Campus Recruitment System</Text>
    </View>
    <ScrollView> 
    <TextInput placeholder="Enter Your Email-id" onChangeText={(e)=>setEmail(e)} style={{height:50,width:280,backgroundColor:"white",marginTop:20,marginBottom:10}}/>
    
    <TextInput placeholder="Enter Your Password" secureTextEntry={true} onChangeText={(e)=>setPassword(e)} style={{height:50,width:280,backgroundColor:"white",marginBottom:50}}/>
     <View style={{alignItems:"center"}}>
     <TouchableOpacity onPress={signup} style={{backgroundColor:"yellow",marginBottom:12,height:40,width:220,alignItems:'center',borderRadius:15}}><Text style={{fontSize:25}}>Sign-up</Text></TouchableOpacity>
    <TouchableOpacity onPress={adminlogin} style={{backgroundColor:"#ff9707",marginBottom:12,height:38,width:200,alignItems:'center',borderRadius:15}}><Text style={{fontSize:22}}>Login As Admin</Text></TouchableOpacity>
    <TouchableOpacity onPress={complogin} style={{backgroundColor:"#ff9707",marginBottom:12,height:38,width:200,alignItems:'center',borderRadius:15}}><Text style={{fontSize:22}}>Login As Company</Text></TouchableOpacity>
    <TouchableOpacity onPress={studlogin} style={{backgroundColor:"#ff9707",marginBottom:25,height:38,width:200,alignItems:'center',borderRadius:15}}><Text style={{fontSize:22}}>Login As Student</Text></TouchableOpacity> 
    </View>
    </ScrollView>
      
    <StatusBar style="auto" />
 
    </View>
    
    
  )}
  ;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000080',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:30
  },
  main:{
    flex: 1,
    backgroundColor: '#000080',
    alignItems: 'center',
 
    flexDirection:"row",
    marginBottom:15
  }
});