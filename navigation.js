
import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "../screens/Home";
import Studentdata from '../screens/studentdata';
import Login from '../screens/login';
import Companydata from "../screens/Companydata";
import Admin from "../screens/Admin"
import StudentDetail from "../screens/view_stu_data";
import CompanyDetail from "../screens/view_com_data";

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Studentdata" component={Studentdata} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Companydata" component={Companydata} />
        <Stack.Screen name="Admin" component={Admin} />
        <Stack.Screen name="CompanyDetail" component={CompanyDetail} />
        <Stack.Screen name="StudentDetail" component={StudentDetail} />

      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
  
