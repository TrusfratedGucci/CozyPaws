import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements'; // Import Button component
import LottieView from 'lottie-react-native';


const PasswordChangedSuccessScreen = () => {
    return (
        <View style={styles.container}>
           <LottieView source={require('../assets/Animation - 1708081356002.json')}style={styles.lottieView}autoPlay loop />
           <Text style={styles.text}>Your account password has {'\n'}been successfully changed.</Text>

<View style={styles.continueButtonContainer}>
        {/* Continue button */}
    <Button 
        title="Continue"
        // onPress={handleSignIn}
        buttonStyle={styles.continueButtonStyle} // Apply button style
        titleStyle={styles.continueButtonTextStyle} // Apply text style
    />
</View>

 
</View>
);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',

    },
    lottieView: {
        width: 250,
        height: 450,
        marginBottom:-40,
    },

    text: {
        fontSize: 18,
    },
    continueButtonContainer: {
        alignItems: 'center', // Align center horizontally
        marginTop: 45,
    },
    continueButtonStyle: {
        backgroundColor: '#FF8D4D', // Change button background color
        borderColor: '#F86919', // Change button border color
        borderWidth: 1, // Add button border width
        borderRadius: 16, // Add button border radius
        height: 55, // Set button height
        width: 300,
    },
    continueButtonTextStyle: {
        color: 'white', // Change text color
        fontSize: 18,
    },
});

export default PasswordChangedSuccessScreen;
