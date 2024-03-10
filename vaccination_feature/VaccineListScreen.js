import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Modal, TextInput } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-native-elements';
import { faCirclePlus, faSquareXmark} from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import DateTimePickerModal from '@react-native-community/datetimepicker';
import { fetchVaccinationHistory, addNewVaccine } from '../api/pet';

const Vaccines = () => {
    const [showModal, setShowModal] = useState(false); // State variable to control modal visibility
    const [vaccineName, setVaccineName] = useState('');
    const [vaccineDate, setVaccineDate] = useState(new Date());
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const route = useRoute();
    const { petId } = route.params || {}; // Handle undefined route.params
    const navigation = useNavigation();
    const [vaccines, setVaccines] = useState([]);
    
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setVaccineDate(date);
        hideDatePicker();
    };

    const handleContinue = () => {
        setShowModal(true); // Show modal when "Add a New Vaccine" is clicked
    };

    useEffect(() => {
         // Check if petId is defined
        if (petId) {
            // Call the fetchVaccinationHistory function with the petId
            fetchVaccinationHistory(petId)
                .then(data => {
                    // Set the fetched data to the vaccines state
                    setVaccines(data);
                })
                .catch(error => {
                    // Log an error if fetching vaccines fails
                    console.error('Error fetching vaccines:', error);
                });
        }
    }, [petId]);
    

    const handleAddVaccine = () => {
        // Create a new vaccine object with the entered name, selected date, and petId
        const newVaccine = { petId: petId, vaccineName: vaccineName, vaccinationDate: vaccineDate };
        
        // Call the addNewVaccine function with the new vaccine data
        addNewVaccine(newVaccine)
            .then(response => {
                // Log success message and update vaccines state with the new vaccine
                console.log('Vaccine added successfully:', response);
                setVaccines([...vaccines, response]);
                // Clear input fields after adding vaccine
                setVaccineName('');
                setVaccineDate(new Date());
            })
            .catch(error => {
                // Log an error if adding vaccine fails
                console.error('Error adding vaccine:', error);
            });
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
                                        value={vaccineName}
                                        onChangeText={setVaccineName}
                                    />
                                </View>    
                                <View style={styles.dateContainer}>
                                    <View>
                                        <Text style={styles.inputTextHeader}>Date</Text>
                                        <TextInput
                                            style={[styles.modalInput, styles.dateInputText]}
                                            placeholder="Selected Date"
                                            value={vaccineDate.toLocaleDateString()} // Display selected date
                                            editable={false} // Make it non-editable
                                        />
                                    </View>
                                    <View style={styles.datePickerContainer}>
                                        <TouchableOpacity style={styles.datePickerButton} onPress={showDatePicker}>
                                            <FontAwesomeIcon icon={faCalendar} style={styles.calendarIcon} />
                                        </TouchableOpacity>
                                        {isDatePickerVisible && (
                                            <DateTimePickerModal
                                            value={vaccineDate} // Set the value prop to vaccineDate
                                            mode="date"
                                            display="spinner"
                                            onChange={(event, date) => handleConfirm(date)}
                                        />
                                        
                                            )}
                                        </View>
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
    }
});

export default Vaccines;
