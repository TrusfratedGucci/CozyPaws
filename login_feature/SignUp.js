import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Text, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-elements'; // Import Button component
import { useNavigation } from '@react-navigation/native';
import { signUp } from '../api/auth'; // Import the signUp function from api.js

const SignUpComponents = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const navigation = useNavigation();

    // Function to handle name input change
    const handleNameChange = (username) => {
        setUsername(username);
        setUsernameError(username.trim() === '' ? 'Required Field' : '');
    };

    // Function to handle email input change and validate email format
    const handleEmailChange = (email) => {
        setEmail(email);
        setEmailError(
            email.trim() === '' // Check if the email field is empty
                ? 'Required Field'
                : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) // Check if the email format is invalid
                ? 'Invalid email format'
                : '' // No error
        );
    };

    // Function to handle password input change and validate password format
    const handlePasswordChange = (password) => {
        setPassword(password);
        setPasswordError(
            password.trim() === '' // Check if the password field is empty
                ? 'Required field'
                : !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}/.test(password) // Check if the password format is invalid
                ? 'Password must contain at least 8 characters including uppercase and lowercase letters, numbers, and special characters'
                : '' // No error
        );
    };

    // Function to handle confirm password input change
    const handleConfirmPasswordChange = (confirmPassword) => {
        setConfirmPassword(confirmPassword);
        setConfirmPasswordError(
            confirmPassword !== password ? 'Passwords do not match' : ''
        );
    };

    // Function to handle sign-up button press
    const handleSignUp = async () => {
        if (!username || !email || !password || !confirmPassword) {
            setUsernameError(username ? '' : 'Required field');
            setEmailError(email ? '' : 'Required field');
            setPasswordError(password ? '' : 'Required field');
            setConfirmPasswordError(confirmPassword ? '' : 'Required field');
            return;
        }

        try {
            // Calling the signUp function from api.js
            const success = await signUp(username, email, password);

            if (success) {
                // Sign up successful, navigate to the Congratulations screen
                navigation.navigate('Congratulations');
            } else {
                // Sign up failed
                // Displaying an error message
                console.log('Sign up failed');
            }
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    return (
        <ScrollView style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.headerText}>Sign Up</Text>
            </View>
            
            <View style={styles.Name}>
                {/* Name input */}
                <Text style={styles.inputTextHeader}> Username</Text>
                <TextInput
                    style={[styles.inputText, usernameError && styles.errorInput]}
                    placeholder="Enter your username"
                    onChangeText={handleNameChange}
                />
                <View style={styles.errorBox}>
                    {usernameError ? <Text style={styles.errorText}>{usernameError}</Text> : null}
                </View>
                
            </View>


            <View style={styles.email}>
                {/* Email input */}
                <Text style={styles.inputTextHeader}>Email</Text>
                <TextInput
                    style={[styles.inputText, emailError && styles.errorInput]}
                    placeholder="Enter your email"
                    keyboardType="email-address"
                    onChangeText={handleEmailChange}
                />
                <View style={styles.errorBox}>
                    {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
                </View>
                
            </View>

            <View style={styles.password}>
                {/* Password input */}
                <Text style={styles.inputTextHeader}>Password</Text>
                <TextInput
                    style={[styles.inputText, passwordError && styles.errorInput]}
                    placeholder="Enter your password"
                    secureTextEntry={true}
                    onChangeText={handlePasswordChange}
                />
                <View style={styles.errorBox}>
                    {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
                </View>
                
            </View>

            <View>
                {/* Confirm Password input */}
                <Text style={styles.inputTextHeader}>Confirm Password</Text>
                <TextInput
                    style={[styles.inputText, confirmPasswordError && styles.errorInput]}
                    placeholder="Confirm your password"
                    secureTextEntry={true}
                    onChangeText={handleConfirmPasswordChange}
                />
                <View style={styles.errorBox}>
                    {confirmPasswordError ? <Text style={styles.errorText}>{confirmPasswordError}</Text> : null}
                </View>
                
            </View>

            <View style={styles.signInButton}>
                {/* Sign Up button */}
                <Button 
                    title="Sign Up"
                    onPress={handleSignUp}
                    buttonStyle={styles.signInButtonStyle} 
                    titleStyle={styles.signInButtonTextStyle} 
                />
            </View>

            <View style={styles.signInTextContainer}>
                <Text style={styles.signInText}>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.signInLink}>Sign In</Text>
                </TouchableOpacity>
            </View>
            
        </ScrollView>
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
    headerText: {
        fontSize: 22, // Adjust font size as needed
        color: 'black',
        fontWeight: 'bold', // Make the text bold
        marginTop: 80,
    },
    inputTextHeader: {
        fontSize: 15,
        paddingBottom: 2,
        marginBottom: 5,
        marginLeft: 5,
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
    errorBox: {
        alignItems:'flex-end',
    },
    errorInput: {
        borderColor: 'red', // Change border color to red for error
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginLeft: 10,
        marginTop: -10,
    },
    email: {
        marginBottom: 15,
    },
    Name: {
        marginBottom: 15,
    },
    password: {
        marginBottom: 15,
    },
    signInButton: {
        margin: 15,
        marginTop: 30,
        alignItems: 'center',
    },
    signInButtonStyle: {
        backgroundColor: '#5B8F86', // Change button background color
        borderColor: '#5B8F86', // Change button border color
        borderWidth: 1, // Add button border width
        borderRadius: 16, // Add button border radius
        height: 55, // Set button height
        width: 300,
    },
    signInButtonTextStyle: {
        color: 'white', // Change text color
        fontSize: 18,
    },
    socialMediaContainer: {
        flexDirection: 'row',
        justifyContent: 'center', // Center items horizontally
    },
    socialMediaButtonIcon: {
        borderWidth: 5, // Add button border width
        borderRadius: 27, // Add button border radius
        width: 40, // Adjust width as needed
        height: 40, // Adjust height as needed
        margin: 20, // Add margin between buttons
        marginTop: 5,
    },
    signInTextContainer: {
        alignItems: 'center', // Align center horizontally
        marginTop: 0,
    },
    signInLink:{
        textDecorationLine: 'underline',
        color: '#68A69B',
        marginBottom: 25,
    },
});

export default SignUpComponents;