// src/screens/UserScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';

const UserScreen = ({ navigation }) => {
    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout();  // Call logout to clear the user state
        navigation.navigate('Login'); // Navigate to login screen or initial screen
    };

    console.log("User data in context:", user);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome, {user.username}!</Text>
            <Text>You are now logged in.</Text>
            <Button title="Logout" onPress={handleLogout} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default UserScreen;