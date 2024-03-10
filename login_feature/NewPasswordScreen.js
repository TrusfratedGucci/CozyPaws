import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Text, Image } from 'react-native';
import { Button } from 'react-native-elements'; // Import Button component
import { useNavigation } from '@react-navigation/native';
import { resetPassword } from '../api/auth'; // Import the resetPassword function from your API file

const NewPasswordComponents = () => {
    const navigation = useNavigation();

    const listItems = [
    '8 characters long',
    'Contain at least one uppercase letter ',
    'One lowercase letter',
    'One digit',
    'One special character',
  ];

  const handleResetPassword = async () => {
    try {
        // Check if passwords match
        if (newPassword !== confirmPassword) {
            console.log('Passwords do not match');
            return;
        }

        // Send request to reset password
        const isPasswordReset = await resetPassword('reset_token_received_from_previous_step', newPassword);

        if (isPasswordReset) {
            // Password reset successful, navigate to success screen
            navigation.navigate('PasswordChangedSuccessScreen');
        } else {
            // Handle error
            console.log('Password reset failed');
        }
    } catch (error) {
        // Handle error
        console.error('Error resetting password:', error);
    }
};

   

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.headerText}>Create New Password</Text>
            </View>

            <View style={styles.header}>
                <Text style={styles.instructions}>
                    Your password must be at least:
                    <View style={styles.list}>
                        {listItems.map((item, index) => (
                        <Text key={index} style={[styles.listItem, { color: 'grey' }]}>
                        • {item}
                    </Text>
                        ))}
                    </View>
                </Text>
            </View>

            <View style={styles.body}>
                <View style={styles.password}>
                    {/* New Password input */}
                    <Text style={styles.inputTextHeader}>New Password</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Password"
                        secureTextEntry={true}
                    />
                </View>

                <View style={styles.password}>
                    {/* Confirm Password input */}
                    <Text style={styles.inputTextHeader}>Confirm New Password</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Re-enter your password"
                        secureTextEntry={true}
                    />
                </View>
                
                <View style={styles.continueButton}>
                    {/* Continue button */}
                    <Button 
                        title="Continue"
                        buttonStyle={styles.signInButtonStyle} // Apply button style
                        titleStyle={styles.signInButtonTextStyle} // Apply text style
                        onPress={handleResetPassword}
                    />
                </View>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, // Make the container occupy the entire screen
        backgroundColor: 'white',
        padding: 20,
    },
    header: {
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center', // Align center horizontally
    },
    body: {
        marginTop: 15,
    },
    headerText: {
        fontSize: 20, // Adjust font size as needed
        color: 'black',
        fontWeight: 'bold', // Make the text bold
        marginTop: 100,
    },
    inputTextHeader: {
        fontSize: 15,
        paddingBottom: 2,
        marginBottom: 10,
        marginLeft: 10,
        fontWeight: 'semibold', // Make the text semibold
    },
    inputText: {
        height: 50,
        borderColor: '#DEEBE9',
        borderWidth: 1,
        backgroundColor: '#DEEBE9',
        paddingLeft: 10, // Add left padding
        marginBottom: 10, // Add bottom margin
        borderRadius: 16, // Add border radius
    },
    password: {
        marginBottom: 15,
    },
    instructions: {
        color: 'grey'
    },
    list: {
        paddingTop: 10,
    },
    continueButton: {
        marginTop: 85,
        alignItems: 'center',
    },
    signInButtonStyle: {
        backgroundColor: '#5B8F86', // Change button background color
        borderColor: '#5B8F86', // Change button border color
        borderWidth: 1, // Add button border width
        borderRadius: 20, // Add button border radius
        height: 55, // Set button height
        width: 300,
        
    },
    signInButtonTextStyle: {
        color: 'white', // Change text color
        fontSize: 18,
    },
});

export default NewPasswordComponents;
