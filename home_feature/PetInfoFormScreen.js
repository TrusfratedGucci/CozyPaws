import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons'; // Correct import statement

const PetInfoFormComponents = () => {
    const [petPhoto, setPetPhoto] = useState(null);

    // Function to handle image selection
    const selectImage = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!');
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (pickerResult.cancelled === true) {
            return;
        }

        setPetPhoto(pickerResult.uri);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Edit Profile</Text>
            </View>

            {/* Display the selected pet photo */}
            <TouchableOpacity onPress={selectImage} style={styles.profilePhotoContainer}>
                {petPhoto ? (
                    <Image source={{ uri: petPhoto }} style={styles.profilePhoto} />
                ) : (
                    <View style={styles.imageFrame}>
                        <FontAwesomeIcon icon={faImage} style={styles.profilePhoto} />
                    </View>
                )}
            </TouchableOpacity>

            {/* Your pet information form goes here */}
            {/* Include form fields for pet details */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
    },
    header: {
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',
    },
    profilePhotoContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profilePhoto: {
        width: 150,
        height: 150,
        borderRadius: 75, // Make it a circle
    },
    imageIcon: {
        fontSize: 100, // Adjust icon size as needed
        color: '#c9c9c9',
    },
});

export default PetInfoFormComponents;
