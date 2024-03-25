// src/screens/MainScreen.js
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';

const MainScreen = () => {
    // Based on the authentication status the MainScreen navigates the user to the right screen
    const navigation = useNavigation();
    const { isLoggedIn } = useAuth();

    useEffect(() => {
        if (isLoggedIn) {
            navigation.reset({
                index: 0,
                routes: [{ name: 'UserTab' }],
            });
        } else {
            navigation.reset({
                index: 0,
                routes:  [{ name: 'GuestTab' }],
            });
        }
    }, [isLoggedIn, navigation]);

    return null;
};

export default MainScreen;