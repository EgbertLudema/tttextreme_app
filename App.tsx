import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import LandingScreen from './src/screens/LandingScreen';
import MainScreen from './src/screens/MainScreen';
import { AuthProvider } from './src/context/AuthContext';
import GuestTabNavigator from './src/navigation/GuestTabNavigator';
import UserTabNavigator from './src/navigation/UserTabNavigator';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <AuthProvider>
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
