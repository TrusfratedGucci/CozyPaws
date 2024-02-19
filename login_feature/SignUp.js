import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Text, Image } from 'react-native';
import { Button } from 'react-native-elements'; // Import Button component
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const SignUpComponents = () => {
    const [rememberMe, setRememberMe] = useState(false);
    const navigation = useNavigation();

    // Function to toggle the rememberMe state
    const toggleRememberMe = () => {
        setRememberMe(!rememberMe);
    };

    return (
        <ScrollView style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.headerText}>Sign Up</Text>
            </View>

            <View style={styles.body}>
                <View style={styles.inputTextContainer}>
                    {/* First name input */}
                    <Text style={styles.inputTextHeader}>First Name</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Enter your first name"
                        keyboardType="default"
                    />
                </View>

                <View style={styles.inputTextContainer}>
                    {/* Last name input */}
                    <Text style={styles.inputTextHeader}>Last Name</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Enter your last name"
                        keyboardType="default"
                    />
                </View>

                <View style={styles.inputTextContainer}>
                    {/* Email input */}
                    <Text style={styles.inputTextHeader}>Email</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Enter your email"
                        keyboardType="email-address"
                    />
                </View>

                <View style={styles.inputTextContainer}>
                    {/* Password input */}
                    <Text style={styles.inputTextHeader}>Password</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Enter your password"
                        secureTextEntry={true}
                    />
                </View>

                <View style={styles.inputTextContainer}>
                    {/* Password input */}
                    <Text style={styles.inputTextHeader}>Confirm Password</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Enter your password"
                        secureTextEntry={true}
                    />
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
                        <Image source={require('../assets/facebook_logo.png')} style={styles.socialMediaButtonIconFacebook} />
                    </TouchableOpacity>

                    {/* Google sign-up option */}
                    <TouchableOpacity style={[styles.socialMediaButton, styles.googleButton]}>
                        <Image source={require('../assets/google_logo.png')} style={styles.socialMediaButtonIcon} />
                    </TouchableOpacity>
                </View>


                <View style={styles.signUpTextContainer}>
                    <Text style={styles.signUpText}>Already have an account?</Text>

                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                            <Text style={styles.signUpLink}>Sign In</Text>
                    </TouchableOpacity>
                </View>
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
    body: {
        marginTop: 15,
        marginBottom: 45,
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
        marginLeft: 10,
        fontWeight: '600', // Updated font weight
    },
    inputText: {
        height: 55,
        borderColor: '#F7F7F7',
        borderWidth: 1,
        backgroundColor: '#F7F7F7',
        paddingLeft: 10, // Add left padding
        marginBottom: 10, // Add bottom margin
        borderRadius: 16, // Add border radius
    },
    inputTextContainer: {
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
        marginTop: 15,
        alignItems: 'center',
    },
    signInButtonStyle: {
        backgroundColor: '#FF8D4D', // Change button background color
        borderColor: '#F86919', // Change button border color
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
        borderColor: '#F7F7F7', // Change button border color
        borderRadius: 27, // Add button border radius
        width: 55, // Adjust width as needed
        height: 55, // Adjust height as needed
        margin: 25, // Add margin between buttons
    },
    socialMediaButtonIconFacebook: {
        borderWidth: 5, // Add button border width
        borderColor: '#F7F7F7', // Change button border color
        borderRadius: 34, // Add button border radius
        width: 60, // Adjust width as needed
        height: 60, // Adjust height as needed
        margin: 25, // Add margin between buttons
    },
    signUpTextContainer: {
        alignItems: 'center', // Align center horizontally
        margin: 25, // Increase marginTop to create more space
    },
    signUpLink:{
        textDecorationLine: 'underline',
        color: '#F86919',
        
    },
    
});

export default SignUpComponents;