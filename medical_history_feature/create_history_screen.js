import React, { useState } from "react";
import { View, StyleSheet, TextInput, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { createMedicalHistoryRecord } from '../api/pet'; // Import createMedicalHistoryRecord function
import { useNavigation } from '@react-navigation/native';
import { getToken } from '../api/auth';

const CreateHistory = ({ route }) => {
    const petID = route.params.petID;
    const navigation = useNavigation(); // Access the navigation object
    const [record, setRecord] = useState({
        medicalType: '',
        medicalName: '',
        medicalDescription: '',
        medicalDate: null // Initialize date within the record state
    });

    const [openDropdown, setOpenDropdown] = useState(false); // State for dropdown
    const [openCalendar, setOpenCalendar] = useState(false); // State for calendar
    const [placeholder, setPlaceholder] = useState("Category");
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Accident', value: 'Accident' },
        { label: 'Medication', value: 'Medication' },
        { label: 'Sickness', value: 'Sickness' },
    ]);

    const selectedItem = items.find(item => item.value === value);

    const handleCreateHistory = async () => {
        console.log("Record before API call:", record); // Add this line
    
        if (!record.medicalType || !record.medicalName || !record.medicalDescription || !record.medicalDate) {
            console.log('Incomplete Form', 'Please fill in all fields');
            return;
        }
        
    
        try {
            const token = await getToken();
            console.log("Pet ID:", petID); // Add this line
            const response = await createMedicalHistoryRecord(petID, record, token);
            console.log("Response:", response); // Add this line
            Alert.alert('Success', 'Medical history record created successfully');
            navigation.navigate('MedicalHistory', { petID: petID }); 
        } catch (error) {
            console.error('Error creating medical history:', error);
            Alert.alert('Error', 'Failed to create medical history record');
        }
    };
    

    const openDatePicker = () => {
        setOpenCalendar(true); // Open the date picker
    };

    // Function to handle date change
    const handleDateChange = (event, selectedDate) => {
        setOpenCalendar(false); // Close the date picker
        if (selectedDate) {
            setRecord({ ...record, medicalDate: selectedDate });
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <View style={styles.content}>
                    <View style={styles.form}>
                        <View style={styles.dropdownContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Category"
                            value={record.type}
                            onChangeText={(text) => setRecord({ ...record, medicalType: text })}
                        />

                        </View>

                        <TextInput
                            style={styles.input}
                            placeholder="Heading"
                            value={record.heading}
                            onChangeText={(text) => setRecord({ ...record, medicalName: text })}
                        />
                        <TextInput
                            style={styles.description}
                            placeholder="Description"
                            value={record.description}
                            onChangeText={(text) => setRecord({ ...record, medicalDescription: text })}
                        />

                        <TouchableOpacity onPress={openDatePicker} style={styles.date}>
                            <TextInput
                                style={styles.date}
                                placeholder="Date"
                                value={record.medicalDate ? record.medicalDate.toDateString() : ''}
                                editable={false}
                            />
                        </TouchableOpacity>

                        <View style={styles.signInButton}>
                            <Button
                                title="Create Medical History"
                                onPress={handleCreateHistory}
                                buttonStyle={styles.signInButtonStyle}
                                titleStyle={styles.signInButtonTextStyle}
                            />
                        </View>
                    </View>
                </View>
            </View>

            {openCalendar && (
                <DateTimePicker
                    value={record.medicalDate || new Date()}
                    mode="date"
                    is24Hour={true}
                    display="default"
                    onChange={handleDateChange}
                />
            )}
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
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: '100%',
        height: '100%',
        padding: 20,
        paddingBottom: 40,
        marginTop: 60,
    },
    content: {
        marginTop: 30,
    },
    form: {
        width: '100%',
        backgroundColor: '#F2F2F2',
        borderRadius: 15,
        padding: 20,
        marginTop: -80,
        justifyContent: 'center',
    },
    input: {
        height: 50,
        borderColor: '#DEEBE9',
        borderWidth: 1,
        backgroundColor: '#DEEBE9',
        paddingLeft: 10,
        marginBottom: 10,
        borderRadius: 16,
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
    description: {
        height: 100,
        borderColor: '#DEEBE9',
        borderWidth: 1,
        backgroundColor: '#DEEBE9',
        paddingLeft: 10,
        marginBottom: 10,
        borderRadius: 16,
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
    signInButton: {
        borderRadius: 6,
        margin: 15,
        marginTop: 25,
        alignItems: 'center',
    },
    dropdown: {
        marginTop: 20,
        marginBottom: 10,
        borderColor: '#5B8F86',
        backgroundColor: '#5B8F86',
    },
    dropdownContainer: {
        marginBottom: 10,
        width: 130,
        zIndex: 1,
    },
    listItemContainerStyle: {
        backgroundColor: '#5B8F86',
        borderColor: '#5B8F86',
        color: 'white'
    },
    labelStyle: {
        color: "white"
    }
});

export default CreateHistory;
