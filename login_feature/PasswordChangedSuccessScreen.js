import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Button } from 'react-native-elements'; // Import Button component
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const PasswordChangedSuccessScreen = () => {
    const navigation = useNavigation();

    const continueToAddPet = () => {
        // Navigate to Training
        navigation.navigate('DrawerHome');
    };


    return (
        <View style={styles.container}>
           <LottieView 
               source={require('../assets/passwordChanged.json')} 
               style={styles.lottieView} 
               autoPlay 
               loop={false} // Set loop to false to play the animation only once
               speed={1.5} // Increase speed to 2x
               onAnimationFinish={() => console.log('Animation finished')} // Callback when animation finishes
           />
           <View style={styles.textContainer}>
           <Text style={styles.text}>Your account password has {'\n'}been successfully changed.</Text>
           </View>

           <View style={styles.continueButtonContainer}>
               {/* Continue button */}
               <Button 
                   title="Continue"
                   onPress={continueToAddPet}
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
        marginTop: 120,
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
        backgroundColor: '#5B8F86', // Change button background color
        borderRadius: 20, // Add button border radius
        height: 55, // Set button height
        width: 300,
    },
    continueButtonTextStyle: {
        color: 'white', // Change text color
        fontSize: 18,
    },
});

export default PasswordChangedSuccessScreen;

