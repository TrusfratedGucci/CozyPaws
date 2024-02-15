import React from 'react';
import { StyleSheet, View, Text, Image,TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements'; // Import Button component

const CongragulationsScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={require('./assets/congragulations_image.png')} style={styles.image} />
            <Text style={styles.shortText}>Congragulations!</Text>
            <Text style={styles.longText}>You are now a CozyPaws user, enjoy {'\n'}access to all the features of CozyPaws.</Text>

             {/* Go button */}
             <Button 
                title="Let's Go"
                // onPress={handleSignIn}
                buttonStyle={styles.goButtonStyle} // Apply button style
                titleStyle={styles.goButtonTextStyle} // Apply text style
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5F5DC',
        

    },
    image: {
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

    goButtonStyle: {
        backgroundColor: '#F86919', // Change button background color
        borderColor: '#F86919', // Change button border color
        borderWidth: 1, // Add button border width
        height: 45, // Set button height
        width:300,
        borderRadius: 6, // Add border radius
        margin: 15,
        marginTop: 150,
    },
    goButtonTextStyle: {
        color: 'white', // Change text color
        fontSize: 18,
    },
});

export default CongragulationsScreen;
