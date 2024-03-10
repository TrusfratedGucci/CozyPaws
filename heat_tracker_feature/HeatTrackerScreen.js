import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Modal, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MyCalendar from "./MyCalendar";


const HeatTrackerScreen = () => {
    const [showCalendar, setShowCalendar] = useState(false);
    const [showDescription, setShowDescription] = useState(false);

    const toggleCalendar = () => {
        setShowCalendar(!showCalendar);
    };

    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };

    return(
        <View style={styles.container}>
            <View style={styles.upperContainer}>
                <Text style={styles.headerText}>Heat Tracker</Text>
            </View>

            <View style={styles.lowerContainer}>
                <View style={styles.box1}>
                    <View style={styles.row}>
                        <View style={styles.boxTextContainer}>
                            <Text style={styles.boxText}>Phase</Text>
                            <View style={styles.horizontalLine}></View>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.boxTextContainer}>
                            <Text style={styles.boxText}>Duration</Text>
                            <View style={styles.horizontalLine}></View>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.boxText} onPress={toggleDescription}>Next Phase</Text>
                    </View>
                </View>

                <View style={styles.box2}>
                    <TouchableOpacity onPress={toggleDescription}>
                        <View style={styles.row}>
                            <View style={styles.boxTextContainer}>
                                <Text style={styles.boxText}>Did You Know?</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    {showDescription && (
                        <Text style={styles.descriptionText}>Brief Description goes here....</Text>
                    )}
                </View>

                <View style={styles.iconBox}>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity onPress={toggleCalendar}>
                            <Icon name="event" size={40} style={styles.calendarIcon} />
                        </TouchableOpacity>
                    </View>  
                </View> 
                
            </View>

            {/* Calendar Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={showCalendar}
                onRequestClose={() => {
                    toggleCalendar();
                }}
            >
            <View style={styles.modalBackground}>
                <MyCalendar onSelectDate={() => {}} />
            </View>
            </Modal>
        
        
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    upperContainer: {
        flex: 1,
        backgroundColor: '#649F95',
    },
    lowerContainer: {
        position: 'absolute',
        justifyContent: 'center', // Align children vertically in the center
        paddingHorizontal:20,
        left: 0,
        right: 0,
        bottom: 0,
        height: '83%', // Adjust the height as needed
        backgroundColor: 'white',
        borderTopLeftRadius: 20, // Adjust the border radius as needed
        borderTopRightRadius: 20, // Adjust the border radius as needed
    },

    headerText: {
        fontSize: 24,
        marginTop: 80,
        textAlign:'center',
        fontWeight:'bold',
        color:'white',
    },

    box1: {
    padding: 15,
    backgroundColor: '#F0F0F0',
    borderRadius: 15,
    top: 50, 
    left: 20, 
    right: 20, 
    position: 'absolute', 
    },


    box2: {
        padding: 15,
        backgroundColor: '#F0F0F0',
        borderRadius: 15,
        top: 300,
        left: 20, 
        right: 20, 
        position: 'absolute', 
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    boxTextContainer: {
        flex: 1,
    },

    boxText: {
        marginBottom: 30,
        fontWeight: '700',
        color: '#888888',
    },

    horizontalLine: {
        borderBottomWidth: 2,
        borderBottomColor: '#E0E0E0',
        width: '100%', // Adjust to match the box width
        marginTop: 10, // Adjust as needed
        marginBottom: 10,
    },

    calendarIcon: {
        color:"#649F95" ,
        textAlign: 'center',
        padding: 10,
    },

    iconContainer: {
        marginTop: 550, 
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10, // Adjust the radius to match the icon size
        overflow: 'hidden', // Clip the content to the border radius
        backgroundColor: '#F0F0F0',
        width: 60,
        height: 60,
    },
    
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    iconBox: {
        alignItems: 'center', 
    },

    descriptionText: {
        marginTop: -20,
        fontSize: 16,
        color: '#888888',
        textAlign: 'center',
    },
});

export default HeatTrackerScreen;
