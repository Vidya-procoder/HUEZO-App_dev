import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { theme } from '../styles/theme';
import { Ionicons } from '@expo/vector-icons'; // We use Expo vector icons

// Screens
import Dashboard from '../screens/customer/Dashboard';
import Orders from '../screens/customer/Orders';
import CreateOrder from '../screens/customer/CreateOrder';
import Notifications from '../screens/customer/Notifications';
import Profile from '../screens/customer/Profile';

const Tab = createBottomTabNavigator();

export default function CustomerTabs() {
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
          if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
          else if (route.name === 'Orders') iconName = focused ? 'list' : 'list-outline';
          else if (route.name === 'Create Order') iconName = focused ? 'add-circle' : 'add-circle-outline';
          else if (route.name === 'Notifications') iconName = focused ? 'notifications' : 'notifications-outline';
          else if (route.name === 'Profile') iconName = focused ? 'person' : 'person-outline';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Dashboard} />
      <Tab.Screen name="Orders" component={Orders} />
      <Tab.Screen name="Create Order" component={CreateOrder} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
