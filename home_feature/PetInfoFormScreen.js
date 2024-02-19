import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Button, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { ScrollView } from 'react-native-gesture-handler';

const PetInfoFormComponents = () => {
    const [petPhoto, setPetPhoto] = useState(null);
    const [birthdayDay, setBirthdayDay] = useState('');
    const [birthdayMonth, setBirthdayMonth] = useState('');
    const [birthdayYear, setBirthdayYear] = useState('');
    

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
        <ScrollView style={styles.container}>
            {/* <View style={styles.profilePhotoContainer}>
                 {petPhoto ? (
                <Image source={{ uri: petPhoto }} style={styles.profilePhoto} />
                     ) : (
                        <View style={styles.imageFrame}>
                            <FontAwesomeIcon icon={null} style={styles.profilePhoto} size={60}/>
                        </View>
                )}
            </View> */}

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

                    <View>
                        {/* Type input */}
                        <Text style={styles.inputTextHeader}>Type</Text>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Enter your pet's type (ex: cat, dog, etc.)"
                        
                        />
                    </View>

                    <View>
                        {/* Breed input */}
                        <Text style={styles.inputTextHeader}>Breed</Text>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Enter your pet's breed"
                           
                        />
                    </View>

                    <View>
                        {/* Gender input */}
                        <Text style={styles.inputTextHeader}>Gender</Text>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Enter your pet's gender"
                           
                        />
                    </View>

                    <View>
                        {/* Gender input */}
                        <Text style={styles.inputTextHeader}>Birthday</Text>

                        <View style={styles.birthdayInputContainer}>
                            <TextInput
                                style={[styles.inputText, styles.birthdayInput]}
                                placeholder="DD"
                                maxLength={2}
                                value={birthdayDay}
                                onChangeText={setBirthdayDay}
                                keyboardType="number-pad"
                            />
                            <Text style={styles.birthdaySeparator}>/</Text>

                            <TextInput
                                style={[styles.inputText, styles.birthdayInput]}
                                placeholder="MM"
                                maxLength={2}
                                value={birthdayMonth}
                                onChangeText={setBirthdayMonth}
                                keyboardType="number-pad"
                            />
                            <Text style={styles.birthdaySeparator}>/</Text>
                            <TextInput
                                style={[styles.inputText, styles.birthdayInput]}
                                placeholder="YYYY"
                                maxLength={4}
                                value={birthdayYear}
                                onChangeText={setBirthdayYear}
                                keyboardType="number-pad"
                            />
                            
                        </View>
                        
                    </View>
            </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FD9340',
        // padding: 20,
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
    body: {
        borderRadius: 20,
        backgroundColor: 'white',
        marginTop: 50,
        width: '100%', // Make the width equal to the device width
        padding: 20,
        flex: 1,
    },
    profilePhotoContainer: {
        alignItems: 'center',
        borderWidth: 5,
        padding: -45,
        borderColor: 'white', // Change button border color
        width: 150,
        height: 150,
        borderRadius: 75, // Make it a circle
    },
    profilePhoto: {
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        // fontSize: 120, // Adjust the size of the icon here
    }, 
    imageFrame: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 150,
        borderRadius: 75, 
        backgroundColor: 'blue',
    },  
    // imageIcon: {
    //     fontSize: 100, // Adjust icon size as needed
    //     color: '#c9c9c9',
    // },
    inputTextHeader: {
        fontSize: 15,
        paddingBottom: 10,
        marginBottom: 10,
        marginLeft: 10,
        fontWeight: '600', // Updated font weight
    },
    inputText: {
        height: 55,
        borderColor: '#F7F7F7',
        borderWidth: 1,
        backgroundColor: '#F7F7F7',
        paddingLeft: 10, // Add left padding
        marginBottom: 10, // Add bottom margin
        borderRadius: 16, // Add border radius
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
});

export default PetInfoFormComponents;