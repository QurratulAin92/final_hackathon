import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text,View,Image, StyleSheet, TouchableOpacity} from 'react-native';
import logo from '../../Images/logo_4.jpg';


function Studentdata(props){
    return(
        <View style={styles.container}>
        <View style={styles.main}>
        <Image source={logo} style={{width:50,height:50}} />
        <Text style={{color:"white",fontWeight:"bold",fontSize:20}}>Campus Recruitment System</Text>
        </View>
        
            <Text style={{color:"white",marginBottom:60,marginTop:0,fontSize:30,fontWeight:"bold"}}>Student Data</Text>
            
     <TouchableOpacity onPress={() => props.navigation.navigate('StudentDetail')} style={{backgroundColor:"white",marginBottom:12,height:40,width:220,alignItems:'center',color:"#000080"}}><Text style={{fontSize:25}}>Professionals</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => props.navigation.navigate('StudentDetail')} style={{backgroundColor:"white",marginBottom:12,height:40,width:220,alignItems:'center',color:"#000080"}}><Text style={{fontSize:22}}>Post-Graduated</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => props.navigation.navigate('StudentDetail')} style={{backgroundColor:"white",marginBottom:12,height:40,width:220,alignItems:'center', color:"#000080"}}><Text style={{fontSize:22}}>Graduated</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => props.navigation.navigate('StudentDetail')} style={{backgroundColor:"white",marginBottom:25,height:40,width:220,alignItems:'center', color:"#000080"}}><Text style={{fontSize:22}}>Under-Graduated</Text></TouchableOpacity> 

    
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#000080",
        alignItems:'center',
        justifyContent:"center"
        
    },  main:{
        flex: 1,
        backgroundColor: '#000080',
        alignItems: 'center',
     
        flexDirection:"row"
      }
}

)

export default Studentdata;