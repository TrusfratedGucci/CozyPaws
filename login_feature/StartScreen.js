import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';

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
                            <TouchableOpacity 
                                style={styles.signInButtonStyle}
                                onPress={() => handleSignIn()}>
                                <Text style={styles.signInButtonTextStyle}>Sign In</Text>
                            </TouchableOpacity>



                            <TouchableOpacity 
                                style={styles.signInButtonStyle}
                                onPress={() => handleSignUp()}>
                                <Text style={styles.signInButtonTextStyle}>Sign Up</Text>
                            </TouchableOpacity>
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
        backgroundColor: '#FF8D4D',
        // padding: 20,
    },
    header: {
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: 'white',
        fontSize: 36,
    },
    sentence: {
        fontSize: 24,
        color: '#343232',
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
        marginBottom: -100,
        height: 320,
        width: '100%', // Make the width equal to the device width
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent white background
        borderRadius: 20,
    },
    buttonContainer: {
        alignItems: 'center',
    },
    signInButtonStyle: {
        backgroundColor: '#FF9029', // Change button background color to F86919
        borderColor: '#FF9029', // Change button border color
        borderWidth: 1, // Add button border width
        borderRadius: 6, // Add button border radius
        height: 55, // Set button height
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        marginBottom: 45,
    },
    signInButtonTextStyle: {
        color: 'white', // Change text color
        fontSize: 22,
    },

});

export default StartScreenComponents;