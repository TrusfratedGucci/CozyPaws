import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Button } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { ScrollView } from 'react-native-gesture-handler';

const PetInfoFormComponents = () => {
    const [petPhoto, setPetPhoto] = useState(null);
    const [birthday, setBirthday] = useState('');
    

    // Function to handle image selection
    const selectImage = async () => {
        // Request permission to access camera roll
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
            // Alert if permission is not granted
            alert('Permission to access camera roll is required!');
            return;
        }

        // Launch image picker
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (pickerResult.cancelled === true) {
            return; // Return if image selection is canceled
        }

         // Set selected image URI to state
        setPetPhoto(pickerResult.uri);
    };

  

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.profilePhotoContainer}>
                    {/* TouchableOpacity to handle photo selection */}
                    <TouchableOpacity style={styles.profilePhotoContainer} onPress={selectImage}>
                        {/* Conditionally render pet photo or placeholder icon */}
                        {petPhoto ? (
                            // Render the selected pet photo
                            <Image source={{ uri: petPhoto }} style={styles.profilePhoto} />
                        ) : (
                            // Render a placeholder icon if no photo is selected
                            <FontAwesomeIcon icon={faPaw}  style={styles.profilePhotoIcon} size={100} />
                        )}
                    </TouchableOpacity>
                </View>


                <View style={styles.addPhotoContainer}> 
                    <TouchableOpacity onPress={selectImage}>
                        {/* Text link to add a photo */}
                        <Text style={styles.addPhotoLink}>Add Photo</Text>
                    </TouchableOpacity>
                </View>
                    
                
            </View>

            


            <View style={styles.body}>

                    {/* Pet info form */}
                    <View style={styles.name}>
                        {/* Name input */}
                        <Text style={styles.inputTextHeader}>Name</Text>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Enter your pet's name"
                            // keyboardType=
                        />
                    </View>

                    <View style={styles.name}>
                        {/* Type input */}
                        <Text style={styles.inputTextHeader}>Type</Text>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Enter your pet's type (ex: cat, dog, etc.)"
                        
                        />
                    </View>

                    <View style={styles.name}>
                        {/* Breed input */}
                        <Text style={styles.inputTextHeader}>Breed</Text>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Enter your pet's breed"
                           
                        />
                    </View>

                    <View style={styles.name}>
                        {/* Gender input */}
                        <Text style={styles.inputTextHeader}>Gender</Text>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Enter your pet's gender"
                           
                        />
                    </View>

                        <View style={styles.name}>
                            {/* Birthday input */}
                            <Text style={styles.inputTextHeader}>Birthday</Text>

                            <TextInput
                                style={[styles.inputText, styles.birthdayInput]}
                                placeholder="DD/MM/YYYY"
                                maxLength={10}
                                value={birthday}
                                onChangeText={(text) => {
                                    // Remove non-numeric characters
                                    text = text.replace(/[^0-9]/g, '');
                            
                                    // Ensure the format is DD/MM/YYYY
                                    if (text.length <= 2) {
                                        // Max 2 characters for day
                                        text = text;
                                    } else if (text.length <= 4) {
                                        // Max 2 characters for day + slash + max 2 characters for month
                                        text = text.replace(/^(\d{2})(\d{0,2})/, '$1/$2');
                                    } else {
                                        // Max 2 characters for day + slash + max 2 characters for month + slash + max 4 characters for year
                                        text = text.replace(/^(\d{2})(\d{0,2})(\d{0,4}).*/, '$1/$2/$3');
                                    }
                                    setBirthday(text);
                                }}
                                keyboardType="number-pad"
                            
                            />
                        </View>

                        <View style={styles.signInButton}>
                            {/* Create button */}
                            <Button 
                                title="Create"
                                // onPress={handleSignIn}
                                buttonStyle={styles.signInButtonStyle} // Apply button style
                                titleStyle={styles.signInButtonTextStyle} // Apply text style
                            />
                        </View>

                    </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#649F95',
        // padding: 20,
    },
    header: {
        marginTop: 20,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative', // Make the header position relative
    },
    headerText: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',
    },
    body: {
        paddingTop: 115,
        borderTopLeftRadius: 20, // Adjust the border radius as needed
        borderTopRightRadius: 20, // Adjust the border radius as needed
        backgroundColor: 'white',
        width: '100%', // Make the width equal to the device width
        padding: 20,
        paddingBottom: 40,
        marginTop: -110, // Adjust the top margin to overlap with the profile picture container
        position: 'relative', // Make the body position relative
    },
    profilePhotoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: '#DEEBE9', // Light gray background when no image selected
        overflow: 'hidden', // Ensure the image is clipped to the border radius
        zIndex: 1, // Ensure the profile picture container is above the body
    },
    profilePhoto: {
        width: '100%',
        height: '100%',
    },
    profilePhotoIcon: {
        color: '#5B8F86', // Placeholder icon color
    },
    inputTextHeader: {
        fontSize: 15,
        paddingBottom: 2,
        marginBottom: 10,
        marginLeft: 10,
        fontWeight: 'semibold', // Make the text semibold
    },
    inputText: {
        height: 50,
        borderColor: '#DEEBE9',
        borderWidth: 1,
        backgroundColor: '#DEEBE9',
        paddingLeft: 10, // Add left padding
        marginBottom: 10, // Add bottom margin
        borderRadius: 16, // Add border radius
    },
    name: {
        marginBottom: 15
    },
    birthdayInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    birthdayInput: {
        flex: 1,
    },
    birthdaySeparator: {
        paddingHorizontal: 10,
        fontSize: 20,
        color: '#333',
    },
    signInButton: {
        borderRadius: 6, // Add border radius
        margin: 15,
        marginTop: 15,
        alignItems: 'center',
    },
    signInButtonStyle: {
        backgroundColor: '#5B8F86', // Change button background color
        borderColor: '#5B8F86', // Change button border color
        borderWidth: 1, // Add button border width
        borderRadius: 16, // Add button border radius
        height: 55, // Set button height
        width: 300,
    },
    signInButtonTextStyle: {
        color: 'white', // Change text color
        fontSize: 18,
    },
    addPhotoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        bottom: -10,
        zIndex: 12, // Ensure it's above the profile photo container
        alignSelf: 'center', // Align it to the center horizontally
    },
    addPhotoLink: {
        color: '#5B8F86', // Change text color
        fontSize: 15,
        fontWeight: '600', // Semi-bold
        // textDecorationLine: 'underline',
    },
});

export default PetInfoFormComponents;