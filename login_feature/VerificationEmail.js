import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Text, Image } from 'react-native';
import { Button } from 'react-native-elements'; // Import Button component
import { useNavigation } from '@react-navigation/native';

const VerificationEmailComponents = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleEmailSubmit = () => {
        // Check if the email is registered (dummy check for demonstration)
        const isRegistered = checkIfEmailIsRegistered(email);

        if (isRegistered) {
            // Navigate to the verification code component
            navigation.navigate('VerificationCodeComponents');
            // Here you would typically send a verification code to the provided email
        } else {
            // Show email not registered error
            setEmailError('Email is not registered');
        }
    };

    // Function to handle focus event
    const handleFocus = () => {
        setIsFocused(true); 
    };

    // Function to handle blur event
    const handleBlur = () => {
        setIsFocused(false); // Set isFocused state to false when input loses focus
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Verification</Text>
            </View>

            <View style={styles.body}>
                <View>
                    <Text style={styles.instructions}>
                        Enter your registered email below to recieve the password reset instructions.
                    </Text>
                </View>

                <View style={styles.email}>
                    {/* Email input */}
                    <Text style={styles.inputTextHeader}>Email</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Enter your email"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                <View style={styles.continueButton}>
                    <Button 
                        title="Submit"
                        onPress={handleEmailSubmit}
                        buttonStyle={styles.verifyButtonStyle}
                        titleStyle={styles.verifyButtonTextStyle}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
    },
    header: {
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        marginTop: 55,
    },
    headerText: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    },
    instructions: {
        fontSize: 15,
        marginBottom: 10,
        textAlign: 'center',
        fontWeight: 'semibold', // Make the text semibold
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
    email: {
        marginTop: 30,
        marginBottom: 20
    },
    continueButton: {
        marginTop: 45,
        alignItems: 'center',
    },
    verifyButtonStyle: {
        backgroundColor: '#68A69B',
        borderRadius: 16,
        height: 55,
        width: 300,
    },
    verifyButtonTextStyle: {
        color: 'white',
        fontSize: 18,
    },
});

export default VerificationEmailComponents;
