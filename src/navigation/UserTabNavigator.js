import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserScreen from '../screens/UserScreen';
import ScoreboardScreen from '../screens/ScoreboardScreen';
import { useAuth } from '../context/AuthContext';
import UserHeader from './headers/UserHeader';

const Tab = createBottomTabNavigator();

const UserTabNavigator = () => {
    const { user } = useAuth();
    return (
        <Tab.Navigator>
            <Tab.Screen name="UserHome" component={UserScreen} 
                options={{ 
                    headerTitle: (props) => <UserHeader {...props}/>
                }}
            />
            <Tab.Screen name="Scoreboard" component={ScoreboardScreen} />
        </Tab.Navigator>
    );
};

export default UserTabNavigator;