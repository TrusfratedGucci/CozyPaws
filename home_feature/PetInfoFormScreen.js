import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Button } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { createPet } from '../api/pet'; 
import { getToken } from '../api/auth'; 
import { useNavigation } from '@react-navigation/native';

const PetInfoFormComponents = () => {
    const [petPhotoUri, setPetPhotoUri] = useState(null);
    const [birthday, setBirthday] = useState('');
    const [petName, setPetName] = useState('');
    const [petType, setPetType] = useState('');
    const [petBreed, setPetBreed] = useState('');
    const [petGender, setPetGender] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [petPhotoError,setPetPhotoError ] = useState('');
    const navigation = useNavigation();

    const handleCreatePet = async () => {
        try {
            const token = await getToken(); // Retrieve the token
            const petData = {
                name: petName,
                type: petType,
                breed: petBreed,
                gender: petGender,
                birthday: birthday,
                photo: petPhotoUri,
            };
            const createdPet = await createPet(petData, token); // Pass the token to the createPet function
    
            if (createdPet) {
                // Navigate to the next screen with the created pet ID
                navigation.navigate('PetProfile', { petId: createdPet._id });
            }
        } catch (error) {
            console.error('Error creating pet:', error);
            setErrorMessage('Failed to create pet. Please try again.');
        }
    };
    


    const addImage = async () => {
        try {
          // Request permission to access the device's image library
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== 'granted') {
            alert('Permission to access camera roll is required!');
            return;
          }
      
          // Launch the image picker UI
          let image = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images, // Allow only images
            allowsEditing: true, // Enable editing
            aspect: [4, 3], // Aspect ratio for editing
            quality: 1, // Image quality (from 0 to 1)
          });
      
         // Check if image selection was cancelled
        if (!image.canceled) { // Change 'canceled' to 'cancelled'
            console.log("Selected Image URI:", image.uri);
            const selectedImage = image.assets[0]; // Getting the first image from assets array
            // Update the state with the selected image URI
            setPetPhotoUri(selectedImage.uri);
        }


          console.log(JSON.stringify(image));
        } catch (error) {
          console.error('Error selecting image:', error);
          // Handle error gracefully
        }
      };


    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.profilePhotoContainer}>
                    <TouchableOpacity style={styles.profilePhotoContainer} 
                   onPress={addImage}
                    >
                        {petPhotoUri ? (
                            <Image source={{ uri: petPhotoUri }} style={styles.profilePhoto} />
                        ) : (
                            <FontAwesomeIcon icon={faPaw}  style={styles.profilePhotoIcon} size={100} />
                        )}
                    </TouchableOpacity>
                </View>
                <View style={styles.addPhotoContainer}> 
                    <TouchableOpacity onPress={addImage}>
                        <Text style={styles.addPhotoLink}>Add Photo</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.name}>
                    <Text style={styles.inputTextHeader}>Name</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Enter your pet's name"
                        value={petName}
                        onChangeText={setPetName}
                    />
                </View>
                <View style={styles.name}>
                    <Text style={styles.inputTextHeader}>Type</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Enter your pet's type (ex: cat, dog, etc.)"
                        value={petType}
                        onChangeText={setPetType}
                    />
                </View>
                <View style={styles.name}>
                    <Text style={styles.inputTextHeader}>Breed</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Enter your pet's breed"
                        value={petBreed}
                        onChangeText={setPetBreed}
                    />
                </View>
                <View style={styles.name}>
                    <Text style={styles.inputTextHeader}>Gender</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Enter your pet's gender"
                        value={petGender}
                        onChangeText={setPetGender}
                    />
                </View>
                <View style={styles.name}>
                    <Text style={styles.inputTextHeader}>Birthday</Text>
                    <TextInput
                        style={[styles.inputText, styles.birthdayInput]}
                        placeholder="DD/MM/YYYY"
                        maxLength={10}
                        value={birthday}
                        onChangeText={(text) => {
                            text = text.replace(/[^0-9]/g, '');
                            if (text.length <= 2) {
                                text = text;
                            } else if (text.length <= 4) {
                                text = text.replace(/^(\d{2})(\d{0,2})/, '$1/$2');
                            } else {
                                text = text.replace(/^(\d{2})(\d{0,2})(\d{0,4}).*/, '$1/$2/$3');
                            }
                            setBirthday(text);
                        }}
                        keyboardType="number-pad"
                    />
                </View>
                <View style={styles.signInButton}>
                    <Button 
                        title="Create"
                        onPress={handleCreatePet}
                        buttonStyle={styles.signInButtonStyle}
                        titleStyle={styles.signInButtonTextStyle}
                    />
                </View>

                {errorMessage ? (
                <Text style={styles.errorMessage}>{errorMessage}</Text>
            ) : null}
          

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#649F95',
    },
    header: {
        marginTop: 20,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    body: {
        paddingTop: 115,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: 'white',
        width: '100%',
        padding: 20,
        paddingBottom: 40,
        marginTop: -110,
        position: 'relative',
    },
    profilePhotoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: '#DEEBE9',
        overflow: 'hidden',
        zIndex: 1,
    },
    profilePhoto: {
        width: '100%',
        height: '100%',
    },
    profilePhotoIcon: {
        color: '#5B8F86',
    },
    inputTextHeader: {
        fontSize: 15,
        paddingBottom: 2,
        marginBottom: 10,
        marginLeft: 10,
        fontWeight: '600',
    },
    inputText: {
        height: 50,
        borderColor: '#DEEBE9',
        borderWidth: 1,
        backgroundColor: '#DEEBE9',
        paddingLeft: 10,
        marginBottom: 10,
        borderRadius: 16,
    },
    name: {
        marginBottom: 15
    },
    birthdayInput: {
        flex: 1,
    },
    signInButton: {
        borderRadius: 6,
        margin: 15,
        marginTop: 15,
        alignItems: 'center',
    },
    signInButtonStyle: {
        backgroundColor: '#5B8F86',
        borderColor: '#5B8F86',
        borderWidth: 1,
        borderRadius: 16,
        height: 55,
        width: 300,
    },
    signInButtonTextStyle: {
        color: 'white',
        fontSize: 18,
    },
    addPhotoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        bottom: -10,
        zIndex: 12,
        alignSelf: 'center',
    },
    addPhotoLink: {
        color: '#5B8F86',
        fontSize: 15,
        fontWeight: '600',
    },
    errorMessage: {
        color: 'red', // Set error message color to red
        textAlign: 'center', // Center align the error message
        marginTop: -15, // Add top margin
        marginBottom:10,
    }
});

export default PetInfoFormComponents;
