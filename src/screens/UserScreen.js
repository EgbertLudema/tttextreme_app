// src/screens/UserScreen.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';

const UserScreen = ({ navigation }) => {
    const { user, logout } = useAuth();
    const [selectedTab, setSelectedTab] = useState('online');

    const handleLogout = () => {
        logout();
        navigation.navigate('Login');
    };

    const handleGameSelect = (gameType) => {
        if (selectedTab === 'online') {
            if (gameType === 'classic') {
                navigation.navigate('OnlineClassicGame');
            } else {
                navigation.navigate('OnlineExtremeGame');
            }
        } else if (selectedTab === 'local') {
            if (gameType === 'classic') {
                navigation.navigate('LocalClassicGame');
            } else {
                navigation.navigate('LocalExtremeGame');
            }
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome, {user.username}!</Text>
            <View style={styles.tabContainer}>
                <Button
                    title="Online"
                    onPress={() => setSelectedTab('online')}
                    color={selectedTab === 'online' ? 'blue' : 'gray'}
                />
                <Button
                    title="Local"
                    onPress={() => setSelectedTab('local')}
                    color={selectedTab === 'local' ? 'red' : 'gray'}
                />
            </View>
            <View style={styles.gameButtonsContainer}>
                <Button
                    title="Classic Game"
                    onPress={() => handleGameSelect('classic')}
                    color={selectedTab === 'online' ? 'blue' : 'red'}
                />
                <Button
                    title="Extreme Game"
                    onPress={() => handleGameSelect('extreme')}
                    color={selectedTab === 'online' ? 'blue' : 'red'}
                />
            </View>
            <Button title="Logout" onPress={handleLogout} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 20,
    },
    gameButtonsContainer: {
        marginBottom: 20,
    },
});

export default UserScreen;