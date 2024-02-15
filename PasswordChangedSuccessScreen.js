import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements'; // Import Button component


const PasswordChangedSuccessScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={require('./assets/password_success.png')} style={styles.image} />
            <Text style={styles.text}>Your account password has {'\n'}been successfully changed.</Text>

             {/* Continue button */}
             <Button 
                title="Continue"
                // onPress={handleSignIn}
                buttonStyle={styles.continueButtonStyle} // Apply button style
                titleStyle={styles.continueButtonTextStyle} // Apply text style
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
        width: 450,
        height: 450,
        marginBottom:-50,
    },

    text: {
        fontSize: 18,
    },


    continueButtonStyle: {
        backgroundColor: '#F86919', // Change button background color
        borderColor: '#F86919', // Change button border color
        borderWidth: 1, // Add button border width
        height: 45, // Set button height
        width: 300,
        borderRadius: 6, // Add border radius
        margin: 15,
        marginTop: 150,
    },
    continueButtonTextStyle: {
        color: 'white', // Change text color
        fontSize: 18,
    },
});

export default PasswordChangedSuccessScreen;
