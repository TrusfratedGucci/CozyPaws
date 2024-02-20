import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Button } from 'react-native-elements'; // Import Button component
import LottieView from 'lottie-react-native';

const PasswordChangedSuccessScreen = () => {
    return (
        <View style={styles.container}>
           <LottieView 
               source={require('../assets/Animation - 1708081356002 .json')} 
               style={styles.lottieView} 
               autoPlay
               loop={false} // Set loop to false to play the animation only once
               onAnimationFinish={() => console.log('Animation finished')} // Callback when animation finishes
           />
           <View style={styles.textContainer}>
           <Text style={styles.text}>Your account password has {'\n'}been successfully changed.</Text>
           </View>

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

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    lottieView: {
        width: windowWidth * 0.7, // Set the animation width to 70% of the screen width
        aspectRatio: 1, // Maintain aspect ratio
        marginBottom: -40,
        marginTop: 60,
    },
    text: {
        fontSize: 18,
    },

    textContainer: {
        marginTop: 100,
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
