// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import LandingScreen from './src/screens/LandingScreen';
import UserScreen from './src/screens/UserScreen';
import MainScreen from './src/screens/MainScreen';
import OnlineClassicGame from './src/screens/gamescreens/OnlineClassicGame';
import OnlineExtremeGame from './src/screens/gamescreens/OnlineExtremeGame';
import OnlineOnly_3Game from './src/screens/gamescreens/OnlineOnly_3Game';
import LocalClassicGame from './src/screens/gamescreens/LocalClassicGame';
import LocalExtremeGame from './src/screens/gamescreens/LocalExtremeGame';
import LocalOnly_3Game from './src/screens/gamescreens/LocalOnly_3Game';
import GuestTabNavigator from './src/navigation/GuestTabNavigator';
import UserTabNavigator from './src/navigation/UserTabNavigator';
import { AuthProvider } from './src/context/AuthContext';
import { ScoreboardProvider } from './src/context/ScoreboardContext';

const Stack = createNativeStackNavigator();

function App() {
    return (
        // Auth wraps the entire app to use the authentication state across the app
        <AuthProvider>
            <ScoreboardProvider>
                <NavigationContainer>
                    {/* 
                    * The NavigationContainer manages the navigation tree and contains the Stack.Navigator,
                    * which defines the navigation between different screens of the app. The initial route
                    * is set to "Landing", indicating the first screen to be displayed upon app launch. 
                    */}
                    <Stack.Navigator initialRouteName="Landing">
                        <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="Register" component={RegisterScreen} />
                        <Stack.Screen name="Login" component={LoginScreen} />
                        <Stack.Screen name="GuestTab" component={GuestTabNavigator} options={{ headerShown: false }} />
                        <Stack.Screen name="UserTab" component={UserTabNavigator} options={{ headerShown: false }} />
                        <Stack.Screen name="UserScreen" component={UserScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="OnlineClassicGame" component={OnlineClassicGame} />
                        <Stack.Screen name="OnlineExtremeGame" component={OnlineExtremeGame} />
                        <Stack.Screen name="OnlineOnly_3Game" component={OnlineOnly_3Game} />
                        <Stack.Screen name="LocalClassicGame" component={LocalClassicGame} />
                        <Stack.Screen name="LocalExtremeGame" component={LocalExtremeGame} />
                        <Stack.Screen name="LocalOnly_3Game" component={LocalOnly_3Game} />
                    </Stack.Navigator>
                </NavigationContainer>
            </ScoreboardProvider>
        </AuthProvider>
    );
}

export default App;
