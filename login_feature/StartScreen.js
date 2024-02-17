import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Text, ImageBackground , Image, Platform} from 'react-native';
import { Button } from 'react-native-elements'; // Import Button component
import { useNavigation } from '@react-navigation/native';
import { BlurView } from '@react-native-community/blur';


const StartScreenComponents = () => {
    const [rememberMe, setRememberMe] = useState(false);
    const navigation = useNavigation();

    const handlePress = () => {
        // Do something when the button is pressed
    };

    return (
        <View style={styles.container}>

                {/* icon */}
                <Image source={require('../assets/CozyPawsLogo.png')} style={styles.icon}/>

                {/* text */}
                <Text style={styles.headerText}>COZY PAWS</Text>
            
                {/* sentence */}
                <Text style={styles.sentence}>We take care of your pet</Text>

                {/* background*/}
                <ImageBackground source={require('../assets/StSc.png')} style={styles.bgImg}>
                    {/* Blurred Box */}
                {Platform.OS === 'ios' ? (
                    <BlurView
                        style={styles.blurBox}
                        blurType="light"
                        blurAmount={10}
                        borderRadius={20} // Add borderRadius for rounded corners
                    >
                    <View style = {styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={handlePress}>
                            <Text style={styles.buttonText}>Press Me</Text>
                        </TouchableOpacity>
                    </View>
                        
                    </BlurView>

                    ) :(
                <View style={styles.blurBoxAndroid} />
                )}
                </ImageBackground>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F49F6F',
        flex:1,
        padding: 0,
    },

    sentence: {
        marginBottom: 20,
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
    },

    header: {
        backgroundColor: '#F49F6F',
    },

    headerText: {
        color: '#FFFFFF',
        fontSize: 28,
        textAlign: 'center',
        
    },

    bgImg: {
        flex: 1,
    },

    icon: {
        marginLeft: 130,
    },

    blurredText: {
        fontSize: 20,
        color: 'white',
        },

    blurBox: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 290, // Adjust the height of the blurred box
        zIndex: 2, // Ensure the blurred box is above the background image
      },

      blurBoxAndroid: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 290, // Adjust the height of the blurred box
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Adjust the background color and opacity
        borderRadius: 20, // Add borderRadius for rounded corners
        zIndex: 2, // Ensure the blurred box is above the background image
      },

      buttonContainer:{
        zIndex: 10, // Ensure the button is above the blurred box
      },

      button: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignSelf: 'center',
        bottom: 20, // Adjust the bottom position as needed
        zIndex: 3, // Ensure the button is above the blurred box
    },
    
    buttonText: {
        color: '#000000',
        fontSize: 16,
    },


}
);
export default StartScreenComponents;