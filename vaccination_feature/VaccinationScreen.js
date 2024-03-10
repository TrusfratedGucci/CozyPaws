import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Alert, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import DateTimePickerModal from '@react-native-community/datetimepicker'; // Update import statement
import { Button } from 'react-native-elements'; // Import Button component
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'; // Import axios for making HTTP requests

const VaccineApp = () => {
    const [vaccineName, setVaccineName] = useState('');
    const [vaccineDate, setVaccineDate] = useState(new Date());
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [vaccines, setVaccines] = useState([]); // Define vaccines state
    const navigation = useNavigation();

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

    const handleAddVaccine = () => {
        const newVaccine = { vaccineName: vaccineName, vaccinationDate: vaccineDate };
        // Send new vaccine data to the backend
        axios.post('/vaccines', newVaccine) // Assuming your backend API endpoint is '/vaccines'
            .then(response => {
                console.log('Vaccine added successfully:', response.data);
                // Update the frontend state with the new vaccine
                setVaccines([...vaccines, response.data]);
                // Clear input fields
                setVaccineName('');
                setVaccineDate(new Date());
            })
            .catch(error => {
                console.error('Error adding vaccine:', error);
                // Handle error
            });
    };

    return (
        <View style={styles.container}>
            <View style={styles.body}>

                <View style={styles.imageContainer}>
                    <Image source={require('../assets/clinic.png')} style={styles.imageStyle} />
                </View>

                <View style={styles.addVaccineCard}>
                    <View>
                        <Text style={styles.inputTextHeader}>Name</Text>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Enter Vaccine Name"
                            value={vaccineName}
                            onChangeText={setVaccineName}
                        />
                    </View>
                    <View style={styles.dateContainer}>
                        <View>
                            <Text style={styles.inputTextHeader}>Date</Text>
                            <TextInput
                                style={[styles.inputText, styles.dateInputText]}
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
        </View>
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
    headerText: {
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 80,
    },
    imageContainer: {
        alignItems: 'center',
        padding: 20,
        marginBottom: 10,
        marginTop: -90,
    },
    imageStyle: {
        width: 150, // Adjust width as needed
        height: 150, // Adjust height as needed
    },
    cardHeader: {
        alignItems: 'center',
        justifyContent:'center',
    },
    cardHeaderText: {
        fontSize: 22,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 20,
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
    dateInputText: {
        width: 250 ,
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
        marginLeft: 10,
    },
    datePickerButtonText: {
        color: 'white',
        marginLeft: 10,
    },
    dateContainer:{
        paddingRight: 120,
        flexDirection: 'row',
        // justifyContent:'space-between',
    },
    calendarIcon: {
        color: 'white',
    },
    upComing: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
});

export default VaccineApp;
