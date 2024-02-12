import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Text } from 'react-native';
import { Button } from 'react-native-elements'; // Import Button component
import { useNavigation } from '@react-navigation/native';

const SignInComponents = () => {
    const [rememberMe, setRememberMe] = useState(false);
    const navigation = useNavigation();

    // Function to toggle the rememberMe state
    const toggleRememberMe = () => {
        setRememberMe(!rememberMe);
    };

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.headerText}>Sign In</Text>
            </View>
            
            <View style={styles.email}>
                {/* Email input */}
                <Text style={styles.inputTextHeader}>Email</Text>
                <TextInput
                    style={styles.inputText}
                    placeholder="Enter your email"
                    keyboardType="email-address"
                />
            </View>

            <View>
                {/* Password input */}
                <Text style={styles.inputTextHeader}>Password</Text>
                <TextInput
                    style={styles.inputText}
                    placeholder="Enter your password"
                    secureTextEntry={true}
                />
            </View>
            
            <View style={styles.rememberMeContainer}>
                {/* Remember Me toggle */}
                <TouchableOpacity onPress={toggleRememberMe} style={styles.rememberMeTouchable}>
                    <View style={[styles.checkbox, rememberMe && styles.checked]}>
                        {rememberMe && <Text>X</Text>}
                    </View>
                    <Text>Remember Me</Text>
                </TouchableOpacity>
                
                {/* Forgot Password link */}
                <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                    <Text style={styles.forgotPassword}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>

            <View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5DCFF',
        padding: 20,
    },
    header: {
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center', // Align center horizontally
    },
    headerText: {
        fontSize: 20, // Adjust font size as needed
        color: 'black',
        fontWeight: 'bold', // Make the text bold
    },
    inputTextHeader: {
        fontSize: 15,
        paddingBottom: 10,
    },
    inputText: {
        height: 40,
        borderColor: '#CDCDCD',
        borderWidth: 1,
        backgroundColor: 'white',
        paddingLeft: 10, // Add left padding
        marginBottom: 10, // Add bottom margin
        elevation: 3, // Add elevation for drop shadow
        borderRadius: 6, // Add border radius
    },
    email: {
        marginBottom: 20
    },
    rememberMeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20
    },
    rememberMeTouchable: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    checked: {
        backgroundColor: 'black'
    },
    forgotPassword: {
        marginTop: 10,
        textDecorationLine: 'underline'
    }
});

export default SignInComponents;
