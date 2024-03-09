import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Button } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { createPet } from '../api/pet'; 

const PetInfoFormComponents = () => {
    const [petPhoto, setPetPhoto] = useState(null);
    const [birthday, setBirthday] = useState('');
    const [petName, setPetName] = useState('');
    const [petType, setPetType] = useState('');
    const [petBreed, setPetBreed] = useState('');
    const [petGender, setPetGender] = useState('');

    const handleCreatePet = async () => {
        try {
            const token = await getToken(); // Retrieving the token
            const petData = {
                name: petName,
                type: petType,
                breed: petBreed,
                gender: petGender,
                birthday: birthday,
                photo: petPhoto,
            };
            await createPet(petData, token); // Passing the token to the createPet function
        } catch (error) {
            console.error('Error creating pet:', error);
        }
    };

    // Function to handle image selection
    const selectImage = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!');
            return;
        }
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (!pickerResult.cancelled) {
            setPetPhoto(pickerResult.uri);
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.profilePhotoContainer}>
                    <TouchableOpacity style={styles.profilePhotoContainer} onPress={selectImage}>
                        {petPhoto ? (
                            <Image source={{ uri: petPhoto }} style={styles.profilePhoto} />
                        ) : (
                            <FontAwesomeIcon icon={faPaw}  style={styles.profilePhotoIcon} size={100} />
                        )}
                    </TouchableOpacity>
                </View>
                <View style={styles.addPhotoContainer}> 
                    <TouchableOpacity onPress={selectImage}>
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
});

export default PetInfoFormComponents;
