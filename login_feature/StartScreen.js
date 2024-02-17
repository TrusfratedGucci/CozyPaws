import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Image, Button } from 'react-native';

const StartScreenComponents = () => {

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Image source={require('../assets/CozyPawsLogo.png')} style={styles.icon}/>
                <Text style={styles.headerText}>COZY PAWS</Text>
                <Text style={styles.sentence}>We take care of your pet</Text>
            </View>

            <View style={styles.body}>
                
                <ImageBackground source={require('../assets/StSc.png')} style={styles.bgImg}>
                    {/* Content inside the blurred box */}
                    <View style={styles.blurBox}>

                        <View style={styles.buttonContainer}>
                            <Button 
                                title="Sign In"
                                // onPress={handleSignIn}
                                buttonStyle={styles.signInButtonStyle} // Apply button style
                                titleStyle={styles.signInButtonTextStyle} // Apply text style
                            />

                            <Button 
                                title="Sign Up"
                                // onPress={handleSignIn}
                                buttonStyle={styles.signInButtonStyle} // Apply button style
                                titleStyle={styles.signInButtonTextStyle} // Apply text style
                            />
                        </View>
                          
                    </View>
                </ImageBackground>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF9029',
        // padding: 20,
    },
    header: {
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        flex: 1,
        marginTop: 15,
    },
    bgImg: {
        flex: 1,
        height:610,
        resizeMode: 'cover',
        width: '100%', // Make the width equal to the device width
        justifyContent: 'center',
        alignItems: 'center',
    },
    blurBox: {
        marginTop: 210,
        height: 320,
        width: '100%', // Make the width equal to the device width
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
        borderRadius: 20,
    },
    button: {
        backgroundColor: '#FF8D4D',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    signInButton: {
        borderRadius: 6, // Add border radius
        margin: 15,
        marginTop: 15,
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

export default StartScreenComponents;
