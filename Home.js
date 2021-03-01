import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text,View,Image, StyleSheet, TouchableOpacity} from 'react-native';
import logo from '../../Images/logo_4.jpg';



function Home(props) {
  return(
    <View style={styles.container}>
       <View style={styles.main}>
       <Image source={logo} style={{width:80,height:70,marginTop:70,marginRight:220,}} />
       <Text style={{color:"white",marginLeft:10,fontWeight:"bold",fontSize:40,marginTop:10}}>Campus Recruitment System</Text>
    
       </View>
       <TouchableOpacity onPress={() => props.navigation.navigate('Login')} style={{backgroundColor:"white",marginBottom:120,height:50,width:290,alignItems:'center',borderRadius:15}}><Text style={{ color:"#000080",fontSize:40}}>Get Started</Text></TouchableOpacity>
    
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000080',
    alignItems: 'center',
    
    
  },
  main:{
    flex: 1,
    backgroundColor: '#000080',
    alignItems: 'center',
 
    // flexDirection:"row"
  }
});

export default Home;