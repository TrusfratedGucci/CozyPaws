import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Modal, TextInput } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-native-elements';
import { faCirclePlus, faSquareXmark} from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { fetchVaccinationHistory, addNewVaccine } from '../api/pet';
import { getToken } from '../api/auth';

const Vaccines = ({ route }) => {
    const petID = route.params.petId;
    const [showModal, setShowModal] = useState(false);
    const [vaccine, setVaccine] = useState({
        vaccineName: '',
        vaccineDate: null // Initialize date within the record state
    });
    const [openCalendar, setOpenCalendar] = useState(false); // State for calendar

    const openDatePicker = () => {
        setOpenCalendar(true); // Open the date picker
    };

    // Function to handle date change
    const handleDateChange = (event, selectedDate) => {
        setOpenCalendar(false); // Close the date picker
        if (selectedDate) {
            setVaccine({ ...vaccine, vaccineDate: selectedDate });
        }
    };

    const handleContinue = () => {
        setShowModal(true);
    };

    const fetchData = async () => {
        try {
            if (petID) {
                console.log('petID:', petID);
                console.log('Type of petID:', typeof petID);

                const token = await getToken();
                const data = await fetchVaccinationHistory(petID, token);
                setVaccine(data);
            }
        } catch (error) {
            console.error('Error fetching vaccines:', error);
        }
    };

    useEffect(() => {
        fetchData(); // Call fetchData immediately

        // Ensure petId is included in dependencies to refetch data when it changes
    }, [petID]);

    const handleAddVaccine = async () => {
        try {
            const token = await getToken();
            console.log("Pet ID:", petID); // Add this line
            const response = await addNewVaccine(vaccine, petID, token);
            console.log("Response:", response); // Add this line
            setShowModal(false);
    
            // Refetch vaccination history data
            fetchData();
        } catch (error) {
            console.error('Error adding new vaccine:', error);
        }
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
                        data={vaccine}
                        renderItem={({ item }) => (
                            <View style={styles.vaccineStyle}>

                                <View >
                                    <Text style={styles.vaccineNameStyle}>{item.vaccineName}</Text>
                                </View>
                                
                                <View style={styles.vaccineDateStyle}>
                                    <Text>Date : {new Date(item.vaccineDate).toLocaleDateString()}</Text>
                                </View>
                                
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>


                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showModal}
                    onRequestClose={() => setShowModal(false)}>
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>

                                <TouchableOpacity onPress={() => setShowModal(false)} style={styles.closeButton}>
                                    <FontAwesomeIcon icon={faSquareXmark} style={{color: "#5b8f86",}} size={25} />
                                </TouchableOpacity>
                                <View >
                                    <Text style={styles.inputTextHeader}>Name</Text>
                                    <TextInput
                                        style={styles.modalInput}
                                        placeholder="Enter Vaccine Name"
                                        value={vaccine.vaccineName}
                                        onChangeText={(text) => setVaccine({ ...vaccine, vaccineName: text })}
                                    />
                                </View>    
                                <View style={styles.dateContainer}>
                                    <TouchableOpacity onPress={openDatePicker} style={styles.date}>
                                    <TextInput
                                        style={styles.date}
                                        placeholder="Date"
                                        value={vaccine.vaccineDate ? vaccine.vaccineDate.toDateString() : ''}
                                        editable={false}
                                    />

                                    </TouchableOpacity>
                                </View>
                                    <View style={styles.addButton}>
                                        {/* Add button */}
                                        <Button
                                            title="Add Vaccine"
                                            onPress={handleAddVaccine}
                                            buttonStyle={styles.addButtonStyle} // Apply button style
                                            titleStyle={styles.addButtonText} // Apply text style
                                        />
                                    </View>  
                            </View>
                    </View>
                    {openCalendar && (
                        <DateTimePicker
                            value={vaccine.vaccineDate || new Date()}
                            mode="date"
                            is24Hour={true}
                            display="default"
                            onChange={handleDateChange}
                        />
                    )}
                </Modal>
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
        flexDirection: 'row',
        alignItems: 'center', // Align items at the start of the container vertically
        marginTop: -60,
        justifyContent: 'center',
    },
    
    addVaccineText: {
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
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        width: '80%',
    },
    modalHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    modalInput: {
        height: 50,
        borderColor: '#DEEBE9',
        borderWidth: 1,
        backgroundColor: '#DEEBE9',
        paddingLeft: 10,
        marginBottom: 10,
        borderRadius: 16,
    },
    saveButton: {
        backgroundColor: '#649F95',
        borderRadius: 10,
        paddingVertical: 10,
        alignItems: 'center',
    },
    saveButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    dateInputText: {
        width: 230 ,
    },
    datePickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    datePickerButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#5b8f86',
        borderRadius: 16,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginTop: 15,
        marginRight: 10, // Add margin to the right of the icon
        marginLeft: 10,
    },
    datePickerButtonText: {
        color: 'white',
        
    },
    dateContainer:{
        // paddingRight: 120,
        flexDirection: 'row',
        // justifyContent:'space-between',
    },
    calendarIcon: {
        color: 'white',
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
    inputTextHeader: {
        fontSize: 15,
        paddingBottom: 2,
        marginBottom: 5,
        marginLeft: 10,
        fontWeight: 'semibold',
    },
    inputText: {
        height: 50,
        borderColor: '#5B8F86',
        borderWidth: 1,
        backgroundColor: '#EBEBEB',
        paddingLeft: 10,
        marginBottom: 10,
        borderRadius: 16,
    },
    closeButton: {
        marginBottom: 20,
    },
    date: {
        width: 150,
        height: 50,
        borderColor: '#DEEBE9',
        borderWidth: 1,
        backgroundColor: '#DEEBE9',
        paddingLeft: 10,
        marginBottom: 10,
        borderRadius: 16,
        color: 'black',
    },
});

export default Vaccines;
