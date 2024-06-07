import React, { useContext } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { ScoreboardContext } from '../context/ScoreboardContext';

const ScoreboardScreen = () => {
    const { scoreboard, loading } = useContext(ScoreboardContext);

    const renderItem = ({ item }) => {
        const wins = Number(item.wins);
        const losses = Number(item.losses);
        const draws = Number(item.draws);
        const totalGames = wins + losses + draws;
        const winPercent = ((wins / totalGames) * 100).toFixed(2);

        return (
            <View style={styles.row}>
                <Text style={styles.cell}>{item.username}</Text>
                <Text style={styles.cell}>{wins}</Text>
                <Text style={styles.cell}>{losses}</Text>
                <Text style={styles.cell}>{draws}</Text>
                <Text style={styles.cell}>{totalGames}</Text>
                <Text style={styles.cell}>{winPercent}%</Text>
            </View>
        );
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerCell}>Username</Text>
                <Text style={styles.headerCell}>Wins</Text>
                <Text style={styles.headerCell}>Losses</Text>
                <Text style={styles.headerCell}>Draws</Text>
                <Text style={styles.headerCell}>Total Games</Text>
                <Text style={styles.headerCell}>Win%</Text>
            </View>
            <FlatList
                data={scoreboard}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingBottom: 8,
    },
    headerCell: {
        flex: 1,
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        paddingVertical: 8,
    },
    cell: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 5,
        margin: 5,
    },
});

export default ScoreboardScreen;