import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const New_Reminders = () => {
    // States to hold the reminder name, date, and time
    const [reminderName, setReminderName] = useState('');
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [datePickerVisibility, setDatePickerVisibility] = useState(false);
    const [timePickerVisibility, setTimePickerVisibility] = useState(false);

    // Function to handle the creation of the reminder
    const handleCreateReminder = () => {
        // Format the date
        const formattedDate = date ? date.toDateString() : '';
        // Format the time
        const formattedTime = time ? new Date(time).toLocaleTimeString('en-US') : '';

        // Implement the logic to create the reminder here
        console.log("Reminder created:");
        console.log("Name:", reminderName);
        console.log("Date:", formattedDate);
        console.log("Time:", formattedTime);
    };

    // Function to open date picker
    const openDatePicker = () => {
        setDate(new Date());
        setDatePickerVisibility(true);
        setTimePickerVisibility(false);
    };

    // Function to open time picker
    const openTimePicker = () => {
        setTimePickerVisibility(true);
        setDatePickerVisibility(false);
    };

    // Function to handle date change
    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDatePickerVisibility(false);
        setDate(currentDate);
    };

    // Function to handle time change
    const handleTimeChange = (event, selectedTime) => {
        const currentTime = selectedTime || time;
        setTimePickerVisibility(false);
        setTime(currentTime);
    };

    return (
        <View style={styles.container}>
            {/* Upper Container */}
            <View style={styles.upperContainer}>
                {/* Title */}
                <Text style={styles.title}>Add Reminders</Text>
            </View>

            {/* Lower Container */}
            <View style={styles.lowerContainer}>
                {/* Content */}
                <View style={styles.content}>
                    <Text style={styles.createReminderText}>Create Reminder</Text>
                    <View style={styles.box1}>
                        {/* First white box */}
                        <TextInput
                            style={styles.input}
                            placeholder="Reminder Name"
                            value={reminderName}
                            onChangeText={text => setReminderName(text)}
                        />
                        {/* Second white box */}
                        <TouchableOpacity onPress={openDatePicker}>
                            <TextInput
                                style={styles.input}
                                placeholder="Date (Optional)"
                                value={date ? date.toDateString() : ''}
                                editable={false}
                            />
                        </TouchableOpacity>
                        {/* Third white box */}
                        <TouchableOpacity onPress={openTimePicker}>
                            <TextInput
                                style={styles.input}
                                placeholder="Time (Optional)"
                                value={time ? new Date(time).toLocaleTimeString('en-US') : ''}
                                editable={false}
                            />
                        </TouchableOpacity>
                    </View>
                    {/* Create button */}
                    <TouchableOpacity style={styles.createButton} onPress={handleCreateReminder}>
                        <Text style={styles.createButtonText}>Create</Text>
                    </TouchableOpacity>
                </View>
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
            {timePickerVisibility && (
                <DateTimePicker
                    value={time || new Date()}
                    mode="time"
                    is24Hour={true}
                    display="default"
                    onChange={handleTimeChange}
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
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 0,
    },
    content: {
        marginTop: 40,
        alignItems: 'center',
    },
    box1: {
        height: 165, // Adjust the height to accommodate the inner boxes
        width: '90%',
        marginBottom: 10,
        backgroundColor: '#EBEBEB',
        borderWidth: 2,
        borderRadius: 6,
        borderColor: '#EBEBEB',
        padding: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 6,
        padding: 10,
        color: 'black',
    },
    createReminderText: {
        fontSize: 18,
        marginBottom: 10,
        marginLeft: -190,
        alignItems: 'center',
        color: '#343232',
    },
    createButton: {
        backgroundColor: '#649F95',
        borderRadius: 6,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 10,
        width: '40%',
        alignItems: 'center',
    },
    createButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export default New_Reminders;
