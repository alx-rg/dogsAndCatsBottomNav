import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DogsScreen from './DogsScreen';
import CatsScreen from './CatsScreen';
import RandomScreen from './RandomScreen';
import { Ionicons } from 'react-native-vector-icons'


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Dogs') {
              iconName = focused ? 'paw': 'paw-outline';
            } else if (route.name === 'Cats') {
              iconName = focused ? 'logo-github' : 'logo-octocat';
            } else if (route.name === 'Random') {
              iconName = focused ? 'shuffle-outline' : 'shuffle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarActiveBackgroundColor: 'lightblue',
          tabBarInactiveBackgroundColor: 'lightgray',
        })}
      >
        <Tab.Screen name="Dogs" component={DogsScreen} />
        <Tab.Screen name="Random" component={RandomScreen} />
        <Tab.Screen name="Cats" component={CatsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
