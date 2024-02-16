import React from 'react';
import { StyleSheet, View, Text, Image,TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements'; // Import Button component
import LottieView from 'lottie-react-native';


const CongragulationsScreen = () => {
    return (
        <View style={styles.container}>
            <LottieView source={require('../assets/Animation - 1708082118221.json')}style={styles.lottieView}autoPlay loop />           
            <Text style={styles.shortText}>Congragulations!</Text>
            <Text style={styles.longText}>You are now a CozyPaws user, enjoy {'\n'}access to all the features of CozyPaws.</Text>


            <View style={styles.goButton}>
                    {/* Go button */}
                <Button 
                    title="Let's Go!"
                    // onPress={handleSignIn}
                    buttonStyle={styles.goButtonStyle} // Apply button style
                    titleStyle={styles.goButtonTextStyle} // Apply text style
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
        width: 300,
        height: 300,
        marginBottom: 20,
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
        backgroundColor: '#FF8D4D', // Change button background color
        borderColor: '#F86919', // Change button border color
        borderWidth: 1, // Add button border width
        borderRadius: 16, // Add button border radius
        height: 55, // Set button height
        width: 300,
    },
    goButtonTextStyle: {
        color: 'white', // Change text color
        fontSize: 18,
    },
});

export default CongragulationsScreen;
