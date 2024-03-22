import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Modal, TextInput } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCirclePlus, faSquareXmark} from '@fortawesome/free-solid-svg-icons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { fetchMedicalHistoriesForPet } from '../api/pet';
import { getToken } from '../api/auth';

const MedicalHistory = ({ route }) => {
    const petID = route.params.petID;
    const navigation = useNavigation(); 

    
    const [records, setRecords] = useState([]);

   
        const loadMedicalHistories = async () => {
            try {
                const token = await getToken(); // Get the token
                console.log("Pet ID:", petID); // Add this line
                const medicalHistories = await fetchMedicalHistoriesForPet(petID, token); // Fetch medical histories for the pet
                console.log("Medical records:", medicalHistories); // Add this line
                // Check if the response contains pet profiles or a message indicating none found
                if (medicalHistories !== null && medicalHistories.length > 0) {
                    setRecords(medicalHistories);
                } else {
                    // Display a message to the user
                    console.log("No medical histories found for this pet");
                }
            } catch (error) {
                console.error('Error fetching medical histories:', error);
            }
        };
    
    


    // Load medical histories when the screen gains focus
    useFocusEffect(
        React.useCallback(() => {
            loadMedicalHistories();
        }, [])
    );
    

    const handleContinue = () => {
        navigation.navigate('CreateHistory', { petID: petID });
    };


    return (
        <View style={styles.container}>

            <View style={styles.body}>

                <View style={styles.header}>
                    <View style={styles.addMedicalContainer}>
                        <View>
                            {/* TouchableOpacity to navigate to pet profile creation */}
                            <TouchableOpacity onPress={handleContinue}> 
                                <FontAwesomeIcon icon={faCirclePlus} color="#5b8f86" size={50} />
                            </TouchableOpacity>
                        </View>       

                        <View>
                            <TouchableOpacity onPress={handleContinue}>
                                <Text style={styles.addMedicalText}> Add a New Medical History</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                </View>

                <View style={styles.medicalListCard}>
                    <View style={styles.medicalListHeaderContainer}>
                        <Text style={styles.medicalListHeader}>Medical Records</Text>
                    </View>
                    <FlatList 
                        data={records}
                        renderItem={({ item }) => (
                            <View style={styles.medicalStyle}>
                                <View>
                                    <Text style={styles.medicalCategoryStyle}>{item.medicalType}</Text>
                                </View>
                                <View>
                                    <Text style={styles.medicalNameStyle}>{item.medicalName}</Text>
                                </View>
                                <View>
                                    <Text style={styles.medicalDescStyle}>{item.medicalDescription}</Text>
                                </View>
                                <View style={styles.DateStyle}>
                                    <Text>Date: {new Date(item.medicalDate).toLocaleDateString()}</Text>
                                </View>
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#649F95',
    },
    body: {
        paddingTop: 115,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: 'white',
        width: '100%',
        padding: 20,
        paddingBottom: 40,
        marginTop: 70,
        flex: 1,
    },
    medicalStyle: {
        marginVertical: 5,
        backgroundColor: 'white',
        padding: 30,
        borderRadius: 20,
    },
    medicalListCard: {
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#DEEAE8',
        backgroundColor: '#DEEAE8',
        padding:30,
        marginTop: 40, // Adjust the margin top value as needed
        marginBottom: 40, // Adjust the margin top value as needed
    },
    medicalListHeader:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom:15, 
    },
    medicalListHeaderContainer: {
        justifyContent: 'center',
        alignItems: 'center', // Align center horizontally
    },
    medicalNameStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 15,
        color: 'black',
    },  
    addMedicalContainer: {
        flexDirection: 'row',
        alignItems: 'center', // Align items at the start of the container vertically
        marginTop: -60,
        justifyContent: 'center',
    },
    
    addMedicalText: {
        marginLeft:15,
        fontSize: 15,
        color: '#5B8F86', // Change text color
    },
    addVaccineCard: {
        // alignItems: 'center',
        marginBottom: 10,
       
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#DEEAE8',
        backgroundColor: '#DEEAE8',
        padding: 30,
    },
    addButtonStyle: {
        backgroundColor: '#5B8F86', // Change button background color
        borderColor: '#5B8F86', // Change button border color
        borderWidth: 1, // Add button border width
        borderRadius: 16, // Add button border radius
        height: 55, // Set button height
        width: 300,
    },
    addButtonText: {
        color: 'white', // Change text color
        fontSize: 18,
    },
    addButton: {
        borderRadius: 6, // Add border radius
        margin: 15,
        marginTop: 45,
        alignItems: 'center',
    },
    medicalCategoryStyle: {
        marginTop: -20,
        marginBottom: 20,
    }, 
    medicalDescStyle: {
        marginBottom: 10,
    }
});

export default MedicalHistory;
