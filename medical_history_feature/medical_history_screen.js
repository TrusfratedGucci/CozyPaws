import React from "react";
import { View, StyleSheet, Text, Image } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";

// Import the image using require

const MedicalHistory = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
            {/* Upper Container */}
            <View style={styles.upperContainer}>
                {/* Title */}
                <Text style={styles.title}>Medical History</Text>
            </View>

            {/* Lower Container */}
            <View style={styles.lowerContainer}>
                {/* Content */}
                <View style={styles.content}>
                    <View style={styles.box}>
                        <View style={styles.set}>
                            <Text style={styles.type}>Accident</Text>
                        </View>
                        <View style={styles.set}>
                            <Text style={styles.heading}>Got Stitches</Text>
                        </View>
                        <View style={styles.set}>
                            <Text style={styles.description}>Got 6 stitches on the left leg. Gave antibiotics and pain killers.</Text>
                        </View>
                        <View style={styles.set}>
                            <Text style={styles.date}>On 25th Dec 2022</Text>
                        </View>
                    </View>

                    <View style={styles.box}>
                        <View style={styles.set}>
                            <Text style={styles.type}>Medication</Text>
                        </View>
                        <View style={styles.set}>
                            <Text style={styles.heading}>Gave Medicines for Worms</Text>
                        </View>
                        <View style={styles.set}>
                            <Text style={styles.description}>Give 2 tablets of Vermox.</Text>
                        </View>
                        <View style={styles.set}>
                            <Text style={styles.date}>On 22nd Nov 2022</Text>
                        </View>
                    </View>

                    <View style={styles.box}>
                        <View style={styles.set}>
                            <Text style={styles.type}>Sickness</Text>
                        </View>
                        <View style={styles.set}>
                            <Text style={styles.heading}>Vomited</Text>
                        </View>
                        <View style={styles.set}>
                            <Text style={styles.description}>Vomited 3 times during the day.</Text>
                        </View>
                        <View style={styles.set}>
                            <Text style={styles.date}>On 20th Nov 2022</Text>
                        </View>
                    </View>

                    <View style={styles.box}>
                        <View style={styles.set}>
                            <Text style={styles.type}>Accident</Text>
                        </View>
                        <View style={styles.set}>
                            <Text style={styles.heading}>Got a Bruise</Text>
                        </View>
                        <View style={styles.set}>
                            <Text style={styles.description}>Knocked his head on a wall and got a bruise.</Text>
                        </View>
                        <View style={styles.set}>
                            <Text style={styles.date}>On 28th Aug 2022</Text>
                        </View>
                    </View>

                </View>
            </View>
            </ScrollView>
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
    set: {
        paddingLeft: 7,
        paddingRight: 5,
    },
    type: {
        fontSize: 16,
        paddingTop: 15,
        paddingBottom: 5,
    },
    heading: {
        fontSize: 20,
        fontWeight: '600',
        paddingBottom: 8,
    },
    description:{
        fontSize: 16,
        fontWeight: '400',
        paddingBottom: 8,
    },
    date: {
        fontSize: 13,
        paddingBottom: 15,
    },
    box: {
        width: '90%',
        marginBottom: 15,
        backgroundColor: 'white',
        borderWidth: 3,
        borderRadius: 15,
        borderColor: '#eaeaea',
        paddingLeft: 10,
    },
});

export default MedicalHistory;