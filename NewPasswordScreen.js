import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Text, Image } from 'react-native';
import { Button } from 'react-native-elements'; // Import Button component
import { useNavigation } from '@react-navigation/native';

const NewPasswordComponents = () => {
    const [rememberMe, setRememberMe] = useState(false);
    const navigation = useNavigation();

    const listItems = [
    '8 Alphabetical Characters (a,b,c)',
    '3 Numeric Characters (1,2,3)',
    '1 Special Character (. , # , @)'
  ];

    // Function to toggle the rememberMe state

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.headerText}>Create New Password</Text>
            </View>

            <View style={styles.header}>
                <Text style={styles.instructions}>
                    Your password should contain at least:
                    <View style={styles.list}>
                        {listItems.map((item, index) => (
                        <Text key={index} style={[styles.listItem, { color: 'grey' }]}>
                        • {item}
                    </Text>
                        ))}
                    </View>
                </Text>
            </View>

            <View style={styles.body}>
                <View style={styles.password}>
                    {/* Email input */}
                    <Text style={styles.inputTextHeader}>New Password</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Password"
                        secureTextEntry={true}
                    />
                </View>

                <View>
                    {/* Password input */}
                    <Text style={styles.inputTextHeader}>Confirm New Password</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Re-enter you password"
                        secureTextEntry={true}
                    />
                </View>
                
                <View style={styles.continueButton}>
                    {/* Sign In button */}
                    <Button 
                        title="Continue"
                        buttonStyle={styles.signInButtonStyle} // Apply button style
                        titleStyle={styles.signInButtonTextStyle} // Apply text style
                    />
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
        fontSize: 30, // Adjust font size as needed
        color: 'black',
        fontWeight: 'bold', // Make the text bold
    },
    inputTextHeader: {
        fontSize: 16,
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
    password: {
        marginBottom: 20
    },
    instructions: {
        color: 'grey'
    },
    list: {
        paddingTop: 10,
    },
    continueButton: {
        borderRadius: 6, // Add border radius
        elevation: 3, // Add elevation for drop shadow
        marginTop: 25,
    },
    signInButtonStyle: {
        backgroundColor: '#F86919', // Change button background color
        borderRadius: 6, // Add button border radius
        height: 55, // Set button height
        
    },
    signInButtonTextStyle: {
        color: 'white', // Change text color
        fontSize: 18,
    },
});

export default NewPasswordComponents;
