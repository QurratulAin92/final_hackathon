import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Image ,TouchableOpacity, TextInput} from 'react-native';
import logo from '../../Images/logo_4.jpg';

export default function Admin(props) {
const stud_data = () => {
  props.navigation.navigate('Studentdata')
}

const comp_data = () => {
  props.navigation.navigate('Companydata')
}
  return (
    
    <View style={styles.container}>
    <View style={styles.main}>
    <Image source={logo} style={{width:50,height:50}} />
    <Text style={{color:"white",fontWeight:"bold",fontSize:20}}>Campus Recruitment System</Text>
    </View>

    <TouchableOpacity onPress={comp_data} style={{backgroundColor:"#ff9707",marginBottom:12,height:60,width:250,alignItems:'center',borderRadius:15,color:"#000080"}}><Text style={{fontSize:30}}>Company Data</Text></TouchableOpacity>
    <TouchableOpacity onPress={stud_data} style={{backgroundColor:"#ff9707",height:60,width:250,alignItems:'center',borderRadius:15,marginBottom:150,color:"#000080"}}><Text style={{fontSize:30}}>Student Data</Text></TouchableOpacity> 
      <StatusBar style="auto" />
    </View>
    
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000080',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  main:{
    flex: 1,
    backgroundColor: '#000080',
    alignItems: 'center',
 
    flexDirection:"row"
  }
});