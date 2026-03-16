import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { theme } from '../styles/theme';
import { Ionicons } from '@expo/vector-icons';

// Screens
import Dashboard from '../screens/staff/Dashboard';
import Orders from '../screens/staff/Orders';
import CreateOrder from '../screens/staff/CreateOrder';
import Notifications from '../screens/staff/Notifications';
import Profile from '../screens/staff/Profile';

const Tab = createBottomTabNavigator();

export default function StaffTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        headerStyle: { backgroundColor: theme.colors.background, shadowColor: 'transparent', elevation: 0, borderBottomWidth: 1, borderBottomColor: theme.colors.border },
        headerTintColor: theme.colors.primary,
        headerTitleStyle: { fontWeight: 'bold' },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textLight,
        tabBarStyle: { backgroundColor: theme.colors.background, borderTopColor: theme.colors.border },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Dashboard') iconName = focused ? 'grid' : 'grid-outline';
          else if (route.name === 'Orders') iconName = focused ? 'receipt' : 'receipt-outline';
          else if (route.name === 'Create Order') iconName = focused ? 'add-circle' : 'add-circle-outline';
          else if (route.name === 'Notifications') iconName = focused ? 'notifications' : 'notifications-outline';
          else if (route.name === 'Profile') iconName = focused ? 'person' : 'person-outline';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Orders" component={Orders} />
      <Tab.Screen name="Create Order" component={CreateOrder} options={{ title: 'New Order' }} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
