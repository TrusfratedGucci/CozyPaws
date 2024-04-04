import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, Image } from 'react-native';
import { Button } from 'react-native-elements'; // Import Button component
import { useNavigation } from '@react-navigation/native';
import { verifyVerificationCode } from '../api/auth'; // Import the verifyVerificationCode function from your API file

const VerificationCodeComponents = () => {
    const navigation = useNavigation();
    // State to hold the verification code
    const [verificationCode, setVerificationCode] = useState(['', '', '', '']);

    // State to track whether input is focused or not
    const [isFocused, setIsFocused] = useState(false);

     // Array to hold references to TextInput elements
    const textInputsRefs = [
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef()
    ];

     // Function to handle code change in TextInput
    const handleCodeChange = (index, value) => {
        // Update the corresponding box value in the verificationCode array
        let updatedVerificationCode = [...verificationCode];
        updatedVerificationCode[index] = value;
        setVerificationCode(updatedVerificationCode);

        // Move the focus to the next input box if the current box is not empty
        if (value !== '' && index < 3) {
            textInputsRefs[index + 1].current.focus();
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


     // Function to verify the verification code
     const verifyCode = async () => {
        try {
            const isVerified = await verifyVerificationCode(verificationCode);
            if (isVerified) {
                navigation.navigate('NewPasswordScreen');
            } else {
                // Handle verification failure
                console.log('Verification failed');
            }
        } catch (error) {
            // Handle error
            console.error('Error verifying code:', error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Verify your email</Text>
            </View>

            <View style={styles.body}>
                <View>
                    <Text style={styles.instructions}>
                        Please enter the 4-digit verification code sent to your email:
                    </Text>
                </View>

                <View style={styles.inputContainer}>
                    {[0, 1, 2, 3].map(index => (
                        <View key={index} style={[styles.inputWrapper, isFocused && styles.focusedWrapper]}>
                            <TextInput
                                style={[styles.inputBox, isFocused && styles.focusedInput]}
                                value={verificationCode[index]}
                                onChangeText={text => handleCodeChange(index, text)}
                                keyboardType="numeric"
                                maxLength={1}
                                ref={textInputsRefs[index]}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                        </View>
                    ))}
                </View>

                <View style={styles.imageContainer}>
                    <Image source={require('../assets/protection.png')} style={styles.imageStyle} />
                </View>

                <View style={styles.continueButton}>
                    <Button 
                        title="Verify"
                        onPress= {verifyCode}
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
        marginTop: 100,
    },
    instructions: {
        fontSize: 15,
        marginBottom: 10,
        textAlign: 'center',
        fontWeight: 'semibold', // Make the text semibold
    },
    inputContainer: {
        margin:15,
        marginTop: 40,
        marginBottom: 20,
        flexDirection: 'row', // Ensure input boxes are displayed horizontally
        justifyContent: 'space-between', // Add space between input boxes
        alignItems: 'center', // Align input boxes vertically in the container
    },
    inputWrapper: {
        borderBottomWidth: 2,
        borderRadius: 2,
        borderBottomColor: '#CBCBCB',
        width: 50,
        marginHorizontal: 5,
    },
    inputBox: {
        height: 45,
        paddingHorizontal: 5,
        textAlign: 'center',
        fontSize: 35,
        color: '#5B8F86',
    },
    focusedWrapper: {
        borderBottomColor: '#68A69B', // Change color when focused
    },
    continueButton: {
        borderRadius: 6, // Add border radius
        margin: 15,
        marginTop: 60,
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
});

export default VerificationCodeComponents;
