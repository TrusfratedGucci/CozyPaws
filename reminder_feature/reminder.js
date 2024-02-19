import React from "react";
import { View, StyleSheet, Platform, Text, Image } from 'react-native';

const Reminders = () => {
    return (
        <View style={styles.container}>
            {/* Circle Header */}
            <View style={styles.circle}>
                <Image
                    source={require('../assets/reminders_icon.png')} // Adjust the path as necessary
                    style={styles.icon}
                />
                <Text style={styles.circleText}>Reminders</Text>
            </View>

            {/* Bigger Circle */}
            <View style={styles.biggerCircle}></View>

            <View style={styles.upperContainer}></View>

            <View style={styles.lowerContainer}>
                {/* Content */}
                <View style={styles.content}>
                    <View style={styles.box1}>
                        <Text style={styles.text}>Meet the vet</Text>
                        <Text style={styles.date_time}>On 20 Jun 2023</Text>
                    </View>
                    <Image
                    source={require('../assets/Add.png')} // Adjust the path as necessary
                    style={styles.add}
                    />
                    <Text style={styles.addText}>Add Reminder</Text>
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
        backgroundColor: '#F49F6F',
    },
    lowerContainer: {
        position: 'absolute',
        justifyContent: 'center',
        paddingHorizontal: 20,
        left: 0,
        right: 0,
        bottom: 0,
        height: '90%',
        backgroundColor: 'white',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        overflow: 'hidden',
        ...Platform.select({
            android: {
                elevation: 8,
            },
            ios: {
                shadowColor: '#000',
                shadowOpacity: 0.8,
                shadowRadius: 6,
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
            },
        }),
    },
    circle: {
        position: 'absolute',
        top: -5,
        left: '30%',
        right: 0,
        backgroundColor: '#F6F3F3',
        height: 160,
        width: 160,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#F6F3F3',
        borderRadius: 90,
        zIndex: 4, // Higher zIndex to bring it to the front of the biggerCircle
        ...Platform.select({
            android: {
                elevation: 8,
            },
            ios: {
                shadowColor: '#000',
                shadowOpacity: 0.8,
                shadowRadius: 6,
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
            },
        }),
    },

    biggerCircle: {
        position: 'absolute',
        top: -15,
        left: '27.2%',
        backgroundColor: 'white',
        height: 180,
        width: 180,
        borderRadius: 90,
        zIndex: 3, // Higher zIndex to bring it to the front
        ...Platform.select({
            android: {
                elevation: 6,
            },
            ios: {
                shadowColor: '#000',
                shadowOpacity: 0.8,
                shadowRadius: 6,
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
            },
        }),
    },
    circleText: {
        fontSize: 18,
        textAlign: 'center',
        paddingTop: 14,
        color: '#343232',
    },
    icon: {
        width: 78, // Adjust the width of the image as needed
        height: 65, // Adjust the height of the image as needed
    },
    content: {
        marginTop: 80,
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
        marginBottom: 10,
        backgroundColor: '#EBEBEB',
        borderWidth: 2,
        borderRadius: 6,
        borderColor: '#EBEBEB',
        padding: 10,
        marginTop: -250, // Adjusted marginTop to bring box1 up
        ...Platform.select({
            android: {
                elevation: 5,
            },
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
            },
        }),
    },
    add: {
        position: 'absolute',
        justifyContent: 'center',
        paddingHorizontal: 20,
        left: 150,
        right: 0,
        bottom: 0,
    },
    addText: {
        fontSize: 18,
        lineHeight: 40,
        marginBottom: 10,
        marginTop: 10,
        position: 'absolute',
        bottom: -60, // Adjust as needed
        left: 112, // Adjust as needed
        color: '#343232',
        zIndex: 5,
    }
    
});

export default Reminders;
