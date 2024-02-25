import React from "react";
import { View, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { Button } from "react-native-elements";

const PetProfileScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.upperContainer}></View>

            <ScrollView style={styles.lowerContainer}>
                <View style={styles.firstSpace}></View>
                <View style={styles.buttonContainer}>
                    <Image 
                        source={require('../assets/medical_history.png')}
                        style={styles.medicalIcon1} // Apply the icon styles
                    />
                    <Button 
                        title={
                        <View style={styles.buttonTitle}>
                            <Text style={styles.firstLine}>Medical</Text>
                            <Text style={styles.secondLine}>History</Text>
                            <Image 
                                    source={require('../assets/medical_history.png')} 
                                    style={styles.medicalIcon2} // Apply the icon styles
                                />
                        </View>
                        }
                        buttonStyle={styles.button}
                    />
                </View>
                <View style={styles.space}></View>
                <View style={styles.buttonContainer}>
                    <Image 
                            source={require('../assets/vaccination_record.png')}
                            style={styles.vaccinationIcon1} // Apply the icon styles
                    />
                    <Button 
                            title={
                            <View style={styles.buttonTitle}>
                                <Text style={styles.firstLine}>Vaccination</Text>
                                <Text style={styles.secondLine}>Records</Text>
                                <Image 
                                        source={require('../assets/vaccination_record.png')} 
                                        style={styles.vaccinationIcon2} // Apply the icon styles
                                    />
                            </View>
                            }
                            buttonStyle={styles.button}
                    />
                </View>
                <View style={styles.space}></View>
                <View style={styles.buttonContainer}>
                <Image 
                            source={require('../assets/litter_info.png')}
                            style={styles.litterIcon1} // Apply the icon styles
                    />
                    <Button 
                            title={
                            <View style={styles.buttonTitle}>
                                <Text style={styles.firstLine}>Litter</Text>
                                <Text style={styles.secondLine}>Information</Text>
                                <Image 
                                        source={require('../assets/litter_info.png')} 
                                        style={styles.litterIcon2} // Apply the icon styles
                                    />
                            </View>
                            }
                            buttonStyle={styles.button}
                    />
                </View>
                <View style={styles.space}></View>
                <View style={styles.buttonContainer}>
                <Image 
                            source={require('../assets/heat.png')}
                            style={styles.heatIcon1} // Apply the icon styles
                    />
                    <Button 
                            title={
                            <View style={styles.buttonTitle}>
                                <Text style={styles.firstLine}>Pet Heat</Text>
                                <Text style={styles.secondLine}>Tracker</Text>
                                <Image 
                                        source={require('../assets/heat.png')} 
                                        style={styles.heatIcon2} // Apply the icon styles
                                    />
                            </View>
                            }
                            buttonStyle={styles.button}
                    />
                </View>
                <View style={styles.space}></View>
                <View style={styles.buttonContainer}>
                <Image 
                            source={require('../assets/reminders.png')}
                            style={styles.reminderIcon1} // Apply the icon styles
                    />
                    <Button 
                            title={
                            <View style={styles.buttonTitle}>
                                <Text style={styles.firstLine}>Reminders</Text>
                                <Image 
                                        source={require('../assets/reminders.png')} 
                                        style={styles.reminderIcon2} // Apply the icon styles
                                    />
                            </View>
                            }
                            buttonStyle={[styles.button, {paddingTop: 25}]}
                    />
                </View>
                <View style={styles.space}></View>
                <View style={styles.buttonContainer}>
                <Image 
                            source={require('../assets/firstaid.png')}
                            style={styles.firstaidIcon1} // Apply the icon styles
                    />
                    <Button 
                            title={
                            <View style={styles.buttonTitle}>
                                <Text style={styles.firstLine}>First Aid</Text>
                                <Text style={styles.secondLine}>Tips</Text>
                                <Image 
                                        source={require('../assets/firstaid.png')} 
                                        style={styles.firstaidIcon2} // Apply the icon styles
                                    />
                            </View>
                            }
                            buttonStyle={styles.button}
                    />
                </View>
                <View style={styles.space}></View>
                <View style={styles.buttonContainer}>
                <Image 
                            source={require('../assets/training.png')}
                            style={styles.trainingIcon1} // Apply the icon styles
                    />
                    <Button 
                            title={
                            <View style={styles.buttonTitle}>
                                <Text style={styles.firstLine}>Training</Text>
                                <Text style={styles.secondLine}>Tips</Text>
                                <Image 
                                        source={require('../assets/training.png')} 
                                        style={styles.trainingIcon2} // Apply the icon styles
                                    />
                            </View>
                            }
                            buttonStyle={styles.button}
                    />
                </View>
                <View style={styles.space}></View>
                <View style={styles.buttonContainer}>
                <Image 
                            source={require('../assets/travel.png')}
                            style={styles.travelIcon1} // Apply the icon styles
                    />
                    <Button 
                            title={
                            <View style={styles.buttonTitle}>
                                <Text style={styles.firstLine}>Travel</Text>
                                <Text style={styles.secondLine}>Planner</Text>
                                <Image 
                                        source={require('../assets/travel.png')} 
                                        style={styles.travelIcon2} // Apply the icon styles
                                    />
                            </View>
                            }
                            buttonStyle={styles.button}
                    />
                    <View style={styles.lastSpace}></View>
                </View>
            </ScrollView>
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
        paddingHorizontal:20,
        left: 0,
        right: 0,
        bottom: 0,
        height: '94%', // Adjust the height as needed
        backgroundColor: 'white',
        borderTopLeftRadius: 20, // Adjust the border radius as needed
        borderTopRightRadius: 20, // Adjust the border radius as needed
    },

    buttonContainer: {
        marginVertical: 10, // Adjust vertical spacing between buttons
        marginHorizontal: 15,
    },

    button: {
        alignSelf: 'center',
        borderRadius: 20,
        height: 90, 
        width: 280,
        backgroundColor: '#649F95',
        justifyContent: 'flex-start', // Align button content to the left
        alignItems: 'flex-start', // Align button content to the left
        paddingLeft: 25,
        paddingTop: 15,
    },

    space: {
        height: 10, // Adjust height of space between buttons
    },

    firstSpace: {
        height: 39,
    },

    lastSpace: {
        height: 35,
    },

    firstLine: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 23,
    },

    secondLine: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,

    },

    medicalIcon1: {
        position: 'absolute',
        left: 135, // Adjust the distance of the icon from the right side
        width: 185,
        height: 185,
        top: -71.8,
    },

    medicalIcon2: {
        position: 'absolute',
        left: 105, // Adjust the distance of the icon from the right side
        width: 185,
        height: 185,
        top: -88,
    },

    vaccinationIcon1: {
        position: 'absolute',
        left: 174, // Adjust the distance of the icon from the right side
        width: 143,
        height: 130,
        top: -41.5,
    },

    vaccinationIcon2: {
        position: 'absolute',
        left: 145, // Adjust the distance of the icon from the right side
        width: 143,
        height: 130,
        top: -56,
    },
    litterIcon1: {
        position: 'absolute',
        left: 200, // Adjust the distance of the icon from the right side
        width: 100,
        height: 100,
        top: -14.5,
    },

    litterIcon2: {
        position: 'absolute',
        left: 170, // Adjust the distance of the icon from the right side
        width: 100,
        height: 100,
        top: -30,
    },

    heatIcon1: {
        position: 'absolute',
        left: 200, // Adjust the distance of the icon from the right side
        width: 110,
        height: 100,
        top: -10.5,
    },

    heatIcon2: {
        position: 'absolute',
        left: 170, // Adjust the distance of the icon from the right side
        width: 110,
        height: 100,
        top: -25,
    },

    reminderIcon1: {
        position: 'absolute',
        left: 190, // Adjust the distance of the icon from the right side
        width: 120,
        height: 120,
        top: -25.5,
    },

    reminderIcon2: {
        position: 'absolute',
        left: 160, // Adjust the distance of the icon from the right side
        width: 120,
        height: 120,
        top: -50,
    },

    firstaidIcon1: {
        position: 'absolute',
        left: 200, // Adjust the distance of the icon from the right side
        width: 90,
        height: 100,
        top: -15.5,
    },

    firstaidIcon2: {
        position: 'absolute',
        left: 170, // Adjust the distance of the icon from the right side
        width: 90,
        height: 100,
        top: -30,
    },

    trainingIcon1: {
        position: 'absolute',
        left: 185, // Adjust the distance of the icon from the right side
        width: 120,
        height: 90,
        top: -4,
    },

    trainingIcon2: {
        position: 'absolute',
        left: 155, // Adjust the distance of the icon from the right side
        width: 120,
        height: 90,
        top: -20,
    },

    travelIcon1: {
        position: 'absolute',
        left: 200, // Adjust the distance of the icon from the right side
        width: 105,
        height: 100,
        top: -22,
    },

    travelIcon2: {
        position: 'absolute',
        left: 170, // Adjust the distance of the icon from the right side
        width: 105,
        height: 115,
        top: -45,
    },
});

export default PetProfileScreen;
