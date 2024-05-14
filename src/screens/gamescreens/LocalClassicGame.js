import React from 'react';
import { View, StyleSheet } from 'react-native';
import TicTacToeGame from './../../components/TicTacToeGame';

const LocalClassicGame = () => {
    return (
        <View style={styles.container}>
            <TicTacToeGame onGameOver={(winner) => console.log(`Winner: ${winner}`)} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default LocalClassicGame;
