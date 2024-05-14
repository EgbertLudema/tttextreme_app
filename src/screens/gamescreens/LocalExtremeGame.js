import React from 'react';
import { View, StyleSheet } from 'react-native';
import TTTExtreme from './../../components/TTTExtreme';

const LocalExtremeGame = () => {
    return (
        <View style={styles.container}>
            <TTTExtreme onGameOver={(winner) => console.log(`Winner: ${winner}`)} />
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

export default LocalExtremeGame;
