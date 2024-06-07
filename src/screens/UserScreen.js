// src/screens/UserScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';

const UserScreen = ({ navigation }) => {
    const { user, logout } = useAuth();
    const [selectedTab, setSelectedTab] = useState('online');

    const handleLogout = () => {
        logout();
        navigation.navigate('Login');
    };

    const handleGameSelect = (gameType) => {
        const targetScreen = selectedTab === 'online' ? 'Online' : 'Local';
        let gameMode = '';
        switch (gameType) {
            case 'classic':
                gameMode = 'ClassicGame';
                break;
            case 'extreme':
                gameMode = 'ExtremeGame';
                break;
            case 'only_3':
                gameMode = 'Only_3Game';
                break;
            default:
                return;
        }
        navigation.navigate(`${targetScreen}${gameMode}`);
    };

    const getTabButtonStyle = (tab) => ({
        backgroundColor: selectedTab === tab ? '#FFFFFF' : (tab === 'online' ? '#FF5959' : '#63C6F7'),
    });

    const getContentBG = (tab) => ({
        backgroundColor: selectedTab === 'online' ? '#B1E3F8' : '#FFACA9',
    });

    const getTextStyle = (tab) => ({
        color: selectedTab === tab ? '#4D4950' : '#FFFFFF',
    });

    const getButtonStyle = (buttonType) => ({
        borderColor: selectedTab === 'online' ? '#63C6F7' : '#FF5959',
    });

    const getTabContainerStyle = () => ({
        backgroundColor: selectedTab === 'online' ? '#63C6F7' : '#FF5959',
    });

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/images/TTTXtreme_logo_black_x_v2.png')}
                style={styles.logo}
                resizeMode="contain"
            />
            <View style={[styles.content, getContentBG()]}>
                <View style={[styles.tabContainer, getTabContainerStyle()]}>
                    <TouchableOpacity
                        style={[styles.tabButton, getTabButtonStyle('online')]}
                        onPress={() => setSelectedTab('online')}
                    >
                        <Text style={[styles.font, getTextStyle('online')]}>Online</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.tabButton, getTabButtonStyle('local')]}
                        onPress={() => setSelectedTab('local')}
                    >
                        <Text style={[styles.font,getTextStyle('local')]}>Local</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.gameButtonsContainer}>
                    <TouchableOpacity
                        style={[styles.gameButton, getButtonStyle('game')]}
                        onPress={() => handleGameSelect('classic')}
                    >
                        <Text style={[styles.font, styles.gameButtonText]}>Classic</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.gameButton, getButtonStyle('game')]}
                        onPress={() => handleGameSelect('extreme')}
                    >
                        <Text style={[styles.font, styles.gameButtonText]}>Extreme</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.gameButton, getButtonStyle('game')]}
                        onPress={() => handleGameSelect('only_3')}
                    >
                        <Text style={[styles.font, styles.gameButtonText]}>Only 3</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Text style={[styles.fontSize, styles.logoutText]}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        padding: 10,
    },
    logo: {
        width: '100%',
        height: 80,
        marginBottom: 20,
    },
    content: {
        flex: 1,
        backgroundColor: '#B1E3F8',
        borderRadius: 10,
    },
    font: {
        fontFamily: 'rexlia_rg',
        fontSize: 22,
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        margin: 0,
        padding: 0,
        borderRadius: 10,
    },
    tabButton: {
        flex: 1,
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 4,
    },
    gameButtonsContainer: {
        flex: 1,
        justifyContent: 'space-evenly',
        padding: 40,
        width: '100%',
    },
    gameButton: {
        padding: 12,
        marginBottom: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 4,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
    },
    gameButtonText: {
        color: '#4D4950',
    },
    logoutButton: {
        padding: 15,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
    },
    logoutText: {
        color: 'white',
        fontSize: 16,
    },
});

export default UserScreen;
