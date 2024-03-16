import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Text, Image } from 'react-native';
import { Button } from 'react-native-elements'; // Import Button component
import { useNavigation } from '@react-navigation/native';
import { signIn } from '../api/auth'; // Import the signUp function from api.js


const SignInComponents = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [signInError, setSignInError] = useState(''); // State to store sign-in error message
    const navigation = useNavigation();

    

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


    // Function to handle sign-in button press
    const handleSignIn = async () => {
        if (!email || !password) {
            setEmailError(email ? '' : 'Required field');
            setPasswordError(password ? '' : 'Required field');
            return;
        }

        // Call the signIn function from the api.js file
        const success = await signIn(email, password);

        if (success) {
            // Navigate to the next screen if sign-in was successful
            navigation.navigate('AddPet');
        } else {
            // Display error message to the user
            console.log('Sign in failed');
            // Display error message to the user
            setSignInError('Email not found or invalid password');
        }
    };


    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.headerText}>Sign In</Text>
            </View>

            <View style={styles.body}>
                <View style={styles.email}>
                    {/* Email input */}
                    <Text style={styles.inputTextHeader}>Email</Text>
                    <TextInput
                        style={[styles.inputText, emailError && styles.errorInput]}
                        placeholder="Enter your email"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={handleEmailChange}
                    />
                    <View style={styles.errorBox}>
                        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
                    </View>
                    
                </View>

                <View style={styles.email}>
                    {/* Password input */}
                    <Text style={styles.inputTextHeader}>Password</Text>
                    <TextInput
                        style={[styles.inputText, passwordError && styles.errorInput]}
                        placeholder="Enter your password"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={handlePasswordChange}
                    />
                    <View style={styles.errorBox}>
                        {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
                    </View>       
                </View>

                {/* Display sign-in error message */}
                {signInError ? <Text style={styles.signInError}>{signInError}</Text> : null}
            
                <View style={styles.rememberMeContainer}>
                    
                    {/* Forgot Password link */}
                    <TouchableOpacity onPress={() => navigation.navigate('VerificationEmail')}>
                        <Text style={[styles.forgotPassword, {marginTop:0}]}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.imageContainer}>
                    <Image source={require('../assets/cat.png')} style={styles.imageStyle} />
                </View>

                <View style={styles.lowerPart}>
                    <View style={styles.signInButton}>
                        {/* Sign In button */}
                        <Button 
                            title="Sign In"
                            onPress={handleSignIn} // Call handleSignIn function when pressed
                            buttonStyle={styles.signInButtonStyle} // Apply button style
                            titleStyle={styles.signInButtonTextStyle} // Apply text style
                        />
                    </View>

                    <View style={styles.signUpTextContainer}>
                        <Text style={styles.signUpText}>Don't have an account?</Text>

                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                                <Text style={styles.signUpLink}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
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
        // marginTop: 15,
        marginTop: 15,
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
    errorInput: {
        borderColor: 'red', // Change border color to red for error
    },
    errorBox: {
        alignItems:'flex-end',
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
    rememberMeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 5,
        fontSize: 15,
        flexWrap: 'wrap', // Allow items to wrap to the next line if needed
        marginTop: -2,
    },
    rememberMeTouchable: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    checkbox: {
        width: 15,
        height: 15,
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
        textDecorationLine: 'underline',
        color: '#305C55'
    },
    signInButton: {
        borderRadius: 6, // Add border radius
        margin: 15,
        marginTop: 45,
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
        // margin: 10, // Add margin between buttons
    },
    socialMediaButtonIcon: {
        borderWidth: 5, // Add button border width
        borderRadius: 27, // Add button border radius
        width: 40, // Adjust width as needed
        height: 40, // Adjust height as needed
        margin: 25, // Add margin between buttons
    },
    socialMediaButtonIconFacebook: {
        borderWidth: 5, // Add button border width
        borderRadius: 34, // Add button border radius
        width: 40, // Adjust width as needed
        height: 40, // Adjust height as needed
        margin: 25, // Add margin between buttons
    },
    signUpTextContainer: {
        alignItems: 'center', // Align center horizontally
        marginTop: 15,
    },
    signUpLink:{
        textDecorationLine: 'underline',
        color: '#305C55',
        
    },
    lowerPart: {
        marginTop: 10,
    },
    imageContainer: {
        alignItems: 'center',
        // padding: 20,
        marginTop: 20,
        // marginBottom:10,
    },
    imageStyle: {
        width: 150, // Adjust width as needed
        height: 150, // Adjust height as needed
    },
    signInError: {
        color: 'red', // Set error message color to red
        textAlign: 'center', // Center align the error message
        marginTop: -15, // Add top margin
        marginBottom:10,
    },
});

export default SignInComponents;