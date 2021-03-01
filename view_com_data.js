import React from 'react';
import {StyleSheet, View,Text,Image} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import logo from '../../Images/logo_4.jpg';


function CompanyDetail(){
    return(

    
        <View style={styles.container}>

        <View style={styles.main}>
        <Image source={logo} style={{width:50,height:50}} />
        <Text style={{color:"white",fontWeight:"bold",fontSize:20}}>Campus Recruitment System</Text>
        </View>
      
        <View>
            <Text style={{fontSize:30, color:'white'}}>
               Company Detail
            </Text>
        </View>

        <View style={{ width:"100%"}}>        
        <View style ={styles.card1}>
           <Text>
               Name = Uniliver International
           </Text>
           <Text>
              Required Qualification = ACCA
           </Text>
           <Text>
             Email_Id = uniliver@gmail.com
           </Text>
           <Text>
              Contact no: 0300-2365789
           </Text>
       </View>

       <View style ={styles.card2}>
           <Text>
               Name = Textile Industry
           </Text>
           <Text>
              Required Qualification = Graduation
           </Text>
           <Text>
             Email_Id = textile34@gmail.com
           </Text>
           <Text>
              Contact no: 0300-7654679
           </Text>
       </View>

       <View style ={styles.card3}>
           <Text>
               Name = Mid Size Company
           </Text>
           <Text>
              Required Qualification = Intermediate
           </Text>
           <Text>
             Email_Id = taha23@gmail.com
           </Text>
           <Text>
              Contact no: 0300-2365789
           </Text>
       </View>

       <View style ={styles.card4}>
           <Text>
               Name = Islamic Trust
           </Text>
           <Text>
              Required Qualification = Intermediate
           </Text>
           <Text>
             Email_Id= hamza92@gmail.com
           </Text>
           <Text>
              Contact no: 0300-5436789
           </Text>
       </View>
       </View>
        
        </View>
        

    )
}

const styles = StyleSheet.create({
    container:{
        
        backgroundColor:"#000080",
        alignItems:'center',
        // justifyContent:"center"

    },
    card1:{
    
        fontSize:40,
        
        color:'black',
        backgroundColor:'lightgrey',
        borderColor:'black',
        borderStyle:'solid',
        borderBottomColor:'black',
        height:90,
       
        
    
   } ,
   card2:{
    fontSize:40,
    
    color:'black',
    backgroundColor:'white',
    borderColor:'black',
    borderStyle:'solid',
    borderBottomColor:'black',
    height:90
   },
   card3:{
    fontSize:40,
    
    color:'black',
    backgroundColor:'lightgrey',
    borderColor:'black',
    borderStyle:'solid',
    borderBottomColor:'black',
    height:90
   },
   card4:{
    fontSize:40,
    
    color:'black',
    backgroundColor:'white',
    borderColor:'black',
    borderStyle:'solid',
    borderBottomColor:'black',
    height:90
   }
}

)

export default CompanyDetail;