import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Text, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-elements'; // Import Button component
import { useNavigation } from '@react-navigation/native';

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
            
            <View style={styles.Name}>
                {/* Name input */}
                <Text style={styles.inputTextHeader}> Name</Text>
                <TextInput
                    style={styles.inputText}
                    placeholder="Enter your name"
                    keyboardType="email-address"
                />
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

            <View style={styles.password}>
                {/* Password input */}
                <Text style={styles.inputTextHeader}>Password</Text>
                <TextInput
                    style={styles.inputText}
                    placeholder="Enter your password"
                    secureTextEntry={true}
                />
            </View>

            <View>
                {/* Password input */}
                <Text style={styles.inputTextHeader}>Confirm Password</Text>
                <TextInput
                    style={styles.inputText}
                    placeholder="Confirm your password"
                    secureTextEntry={true}
                />
            </View>

            <View style={styles.signInButton}>
                    {/* Sign In button */}
                    <Button 
                        title="Sign Up"
                        // onPress={handleSignIn}
                        buttonStyle={styles.signInButtonStyle} // Apply button style
                        titleStyle={styles.signInButtonTextStyle} // Apply text style
                    />
                </View>

                <View style={styles.socialMediaContainer}>
                    {/* Facebook sign-up option */}
                    <TouchableOpacity style={[styles.socialMediaButton, styles.facebookButton]}>
                        <Image source={require('../assets/facebook_logo.png')} style={styles.socialMediaButtonIcon} />
                    </TouchableOpacity>

                    {/* Google sign-up option */}
                    <TouchableOpacity style={[styles.socialMediaButton, styles.googleButton]}>
                        <Image source={require('../assets/google_logo.png')} style={styles.socialMediaButtonIcon} />
                    </TouchableOpacity>
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
    body: {
        // marginTop: 15,
    },
    headerText: {
        fontSize: 20, // Adjust font size as needed
        color: 'black',
        fontWeight: 'bold', // Make the text bold
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
        marginBottom: 15
    },
    
    Name: {
        marginBottom: 15
    },
    password: {
        marginBottom: 15
    },
    
    signInButton: {
        borderRadius: 6, // Add border radius
        margin: 15,
        marginTop: 15,
        alignItems: 'center',
    },
    signInButtonStyle: {
        backgroundColor: '#68A69B', // Change button background color
        borderColor: '#68A69B', // Change button border color
        borderWidth: 1, // Add button border width
        borderRadius: 20, // Add button border radius
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
        // borderWidth: 5, // Add button border width
        borderColor: '#F7F7F7', // Change button border color
        borderRadius: 27, // Add button border radius
        width: 55, // Adjust width as needed
        height: 55, // Adjust height as needed
        margin: 10, // Add margin between buttons
    },
    signInTextContainer: {
        alignItems: 'center', // Align center horizontally
        marginTop: 5,
    },
    signInLink:{
        textDecorationLine: 'underline',
        color: '#68A69B',
        marginBottom: 25,
        
    },
});

export default SignUpComponents;