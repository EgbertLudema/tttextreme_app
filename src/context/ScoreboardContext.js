import React, { createContext, useState, useEffect } from 'react';

export const ScoreboardContext = createContext();

export const ScoreboardProvider = ({ children }) => {
    const [scoreboard, setScoreboard] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchScoreboard = async () => {
        try {
            const response = await fetch('https://tttextreme.com/api/fetch_scoreboard.php');
            const json = await response.json();
            console.log('API response:', json); // Add this line to log the API response

            if (json.success) {
                setScoreboard(json.data);
                console.log('Scoreboard data:', json.data); // Add this line to log the scoreboard data
            } else {
                setError(json.message);
                console.error('Error fetching scoreboard:', json.message);
            }
        } catch (error) {
            setError(error.message);
            console.error('Error fetching scoreboard:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchScoreboard();
    }, []);

    return (
        <ScoreboardContext.Provider value={{ scoreboard, loading, error }}>
            {children}
        </ScoreboardContext.Provider>
    );
};