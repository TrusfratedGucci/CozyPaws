import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

const New_Reminders = () => {
    // States to hold the reminder name, date, and time
    const [reminderName, setReminderName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    // Function to handle the creation of the reminder
    const handleCreateReminder = () => {
        // Format the date
        const formattedDate = new Date(date).toDateString();
        // Format the time
        const formattedTime = new Date(time).toLocaleTimeString('en-US');

        // Implement the logic to create the reminder here
        console.log("Reminder created:");
        console.log("Name:", reminderName);
        console.log("Date:", formattedDate);
        console.log("Time:", formattedTime);
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
                        <TextInput
                            style={styles.input}
                            placeholder="Date (Optional)"
                            value={date}
                            onChangeText={text => setDate(text)}
                        />
                        {/* Third white box */}
                        <TextInput
                            style={styles.input}
                            placeholder="Time (Optional)"
                            value={time}
                            onChangeText={text => setTime(text)}
                        />
                    </View>
                    {/* Create button */}
                    <TouchableOpacity style={styles.createButton} onPress={handleCreateReminder}>
                        <Text style={styles.createButtonText}>      Create</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    },
    createButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export default New_Reminders;