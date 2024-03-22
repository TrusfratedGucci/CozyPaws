import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCirclePlus} from '@fortawesome/free-solid-svg-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { fetchPetProfiles } from '../api/pet';
import { getToken } from '../api/auth';
import { faPaw } from '@fortawesome/free-solid-svg-icons';


const AddPetComponents = () => {
    const [petData, setPetData] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = await getToken(); // Retrieving the token
                const data = await fetchPetProfiles(token); // Passing token 
            
                // Check if the response contains pet profiles or a message indicating none found
                if (data !== null && data.length > 0) {
                    setPetData(data);
                } else {
                    // Display a message to the user
                    console.log("No pet profiles found for this user");
                }
            } catch (error) {
                console.error('Error fetching pet data:', error);
                // Add a console log to ensure the catch block is reached
                console.log("Error occurred while fetching pet data:", error);
            }
        };        
        fetchData();
    }, [petData]);
    
    const handleContinue = () => {
        navigation.navigate('PetInfoForm');
    };
    
    const windowHeight = Dimensions.get('window').height;

    return (
        <View style={styles.container}>

            
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


            <View style={[styles.body, 
                // { height: windowHeight - 125 }
                ]}>
                <View style={styles.profileListContainer}>
                    {petData.map((pet, index) => (
                        <TouchableOpacity
                            key={pet._id}
                            style={[index % 2 === 1 ? styles.lastInRow : null]}
                            onPress={() => navigation.navigate('PetProfile', { petId: pet._id })}
                        >
                            <View style={styles.petProfileContainer}>
                                {pet.photo && pet.photo !== '' ? (
                                    <Image source={{ uri: pet.photo }} style={styles.profilePhoto} />
                                ) : (
                                    <FontAwesomeIcon icon={faPaw} style={styles.profilePhotoIcon} size={100} />
                                )}
                            </View>
                            <Text style={styles.petName}>{pet.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#649F95',

        // padding: 20,
    },
    header: {
        marginTop: 0,
        paddingTop: 20,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative', // Make the header position relative
        
    },

    headerText: {
        marginBottom: 25,
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        textAlign:'center',
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
        resizeMode: 'cover', // Ensure the image covers the entire container
    },
    profilePhotoIcon: {
        color: '#5B8F86',
        width: '100%',
        height: '100%',
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
    body: {
        marginTop: 115,
        borderTopLeftRadius: 20, // Adjust the border radius as needed
        borderTopRightRadius: 20, // Adjust the border radius as needed
        backgroundColor: 'white',
        width: '100%', // Make the width equal to the device width
        padding: 400,
        marginTop: -110, // Adjust the top margin to overlap with the profile picture container
        position: 'relative', // Make the body position relative
    },
    profileListContainer: {
        flexDirection: 'row', // Display pet profiles in a row
        flexWrap: 'wrap', // Allow profiles to wrap to the next row
        justifyContent: 'space-between', // Distribute profiles evenly
        // paddingBottom: 900,
        // // marginBottom: 9100,
    },
    petProfileContainer: {
        width: 150,
        height: 150,
        marginVertical: 10,
        borderRadius: 75,
        overflow: 'hidden',
        justifyContent: 'center', // Center items vertically
        alignItems: 'center', // Center items horizontally
        backgroundColor: '#DEEBE9',
    },
    petName: {
        // position: 'absolute',
        paddingBottom:15,
        bottom: 10, // Adjust as needed to position the name
        left: 0, // Align the name to the left edge
        right: 0, // Align the name to the right edge
        textAlign: 'center', // Center the name horizontally
        fontSize: 15,
        fontWeight: '600',
        color: '#5B8F86', // Customize the color of the name
    },
    lastInRow: {
        marginRight: 10, // Adjust the margin between elements in the same row
        marginBottom: 10, // Add margin bottom to move to the next row
    },
});

export default AddPetComponents;
