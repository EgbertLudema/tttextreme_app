// TTTExtreme.js
import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

const initialBoardState = () => Array(9).fill(null).map(() => Array(9).fill(null));
const initialBoardStatus = () => Array(9).fill(null); // New state to track each small board's status

const TTTExtreme = ({ onGameOver }) => {
    const [boards, setBoards] = useState(initialBoardState());
    const [boardStatus, setBoardStatus] = useState(initialBoardStatus());
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [activeBoard, setActiveBoard] = useState(Array(9).fill(true));
    const [winner, setWinner] = useState(null);

    const resetGame = () => {
        setBoards(initialBoardState());
        setBoardStatus(initialBoardStatus());
        setActiveBoard(Array(9).fill(true));
        setCurrentPlayer('X');
        setWinner(null);
    };

    const checkSmallBoardWinner = (smallBoard, bigBoardIndex) => {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6],
        ];
        for (let line of lines) {
            const [a, b, c] = line;
            if (smallBoard[a] && smallBoard[a] === smallBoard[b] && smallBoard[a] === smallBoard[c]) {
                return smallBoard[a]; // Return 'X' or 'O'
            }
        }
        if (!smallBoard.includes(null)) {
            return 'D'; // Return 'D' for a draw
        }
        return null; // No winner yet
    };

    useEffect(() => {
        // Check for a winner or draw on the big board
        const result = checkBigBoardWinner();
        if (result) {
            if (result !== 'D') {
                Alert.alert('Game Over', `Player ${result} has won the game!`);
            } else {
                Alert.alert('Game Over', 'The game is a draw!');
            }
            resetGame();
        }
    }, [boardStatus]); // Dependency on boardStatus to re-evaluate after each change

    const checkBigBoardWinner = () => {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6],
        ];
        for (let line of lines) {
            const [a, b, c] = line;
            if (boardStatus[a] && boardStatus[a] === boardStatus[b] && boardStatus[a] === boardStatus[c]) {
                return boardStatus[a]; // 'X' or 'O' wins
            }
        }
        if (!boardStatus.includes(null)) {
            return 'D'; // All boards completed, but no winner
        }
        return null;
    };

    const handlePress = (bigBoardIndex, cellIndex) => {
        if (!activeBoard[bigBoardIndex] || boards[bigBoardIndex][cellIndex] || winner) return;
        const newBoards = [...boards];
        newBoards[bigBoardIndex][cellIndex] = currentPlayer;
    
        const smallBoardWinner = checkSmallBoardWinner(newBoards[bigBoardIndex], bigBoardIndex);
        const newBoardStatus = [...boardStatus];
        if (smallBoardWinner) {
            newBoardStatus[bigBoardIndex] = smallBoardWinner; // Update the status of the small board
            setBoardStatus(newBoardStatus);
        }
    
        // Update the active board logic
        const newActiveBoard = Array(9).fill(false);
        if (newBoardStatus[cellIndex]) {
            // If the board directed to is already finished, allow next move on any unfinished board
            for (let i = 0; i < newActiveBoard.length; i++) {
                if (!newBoardStatus[i]) { // If the board at index i is not finished
                    newActiveBoard[i] = true; // Allow moves on this board
                }
            }
        } else {
            newActiveBoard[cellIndex] = true; // Next player must play in the corresponding small board
        }
    
        setBoards(newBoards);
        setActiveBoard(newActiveBoard);
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    };    

    const renderSmallBoard = (smallBoard, bigBoardIndex) => {
        const backgroundColor = boardStatus[bigBoardIndex] === 'X' ? 'red' : boardStatus[bigBoardIndex] === 'O' ? 'blue' : boardStatus[bigBoardIndex] === 'D' ? 'black' : 'transparent';
        return (
            <View key={bigBoardIndex} style={[styles.smallBoard, { backgroundColor }]}>
                {smallBoard.map((cell, cellIndex) => (
                    <TouchableOpacity
                        key={cellIndex}
                        style={[styles.cell, {opacity: activeBoard[bigBoardIndex] ? 1 : 0.3}]}
                        onPress={() => handlePress(bigBoardIndex, cellIndex)}
                        disabled={!activeBoard[bigBoardIndex]}
                    >
                        <Text style={styles.cellText}>{cell}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        );
    };

    return (
        <View style={styles.board}>
            {boards.map((smallBoard, index) => renderSmallBoard(smallBoard, index))}
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
    smallBoard: {
        width: '33%',
        height: '33%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderWidth: 1,
        borderColor: '#000',
    },
    cell: {
        width: '33%',
        height: '33%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
    },
    cellText: {
        fontSize: 10,
    },
});

export default TTTExtreme;