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

    const handleContinue = () => {
        // Navigate to PasswordChangedSuccessScreen.js
        navigation.navigate('PasswordChangedSuccessScreen');
    };

   

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
                    {/* New Password input */}
                    <Text style={styles.inputTextHeader}>New Password</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Password"
                        secureTextEntry={true}
                    />
                </View>

                <View>
                    {/* Confirm Password input */}
                    <Text style={styles.inputTextHeader}>Confirm New Password</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Re-enter your password"
                        secureTextEntry={true}
                    />
                </View>
                
                <View style={styles.continueButton}>
                    {/* Continue button */}
                    <Button 
                        title="Continue"
                        buttonStyle={styles.signInButtonStyle} // Apply button style
                        titleStyle={styles.signInButtonTextStyle} // Apply text style
                        onPress={handleContinue} // Call handleContinue function when pressed
                    />
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
        marginLeft: 10,
        fontWeight: 'semibold', // Make the text semibold
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
        marginTop: 25,
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
});

export default NewPasswordComponents;
