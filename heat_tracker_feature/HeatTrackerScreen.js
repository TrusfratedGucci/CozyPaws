import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Modal, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MyCalendar from "./MyCalendar";

const HeatTrackerScreen = () => {

    const Proestrus = 'During proestrus, which typically lasts around 9 days, female dogs may exhibit interesting behaviours such as tail flagging to signal their readiness for mating. However, they\'re not quite ready to commit yet! This phase is like the prelude to a romantic dance, where the female dog is sending signals to potential suitors but isn\'t quite ready to take the lead.';

    const Estrus = 'Estrus, also known as the "honeymoon phase," is the peak of the heat cycle, lasting about 9 days on average. Female dogs are at their most fertile and receptive to mating during this time. It\'s like a whirlwind romance where sparks fly, and love is in the air! Owners may notice their dog\'s increased affectionate behaviour and the unique way they communicate their readiness for romance.';

    const Diestrus = 'Diestrus is the chill phase that follows the excitement of estrus, lasting around 60 to 90 days if pregnancy doesn\'t occur. Think of it as the post-honeymoon period, where things calm down, and the female dog takes a well-deserved break. During diestrus, the reproductive system returns to its resting state, and the dog\'s interest in mating diminishes.';

    const Anestrus = 'Anestrus is like the offseason between heat cycles, lasting around 4 to 5 months. It\'s a time for relaxation and rejuvenation, where female dogs enjoy being themselves without the hormonal fluctuations of the heat cycle. Owners can cherish this time to bond with their furry friend and engage in fun activities together, knowing that their pet is taking a break from the dating scene.';

    const [showCalendar, setShowCalendar] = useState(false);
    const [currentPhase, setCurrentPhase] = useState('');
    const [phaseDurations, setPhaseDurations] = useState({});

    useEffect(() => {
        fetchHeatCycleData();
    }, []);

    const fetchHeatCycleData = async (lastHeatDate) => {
        try {
            const response = await fetch('your-backend-url/predict-heat-cycle', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Add any authentication headers if required
                },
                body: JSON.stringify({ lastHeatDate }), // Send the last heat date to the backend
            });
            const data = await response.json();
            setCurrentPhase(data.currentPhase);
            setPhaseDurations(data.phaseDurations);
        } catch (error) {
            console.error('Error fetching heat cycle data:', error);
        }
    };

    const onSelectDate = (selectedDate) => {
        setShowCalendar(false); // Hide the calendar modal
        fetchHeatCycleData(selectedDate); // Fetch heat cycle data based on the selected date
    };

    const getDescription = () => {
        switch (currentPhase) {
            case 'Proestrus':
                return Proestrus;
            case 'Estrus':
                return Estrus;
            case 'Diestrus':
                return Diestrus;
            case 'Anestrus':
                return Anestrus;
            default:
                return '';
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.upperContainer}>
                <Text style={styles.headerText}>Heat Tracker</Text>
            </View>

            <View style={styles.lowerContainer}>
                <View style={styles.box1}>
                    <View style={styles.row}>
                        <View style={styles.boxTextContainer}>
                            <Text style={styles.boxTextHeader}>Phase: {currentPhase}</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.boxTextContainer}>
                            <Text style={styles.boxTextHeader}>Duration: {phaseDurations[currentPhase]}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.box2}>
                    <View style={styles.row}>
                        <View style={styles.boxDescriptionContainer}>
                            <Text style={styles.boxText}>Did You Know?</Text>
                            <Text style={styles.descriptionText}>  {getDescription()}  </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.iconBox}>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity onPress={() => setShowCalendar(!showCalendar)}>
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
                onRequestClose={() => setShowCalendar(false)}
            >
                <View style={styles.modalBackground}>
                    <MyCalendar onSelectDate={onSelectDate} />
                </View>
            </Modal>

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
        backgroundColor: '#DEEBE9',
        borderRadius: 15,
        top: 50,
        left: 20,
        right: 20,
        position: 'absolute',
    },


    box2: {
        padding: 25,
        backgroundColor: '#DEEBE9',
        borderRadius: 15,
        top: 200,
        left: 20,
        right: 20,
        position: 'absolute',
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    boxDescriptionContainer: {
        marginTop: 10,
    },

    boxTextContainer: {
        // marginTop: 30,
    },

    boxText: {
        marginBottom: 45, // Adjusted margin to separate phase and duration
        fontWeight: '700',
        color: '#888888',
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
    boxTextHeader: {
        marginBottom: 10,
        padding: 10,
        fontWeight: '700',
        color: '#888888',
        marginRight: 10, // Adjusted margin for better spacing
    },

});

export default HeatTrackerScreen;
