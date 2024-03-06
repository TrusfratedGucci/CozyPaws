import React from "react";
import { View, StyleSheet, Text, Image } from 'react-native';

// Import the image using require
const addIcon = require('../assets/Vector.png');

const Reminders = () => {
    return (
        <View style={styles.container}>
            {/* Upper Container */}
            <View style={styles.upperContainer}>
                {/* Title */}
                <Text style={styles.title}>Reminders</Text>
            </View>

            {/* Lower Container */}
            <View style={styles.lowerContainer}>
                {/* Content */}
                <View style={styles.content}>
                    <View style={styles.box1}>
                        <Text style={styles.text}>Meet the vet</Text>
                        <Text style={styles.date_time}>On 20 Jun 2023</Text>
                    </View>
                    <View style={styles.addReminderContainer}>
                        {/* Use the imported image */}
                        <Image source={addIcon} style={styles.addIcon} />
                        <Text style={styles.addText}>Add Reminder</Text>
                    </View>
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
        marginTop: 80,
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        lineHeight: 40,
        marginBottom: 10,
        marginTop: -3,
    },
    date_time: {
        fontSize: 14,
    },
    box1: {
        height: 100,
        width: '90%',
        marginBottom: 10,
        backgroundColor: '#EBEBEB',
        borderWidth: 2,
        borderRadius: 6,
        borderColor: '#EBEBEB',
        padding: 10,
    },
    addReminderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    addIcon: {
        width: 36.5,
        height: 36.8,
        marginRight: 5,
    },
    addText: {
        fontSize: 18,
        lineHeight: 40,
        marginBottom: 10,
        marginTop: 90,
        marginLeft: -80,
        color: '#343232',
    }
});

export default Reminders;