import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Text, Image } from 'react-native';
import { Button } from 'react-native-elements'; // Import Button component
import { useNavigation } from '@react-navigation/native';
import { forgotPassword } from '../api/auth'; // Import the forgotPassword function

const VerificationEmailComponents = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleEmailSubmit = async () => {
        // Call the forgotPassword function with the provided email
        const requestSent = await forgotPassword(email);

        if (requestSent) {
            // Password reset request sent successfully
            // Navigate to the verification code component
            navigation.navigate('VerificationCode');
        } else {
            // Show error message
            setEmailError('Failed to send password reset request');
        }
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

                <View style={styles.imageContainer}>
                    <Image source={require('../assets/dog.png')} style={styles.imageStyle} />
                </View>

                <View style={styles.lowerPart}>
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
        alignItems: 'center', // Align center horizontally
    },
    body: {
        marginTop: 15,
    },
    headerText: {
        fontSize: 22, // Adjust font size as needed
        color: 'black',
        fontWeight: 'bold', // Make the text bold
        marginTop: 80,
    },
    instructions: {
        fontSize: 15,
        marginBottom: 10,
        textAlign: 'center',
        fontWeight: 'semibold', // Make the text semibold
        marginLeft: 10,
        marginRight: 10,
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
        borderRadius: 6, // Add border radius
        margin: 15,
        marginTop: 45,
        alignItems: 'center',
    },
    verifyButtonStyle: {
        backgroundColor: '#5B8F86', // Change button background color
        borderColor: '#5B8F86', // Change button border color
        borderWidth: 1, // Add button border width
        borderRadius: 16, // Add button border radius
        height: 55, // Set button height
        width: 300,
    },
    verifyButtonTextStyle: {
        color: 'white',
        fontSize: 18,
    },
    imageContainer: {
        alignItems: 'center',
        // padding: 20,
        marginTop: 60,
    },
    imageStyle: {
        width: 150, // Adjust width as needed
        height: 150, // Adjust height as needed
    },
    lowerPart: {
        marginTop: 40,
    },
});

export default VerificationEmailComponents;
