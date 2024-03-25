import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserScreen from '../screens/UserScreen';
import ScoreboardScreen from '../screens/ScoreboardScreen';

const Tab = createBottomTabNavigator();

const UserTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="UserHome" component={UserScreen} options={{ title: 'Home' }} />
            <Tab.Screen name="Scoreboard" component={ScoreboardScreen} />
        </Tab.Navigator>
    );
};

export default UserTabNavigator;