// src/components/GoogleSignInButton.js
import React, { useEffect, useState } from 'react';
import { View, Button, Alert } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { useAuth } from '../context/AuthContext';

GoogleSignin.configure({
  webClientId: '996887310749-kb9k74v0j3old4f8d7keb665mesb86j2.apps.googleusercontent.com', // Replace with your web client ID
  scopes: ['email', 'profile'], // Request email and profile scopes
});

const GoogleSignInButton = ({ navigation }) => {
    const { login } = useAuth();
    const [isSigningIn, setIsSigningIn] = useState(false);

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '996887310749-kb9k74v0j3old4f8d7keb665mesb86j2.apps.googleusercontent.com',
            scopes: ['email', 'profile'],
        });
    }, []);

    const signIn = async () => {
        if (isSigningIn) return;

        setIsSigningIn(true);
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log(userInfo);
            // Assume the user info has a structure similar to your API response
            const user = {
                ...userInfo.user,
                is_email_verified: true // Assuming Google verified the email
            };
            login(user);
            navigation.navigate('Main');
        } catch (error) {
            console.error(error);
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                Alert.alert("Sign-In Cancelled", "User cancelled the sign-in flow.");
            } else if (error.code === statusCodes.IN_PROGRESS) {
                Alert.alert("Sign-In In Progress", "Sign-in is in progress.");
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                Alert.alert("Play Services Not Available", "Play services not available or outdated.");
            } else {
                Alert.alert("Sign-In Error", "Some other error happened.");
            }
        } finally {
            setIsSigningIn(false);
        }
    };

    return (
        <View>
            <Button title="Sign In with Google" onPress={signIn} />
        </View>
    );
};

export default GoogleSignInButton;
