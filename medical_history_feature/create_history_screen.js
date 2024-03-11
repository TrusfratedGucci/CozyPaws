import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Modal } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import DateTimePicker from '@react-native-community/datetimepicker';

const CreateHistory = () => {
    const [record, setRecord] = useState({
        type: '',
        heading: '',
        description: '',
        date: ''
    });

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [date, setDate] = useState(null);
    const [datePickerVisibility, setDatePickerVisibility] = useState(false);

    const handleCreateHistory = () => {
        // Function to handle creating a history record
        console.log("Creating History Record", record);
        // Format the date
        const formattedDate = date ? date.toDateString() : '';
        console.log("Date:", formattedDate);
    };

    const openDatePicker = () => {
        setDatePickerVisibility(true);
    };

    // Function to handle date change
    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDatePickerVisibility(false);
        setDate(currentDate);
    };

    const handleSelectType = (selectedType) => {
        setRecord({ ...record, type: selectedType });
        setIsModalVisible(false);
    };

    return (
        <View style={styles.container}>
            {/* Upper Container */}
            <View style={styles.upperContainer}>
                {/* Title */}
                <Text style={styles.title}>Add Medical History</Text>
            </View>

            {/* Lower Container */}
            <View style={styles.lowerContainer}>
                {/* Content */}
                <ScrollView>
                    <View style={styles.content}>
                        {/* New Record Form */}
                        <View style={styles.form}>
                            {/* Custom dropdown */}
                            <TouchableOpacity style={styles.dropdownButton} onPress={() => setIsModalVisible(true)}>
                                <Text style={styles.dropdownText}>{record.type ? record.type : "Select Type"}</Text>
                            </TouchableOpacity>
                            {/* Modal for custom dropdown */}
                            <Modal
                                transparent={true}
                                visible={isModalVisible}
                                onRequestClose={() => setIsModalVisible(false)}
                            >
                                <View style={styles.modalContainer}>
                                    <View style={styles.modalContent}>
                                        <TouchableOpacity style={styles.modalItem} onPress={() => handleSelectType('Accident')}>
                                            <Text style={styles.modalItemText}>Accident</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.modalItem} onPress={() => handleSelectType('Medication')}>
                                            <Text style={styles.modalItemText}>Medication</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.modalItem} onPress={() => handleSelectType('Sickness')}>
                                            <Text style={styles.modalItemText}>Sickness</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Modal>
                            <TextInput
                                style={styles.input}
                                placeholder="Heading"
                                value={record.heading}
                                onChangeText={(text) => setRecord({ ...record, heading: text })}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Description"
                                value={record.description}
                                onChangeText={(text) => setRecord({ ...record, description: text })}
                            />

                            <TouchableOpacity onPress={openDatePicker}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Date"
                                    value={date ? date.toDateString() : ''}
                                    editable={false}
                                />
                            </TouchableOpacity>        

                            <TouchableOpacity style={styles.addButton} onPress={handleCreateHistory}>
                                <Text style={styles.buttonText}>Add Record</Text>
                            </TouchableOpacity>
                            
                        </View>
                    </View>
                </ScrollView>
            </View>

            {datePickerVisibility && (
                <DateTimePicker
                    value={date || new Date()}
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
    upperContainer: {
        flex: 1,
        backgroundColor: '#649F95',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 25,
    },
    lowerContainer: {
        flex: 8,
        backgroundColor: 'white',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderWidth: 2,
        borderColor: 'white',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 0,
    },
    content: {
        marginTop: 30,
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginBottom: 15,
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 20,
    },
    input: {
        backgroundColor: '#F2F2F2',
        borderRadius: 6,
        padding: 10,
        marginBottom: 10,
        color: 'black',
    },
    addButton: {
        backgroundColor: '#649F95',
        borderRadius: 6,
        paddingVertical: 12,
        alignItems: 'center',
    },
    buttonText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16
    },
    dropdownButton: {
        backgroundColor: '#F2F2F2',
        borderRadius: 6,
        padding: 10,
        marginBottom: 10,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    dropdownText: {
        fontSize: 16,
    },
    modalContainer: {
        flex: 1,
        
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 20,
        // alignContent: 'flex-start',
    },
    modalItem: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    modalItemText: {
        fontSize: 16,
    },
});

export default CreateHistory;
