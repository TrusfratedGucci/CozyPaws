import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity, Dimensions } from 'react-native';
import { Button } from 'react-native-elements'; // Import Button component
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const CongratulationsScreen = () => {

    const continueToAddPet = () => {
        // Navigate to Go with pet
        navigation.navigate('AddPet');
    };


    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <LottieView source={require('../assets/congratulations.json')}style={styles.lottieView} 
               autoPlay 
               loop={false} // Set loop to false to play the animation only once
               speed={1.5} // Increase speed to 2x
               onAnimationFinish={() => console.log('Animation finished')} // Callback when animation finishes
               />          
            <Text style={styles.shortText}>Congratulations!</Text>
            <Text style={styles.longText}>You are now a CozyPaws user, enjoy {'\n'}access to all the features of CozyPaws.</Text>


            <View style={styles.goButton}>
                    {/* Go button */}
                <Button 
                    title="Let's Go!"
                    onPress={continueToAddPet}
                    buttonStyle={styles.goButtonStyle} // Apply button style
                    titleStyle={styles.goButtonTextStyle} // Apply text style
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
        width: windowWidth * 0.8, // Set the animation width to 80% of the screen width
        aspectRatio: 1, // Maintain aspect ratio
        width: 300,
        height: 300,
        marginBottom: 20,
        marginTop: 100,
    },

    longText: {
        fontSize: 18,
    },

    shortText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 40,
    },
    goButton: {
        marginTop: 45,
        alignItems: 'center',
    },
    goButtonStyle: {
        backgroundColor: '#5B8F86', // Change button background color
        borderRadius: 20, // Add button border radius
        height: 55, // Set button height
        width: 300,
    },
    goButtonTextStyle: {
        color: 'white', // Change text color
        fontSize: 18,
    },
});

export default CongratulationsScreen;
