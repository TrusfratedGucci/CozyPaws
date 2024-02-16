import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Text, Image } from 'react-native';
import { Button } from 'react-native-elements'; // Import Button component
import { useNavigation } from '@react-navigation/native';

const VerificationCodeComponents = () => {
    const [verificationCode, setVerificationCode] = useState(['', '', '', '']);
    const [isFocused, setIsFocused] = useState(false);
    const textInputsRefs = [
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef()
    ];

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

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Verification</Text>
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

                <View style={styles.continueButton}>
                    <Button 
                        title="Verify"
                        // onPress={handleVerification}
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
    inputContainer: {
        margin:15,
        marginTop: 40,
        marginBottom: 20,
        flexDirection: 'row', // Ensure input boxes are displayed horizontally
        justifyContent: 'space-between', // Add space between input boxes
        alignItems: 'center', // Align input boxes vertically in the container
    },
    inputWrapper: {
        borderBottomWidth: 1,
        borderBottomColor: '#CBCBCB',
        width: 50,
        marginHorizontal: 5,
    },
    inputBox: {
        height: 45,
        paddingHorizontal: 5,
        textAlign: 'center',
        fontSize: 35,
    },
    focusedWrapper: {
        borderBottomColor: '#FFBA69', // Change color when focused
    },
    focusedInput: {
        color: '#FF8D4D', // Change text color when focused
    },
    continueButton: {
        marginTop: 45,
        alignItems: 'center',
    },
    verifyButtonStyle: {
        backgroundColor: '#FF8D4D',
        borderRadius: 16,
        height: 55,
        width: 300,
    },
    verifyButtonTextStyle: {
        color: 'white',
        fontSize: 18,
    },
});

export default VerificationCodeComponents;
