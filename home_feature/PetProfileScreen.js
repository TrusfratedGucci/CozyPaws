import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import { fetchPetData } from '../api/pet';
import { getToken } from '../api/auth';

const PetProfile = ({ route }) => {
    const petID = route.params.petId;
    const navigation = useNavigation(); // Access the navigation object
    const [petData, setPetData] = useState(null);
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = await getToken();
                const data = await fetchPetData(petID, token);
                setPetData(data);
            } catch (error) {
                console.error('Error fetching pet data:', error);
            }
        };
        fetchData();
    }, [petID, petData]); // Include petID and petData in the dependency array
    


    
    const handleContinue = () => {
        console.log('petID in petInfo:', petID);
        console.log('Type of petID in PetInfo:', typeof petID);
        // Navigate to PetInfoScreen with the petId parameter
        navigation.navigate('PetInfo', { petID: petID });
    };

    const continueToMedical = () => {
        // Navigate to Medical History
        navigation.navigate('MedicalHistory', { petID: petID });
    };

    const continueToVaccines = () => {
        // Log the value and type of petID
        console.log('petID:', petID);
        console.log('Type of petID:', typeof petID);
        
        // Navigate to Vaccine History
        navigation.navigate('VaccineList', { petId: petID });
    };

    const continueToHeatCycle = () => {
        // Navigate to Heat Cycle
        navigation.navigate('HeatTracker', { petId: petID });
    };

    const continueToFirstAid = () => {
        // Navigate to First Aid
        navigation.navigate('FirstAidTips');
    };

    const continueToTraining = () => {
        // Navigate to Training
        navigation.navigate('TrainingTips');
    };

    const continueToGoWithPet = () => {
        // Navigate to Go with pet
        navigation.navigate('GoWithPet');
    };
    

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleContinue}>
                    <View style={styles.petProfileContainer}>
                        {petData && petData.photo ? (
                            <Image source={{ uri: petData.photo }} style={styles.profilePhoto} />
                        ) : (
                            <FontAwesomeIcon icon={faPaw} style={styles.profilePhotoIcon} size={100} />
                        )}
                    </View>
                </TouchableOpacity>
                <View style={styles.addPhotoContainer}>
                    <TouchableOpacity onPress={handleContinue}>
                        <Text style={styles.addPhotoLink}>{petData && petData.name}</Text>
                    </TouchableOpacity>
                </View>
            </View>

            


            <View style={styles.body}>

                <View style={styles.profileButtons}>
                    <Button
                        title= {
                                <View style={styles.buttonInside}>
                                    <View style={styles.profileButtonTextContainer}>
                                        <Text style={styles.profileButtonTextStyle}>Medical History</Text>
                                    </View>
                                    
                                    <View style={styles.profileButtonImageContainer}>
                                        <Image 
                                                source={require('../assets/medicalHistory.png')} 
                                                style={styles.buttonImage} // Apply the icon styles
                                            />
                                    </View>
                                    
                                </View>
                        }
                        onPress={continueToMedical}
                        buttonStyle={styles.profileButtonStyle} // Apply button style
                        >  
                    </Button>

                    <Button
                            title= {
                                <View style={styles.buttonInside}>
                                <View style={styles.profileButtonTextContainer}>
                                    <Text style={styles.profileButtonTextStyle}>Vaccination History</Text>
                                </View>
                                
                                <View style={styles.profileButtonImageContainer}>
                                    <Image 
                                            source={require('../assets/veterinarian.png')} 
                                            style={styles.buttonImage} // Apply the icon styles
                                        />
                                </View>
                                
                            </View>
                        }
                        onPress={continueToVaccines}
                        buttonStyle={styles.profileButtonStyle} // Apply button style
                        >  
                    </Button>

                    <Button
                            title= {
                                <View style={styles.buttonInside}>
                                <View style={styles.profileButtonTextContainer}>
                                    <Text style={styles.profileButtonTextStyle}>Pet Heat Cycle Tracker</Text>
                                </View>
                                
                                <View style={styles.profileButtonImageContainer}>
                                    <Image 
                                            source={require('../assets/heat.png')} 
                                            style={styles.buttonImage} // Apply the icon styles
                                        />
                                </View>
                                
                            </View>
                        }
                        onPress={continueToHeatCycle}
                        buttonStyle={styles.profileButtonStyle} // Apply button style
                        >  
                    </Button>

                    <Button
                            title= {
                                <View style={styles.buttonInside}>
                                <View style={styles.profileButtonTextContainer}>
                                    <Text style={styles.profileButtonTextStyle}>First Aid Tips</Text>
                                </View>
                                
                                <View style={styles.profileButtonImageContainer}>
                                    <Image 
                                            source={require('../assets/firstaid.png')} 
                                            style={styles.buttonImage} // Apply the icon styles
                                        />
                                </View>
                                
                            </View>
                        }
                        onPress={continueToFirstAid}
                        buttonStyle={styles.profileButtonStyle} // Apply button style
                        >  
                    </Button>

                    <Button
                            title= {
                                <View style={styles.buttonInside}>
                                <View style={styles.profileButtonTextContainer}>
                                    <Text style={styles.profileButtonTextStyle}>Training Tips</Text>
                                </View>
                                
                                <View style={styles.profileButtonImageContainer}>
                                    <Image 
                                            source={require('../assets/medal.png')} 
                                            style={styles.buttonImage} // Apply the icon styles
                                        />
                                </View>
                                
                            </View>
                        }
                        onPress={continueToTraining}
                        buttonStyle={styles.profileButtonStyle} // Apply button style
                        >  
                    </Button>

                    <Button
                            title= {
                                <View style={styles.buttonInside}>
                                <View style={styles.profileButtonTextContainer}>
                                    <Text style={styles.profileButtonTextStyle}>Go with Pet</Text>
                                </View>
                                
                                <View style={styles.profileButtonImageContainer}>
                                    <Image 
                                            source={require('../assets/hippies.png')} 
                                            style={styles.buttonImage} // Apply the icon styles
                                        />
                                </View>
                                
                            </View>
                        }
                        onPress={continueToGoWithPet}
                        buttonStyle={styles.profileButtonStyle} // Apply button style
                        >  
                    </Button>
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
        // position: 'relative', // Make the header position relative
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
        marginTop: -130, // Adjust the top margin to overlap with the profile picture container
        // position: 'relative', // Make the body position relative
        zIndex: -10,
    },
    profileButtons: {
        borderRadius: 6, // Add border radius
        margin: 15,
        marginTop: 15,
        // alignItems: 'center',
    },
    profileButtonStyle: {
        backgroundColor: '#5B8F86', // Change button background color
        borderColor: '#5B8F86', // Change button border color
        borderWidth: 1, // Add button border width
        borderRadius: 16, // Add button border radius
        height: 100, // Set button height
        marginVertical: 15,
        
        // width: 300,
    },
    profileButtonTextStyle: {
        color: 'white', // Change text color
        fontSize: 20,  
    },
    buttonInside: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        width: '100%', // Ensure the button takes the full width
    },
    profileButtonTextContainer: {
        flex: 1, // Take remaining space
        marginRight: 10, // Add some space between text and image
    },
    profileButtonImageContainer: {
        // No need for any styles here
    },
    buttonImage: {
        width: 70,
        height: 70,
    },    
    name: {
        marginBottom: 15
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
    petProfileImage: {
        flex: 1,
        width: null,
        height: null,
    },
    lastInRow: {
        marginRight: 10, // Adjust the margin between elements in the same row
        marginBottom: 10, // Add margin bottom to move to the next row
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
        zIndex: 100,
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
});

export default PetProfile;