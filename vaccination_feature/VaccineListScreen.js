import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCirclePlus} from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';

const Vaccines = () => {
    // const [vaccines, setVaccines] = useState([]);
    const [vaccines, setVaccines] = useState([
        { vaccineName: 'Dummy Vaccine 1', vaccinationDate: new Date() },
        { vaccineName: 'Dummy Vaccine 2', vaccinationDate: new Date() },
        { vaccineName: 'Dummy Vaccine 2', vaccinationDate: new Date() },
        { vaccineName: 'Dummy Vaccine 2', vaccinationDate: new Date() },
        { vaccineName: 'Dummy Vaccine 2', vaccinationDate: new Date() },
        { vaccineName: 'Dummy Vaccine 2', vaccinationDate: new Date() },
        // Add more dummy vaccine objects as needed
    ]);
    const route = useRoute();
    const { petId } = route.params || {}; // Handle undefined route.params
    const navigation = useNavigation();


    useEffect(() => {
        // Fetch vaccination history for the specified pet from the backend
        if (petId) { // Check if petId is defined
            axios.get(`YOUR_BACKEND_API_URL/pets/${petId}/vaccines`)
                .then(response => {
                    setVaccines(response.data);
                })
                .catch(error => {
                    console.error('Error fetching vaccines:', error);
                });
        }
    }, [petId]);

    const handleContinue = () => {
        // Navigate to PetInfoForm
        navigation.navigate('Vaccine');
    };


    return (
        <View style={styles.container}>

            <View style={styles.body}>

            <View style={styles.header}>
                <View style={styles.addVaccineContainer}>
                    <View>
                        {/* TouchableOpacity to navigate to pet profile creation */}
                        <TouchableOpacity onPress={handleContinue}> 
                            <FontAwesomeIcon icon={faCirclePlus} color="#5b8f86" size={50} />
                        </TouchableOpacity>
                    </View>       

                    <View>
                        <TouchableOpacity onPress={handleContinue}>
                            <Text style={styles.addVaccineText}> Add a New Vaccine</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </View>

                <View style={styles.vaccineListCard}>
                    <View style={styles.vaccineListHeaderContainer}>
                        <Text style={styles.vaccineListHeader}>Done Vaccines</Text>
                    </View>
                    <FlatList 
                        data={vaccines}
                        renderItem={({ item }) => (
                            <View style={styles.vaccineStyle}>

                                <View >
                                    <Text style={styles.vaccineNameStyle}>{item.vaccineName}</Text>
                                </View>
                                
                                <View style={styles.vaccineDateStyle}>
                                    <Text>Date : {new Date(item.vaccinationDate).toLocaleDateString()}</Text>
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
    vaccineStyle: {
        marginVertical: 5,
        backgroundColor: 'white',
        padding: 30,
        borderRadius: 20,
    },
    vaccineListCard: {
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#DEEAE8',
        backgroundColor: '#DEEAE8',
        padding:30,
        marginTop: 40, // Adjust the margin top value as needed
        marginBottom: 40, // Adjust the margin top value as needed
    },
    vaccineListHeader:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom:15, 
    },
    vaccineListHeaderContainer: {
        justifyContent: 'center',
        alignItems: 'center', // Align center horizontally
    },
    vaccineNameStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 15,
        color: 'black',
    },  
    addVaccineContainer: {
        flexDirection: 'row', // Display children horizontally
        alignItems: 'center', // Align items vertically in the center
        marginTop: -60,
        justifyContent:'center',
    }, 
    addVaccineText: {
        marginLeft:15,
        fontSize: 15,
        color: '#5B8F86', // Change text color
    },
});

export default Vaccines;
