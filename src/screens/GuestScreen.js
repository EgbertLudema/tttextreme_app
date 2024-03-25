// GuestGameScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
// Importing game versions
import TicTacToeGame from './../components/TicTacToeGame';
import TTTExtreme from './../components/TTTExtreme';

const GuestScreen = () => {
    // State to toggle between games
    const [selectedGame, setSelectedGame] = useState('classic'); // 'classic' or 'extreme'

    return (
        // Displays classis or extreme tic tac toe based on selected game
        <View style={styles.container}>
            <View style={styles.selectionContainer}>
                <Button title="Classic Tic-Tac-Toe" onPress={() => setSelectedGame('classic')} />
                <Button title="Extreme Tic-Tac-Toe" onPress={() => setSelectedGame('extreme')} />
            </View>
            <Text style={styles.header}>{selectedGame === 'classic' ? 'Guest Tic-Tac-Toe' : 'Guest Extreme Tic-Tac-Toe'}</Text>
            {selectedGame === 'classic' ? (
                <TicTacToeGame onGameOver={(winner) => console.log(`Winner: ${winner}`)} />
            ) : (
                <TTTExtreme onGameOver={(winner) => console.log(`Winner: ${winner}`)} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectionContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    header: {
        fontSize: 20,
        marginBottom: 20,
    },
});

export default GuestScreen;