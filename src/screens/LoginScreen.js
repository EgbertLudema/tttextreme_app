// src/screens/LoginScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '996887310749-kb9k74v0j3old4f8d7keb665mesb86j2.apps.googleusercontent.com',
            offlineAccess: true,
        });
    }, []);

    const handleLogin = async () => {
        try {
            const response = await fetch('https://tttextreme.com/api/userLogin.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });

            const json = await response.json();
            console.log('Full API response:', json);

            if (json.success) {
                if (json.user.is_email_verified) {
                    login(json.user); // Store the full user data
                    navigation.navigate('Main');
                } else {
                    Alert.alert("Login Failed", "Please verify your email before logging in.");
                }
            } else {
                Alert.alert("Login Failed", json.message || "Invalid credentials");
            }
        } catch (error) {
            console.error(error);
            Alert.alert("Login Error", "Unable to connect to the server");
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log('Google userInfo:', userInfo);
            // Implement your backend authentication using userInfo.idToken
            const response = await fetch('https://tttextreme.com/api/googleLogin.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    idToken: userInfo.idToken,
                }),
            });

            const json = await response.json();
            console.log('Google API response:', json);

            if (json.success) {
                login(json.user);
                navigation.navigate('Main');
            } else {
                Alert.alert("Google Sign-In Failed", json.message || "Failed to sign in with Google");
            }
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                Alert.alert("Google Sign-In Cancelled", "User cancelled the sign-in process");
            } else if (error.code === statusCodes.IN_PROGRESS) {
                Alert.alert("Google Sign-In In Progress", "Sign-in is in progress");
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                Alert.alert("Google Play Services Not Available", "Please install or update Google Play Services");
            } else {
                console.error(error);
                Alert.alert("Google Sign-In Error", "An error occurred during Google sign-in");
            }
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Button title="Login" onPress={handleLogin} />
            <GoogleSigninButton
                style={styles.googleButton}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={handleGoogleSignIn}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
    },
    googleButton: {
        marginTop: 20,
        width: 192,
        height: 48,
    },
});

export default LoginScreen;