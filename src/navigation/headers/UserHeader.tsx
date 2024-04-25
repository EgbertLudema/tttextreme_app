import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAuth } from './../../context/AuthContext';

const UserHeader = () => {
    const { user } = useAuth();
    return(
        <View>
            {/* Image */}
            <Text>{user.username}</Text>
            {/* <Text>Lvl:</Text> */}
        </View>
    )
}

export default UserHeader

const styles = StyleSheet.create({})