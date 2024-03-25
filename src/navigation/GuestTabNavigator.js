import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GuestScreen from '../screens/GuestScreen';
import ScoreboardScreen from '../screens/ScoreboardScreen';
import LoginScreen from '../screens/LoginScreen';

const Tab = createBottomTabNavigator();

const GuestTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="GuestHome" component={GuestScreen} options={{ title: 'Home' }} />
            <Tab.Screen name="Scoreboard" component={ScoreboardScreen} />
            <Tab.Screen name="Login" component={LoginScreen} />
        </Tab.Navigator>
    );
};

export default GuestTabNavigator;
