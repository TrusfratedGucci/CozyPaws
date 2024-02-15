import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Text, Image } from 'react-native';
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

            <View style={styles.body}>
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
                
                <View style={styles.signInButton}>
                    {/* Sign In button */}
                    <Button 
                        title="Sign In"
                        // onPress={handleSignIn}
                        buttonStyle={styles.signInButtonStyle} // Apply button style
                        titleStyle={styles.signInButtonTextStyle} // Apply text style
                    />
                </View>

                <View style={styles.socialMediaContainer}>
                    {/* Facebook sign-up option */}
                    <TouchableOpacity style={[styles.socialMediaButton, styles.facebookButton]}>
                        <Image source={require('./assets/facebook_logo.png')} style={styles.socialMediaButtonIcon} />
                    </TouchableOpacity>

                    {/* Google sign-up option */}
                    <TouchableOpacity style={[styles.socialMediaButton, styles.googleButton]}>
                        <Image source={require('./assets/google_logo.png')} style={styles.socialMediaButtonIcon} />
                    </TouchableOpacity>
                </View>


                <View style={styles.signUpTextContainer}>
                    <Text style={styles.signUpText}>Don't have an account?</Text>

                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                            <Text style={styles.signUpLink}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, // Make the container occupy the entire screen
        backgroundColor: '#F5F5DCFF',
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
    },
    inputTextHeader: {
        fontSize: 15,
        paddingBottom: 10,
        marginBottom: 10,
        fontWeight: 'semibold', // Make the text semibold
    },
    inputText: {
        height: 45,
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
        margin: 20,
        fontSize: 15,
        flexWrap: 'wrap', // Allow items to wrap to the next line if needed
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
        color: '#F86919'
    },
    signInButton: {
        borderRadius: 6, // Add border radius
        margin: 15,
        elevation: 3, // Add elevation for drop shadow
        marginTop: 15,
    },
    signInButtonStyle: {
        backgroundColor: '#F86919', // Change button background color
        borderColor: '#F86919', // Change button border color
        borderWidth: 1, // Add button border width
        borderRadius: 6, // Add button border radius
        height: 45, // Set button height
        width: 300,
    },
    signInButtonTextStyle: {
        color: 'white', // Change text color
        fontSize: 18,
    },
    socialMediaContainer: {
        flexDirection: 'row',
        justifyContent: 'center', // Center items horizontally
        margin: 10, // Add margin between buttons
    },
    socialMediaButtonIcon: {
        width: 55, // Adjust width as needed
        height: 55, // Adjust height as needed
        margin: 30, // Add margin between buttons
    },
    signUpTextContainer: {
        alignItems: 'center', // Align center horizontally
    },
    signUpText: {
        
    },
    signUpLink:{
        textDecorationLine: 'underline',
        color: '#F86919',
        
    },
});

export default SignInComponents;
