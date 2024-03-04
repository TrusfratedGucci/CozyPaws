import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCirclePlus} from '@fortawesome/free-solid-svg-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const AddPetComponents = () => {
    const [birthday, setBirthday] = useState('');
    const [petData, setPetData] = useState(initialPetData);
    const navigation = useNavigation();

    

    const handleContinue = () => {
        // Navigate to PetInfoForm
        navigation.navigate('PetInfoForm');
    };

    
    const fetchPetData = async () => {
        try {
            // Make a network request to your backend API to fetch pet data
            const response = await fetch('https://your-api-url/pets');
            if (!response.ok) {
                throw new Error('Failed to fetch pet data');
            }
            const data = await response.json();
            setPetData(data); // Update the state with the fetched pet data
        } catch (error) {
            console.error('Error fetching pet data:', error);
        }
    };


    const handlePetProfileClick = (petId) => {
        // Navigate to the pet profile screen with the corresponding pet ID
        navigation.navigate('PetProfile', { petId });
    };
  

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.addprofileContainer}>
                    {/* TouchableOpacity to navigate to pet profile creation */}
                    <TouchableOpacity onPress={handleContinue}>
                        
                        <FontAwesomeIcon icon={faCirclePlus} color="#5b8f86" size={100} />
                    
                    </TouchableOpacity>
                </View>


                <View style={styles.addPhotoContainer}> 
                    <TouchableOpacity onPress={handleContinue} >
                        {/* Text link to add a pet profile */}
                        <Text style={styles.addPhotoLink}>Create Profile</Text>
                    </TouchableOpacity>
                </View>
                    
                
            </View>

            


            <View style={styles.body}>

                   
                   

                {/* Display pet profiles */}
                {petData.map(pet => (
                    <TouchableOpacity
                        key={pet.id}
                        style={styles.petProfileContainer}
                        onPress={() => handlePetProfileClick(pet.id)}>
                        <Image
                            source={pet.photo}
                            style={styles.petProfileImage}
                            resizeMode="cover"
                        />
                    </TouchableOpacity>
                ))}       

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
    addprofileContainer: {
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

export default AddPetComponents;
