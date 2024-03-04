import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook


const StartScreenComponents = () => {
    const navigation = useNavigation(); 

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
                                onPress={() => navigation.navigate('SignIn')}>
                                <Text style={styles.signInButtonTextStyle}>Sign In</Text>
                            </TouchableOpacity>



                            <TouchableOpacity 
                                style={styles.signUpButtonStyle}
                                onPress={() => navigation.navigate('SignUp')}>
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
        backgroundColor: '#649F95',
        // padding: 20,
    },
    header: {
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 45,
    },
    headerText: {
        color: 'white',
        fontSize: 36,
        fontWeight:'bold',
    },
    sentence: {
        fontSize: 21,
        color: '#343232',
        zIndex: 1, // Ensure the text appears in front of the background image
        fontWeight:'600',
    },
    body: {
        flex: 1,
        marginTop: 15,
    },
    bgImg: {
        flex: 1,
        height:700,
        resizeMode: 'cover',
        width: '100%', // Make the width equal to the device width
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -120,
    },
    blurBox: {
        marginTop: 400,
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
        backgroundColor: '#305C55', // Change button background color to F86919
        borderColor: '#305C55', // Change button border color
        borderWidth: 1, // Add button border width
        borderRadius: 20, // Add button border radius
        height: 55, // Set button height
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
    },
    signUpButtonStyle: {
        backgroundColor: '#305C55', // Change button background color to F86919
        borderColor: '#305C55', // Change button border color
        borderWidth: 1, // Add button border width
        borderRadius: 20, // Add button border radius
        height: 55, // Set button height
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 80,
    },
    signInButtonTextStyle: {
        color: 'white', // Change text color
        fontSize: 20,
        fontWeight: '600',
    },

});

export default StartScreenComponents;