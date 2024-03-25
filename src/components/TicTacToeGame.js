// TicTacToeGame.js
import React, { useState, useEffect } from 'react'; // Make sure to import useEffect
import { View, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

const TicTacToeGame = ({ onGameOver }) => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [winner, setWinner] = useState(null);
    const [lastWinner, setLastWinner] = useState(null);

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setWinner(null);
        // Set the next starting player based on the last game's winner (loser starts)
        setCurrentPlayer(lastWinner === 'X' ? 'O' : 'X');
    };

    // New useEffect for checking the winner
    useEffect(() => {
        const winnerCheck = checkWinner(board);
        if (winnerCheck) {
            setWinner(winnerCheck);
            setLastWinner(winnerCheck); // Update lastWinner with the current winner
            Alert.alert('Game Over', `Player ${winnerCheck} has won!`, [
                { text: "OK", onPress: resetGame }
            ]);
        } else if (!board.includes(null)) { // Check for a draw
            // Handle draw scenario
            Alert.alert('Game Over', 'The game is a draw!', [
                { text: "OK", onPress: resetGame }
            ]);
        }
    }, [board]);

    const checkWinner = () => {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6],
        ];
        for (let line of lines) {
            const [a, b, c] = line;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return null;
    };

    const handlePress = (index) => {
        if (board[index] || winner) return;
        const newBoard = [...board];
        newBoard[index] = currentPlayer;
        setBoard(newBoard);

        const winnerCheck = checkWinner(newBoard);
        if (winnerCheck) {
            setWinner(winnerCheck);
        } else {
            setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
        }
    };

    const renderCell = (index) => (
        <TouchableOpacity
            key={index}
            style={styles.cell}
            onPress={() => handlePress(index)}
        >
            <Text style={styles.cellText}>{board[index]}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.board}>
            {Array.from({ length: 9 }).map((_, index) => renderCell(index))}
        </View>
    );
};

const styles = StyleSheet.create({
    board: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 300,
        height: 300,
        margin: 'auto',
    },
    cell: {
        width: '33%',
        height: '33%',
        borderWidth: 1,
        borderColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cellText: {
        fontSize: 24,
    },
});

export default TicTacToeGame;