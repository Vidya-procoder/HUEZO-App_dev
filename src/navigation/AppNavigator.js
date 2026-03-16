import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Auth Screens
import Splash from '../screens/auth/Splash';
import Onboarding from '../screens/auth/Onboarding';
import Login from '../screens/auth/Login';
import RoleSelection from '../screens/auth/RoleSelection';
import CustomerLogin from '../screens/auth/CustomerLogin';
import StaffLogin from '../screens/auth/StaffLogin';
import ForgotPassword from '../screens/auth/ForgotPassword';
import OTP from '../screens/auth/OTP';
import ResetPassword from '../screens/auth/ResetPassword';

// Tab Navigators
import CustomerTabs from './CustomerTabs';
import StaffTabs from './StaffTabs';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        {/* Auth Flow */}
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="RoleSelection" component={RoleSelection} />
        <Stack.Screen name="CustomerLogin" component={CustomerLogin} />
        <Stack.Screen name="StaffLogin" component={StaffLogin} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        
        {/* Main Flows */}
        <Stack.Screen name="CustomerTabs" component={CustomerTabs} />
        <Stack.Screen name="StaffTabs" component={StaffTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
