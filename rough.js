import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Image ,TouchableOpacity} from 'react-native';
import logo from '../../Images/logo_4.jpg';


export default function Home() {
  return (
    
    <View >
     <View style={styles.main}> 
    <Image source={logo} style={{width:50,height:50}} />
    <Text style={{color:"white",fontWeight:"bold",fontSize:22}}>Custom Recruitement System</Text>
    </View>
   
    </View>
    
      
    
  );
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
 
    flexDirection:"row"
  }
});