import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import LandingScreen from './src/screens/LandingScreen';
import MainScreen from './src/screens/MainScreen';
// Imports AuthProvider, a context provider for authentication state across the app.
import { AuthProvider } from './src/context/AuthContext';
import GuestTabNavigator from './src/navigation/GuestTabNavigator';
import UserTabNavigator from './src/navigation/UserTabNavigator';

// Creates a stack navigator object to manage the navigation stack.
const Stack = createNativeStackNavigator();

function App() {
    return (
        // Auth wraps the entire app to use the authentication state across the app
        <AuthProvider>
            {/* 
            * The NavigationContainer manages the navigation tree and contains the Stack.Navigator,
            * which defines the navigation between different screens of the app. The initial route
            * is set to "Landing", indicating the first screen to be displayed upon app launch. 
            */}
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Landing">
                    <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="GuestTab" component={GuestTabNavigator} options={{ headerShown: false }} />
                    <Stack.Screen name="UserTab" component={UserTabNavigator} options={{ headerShown: false }} />
                    {/* Always available, decides dynamically what to display */}
                    <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </AuthProvider>
    );
}

export default App;