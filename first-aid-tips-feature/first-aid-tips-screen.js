import React from "react";
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';   

// Import the image using require
const swelling = require('../assets/swelling.png');
const cut = require('../assets/cut.png');
const vomit = require('../assets/vomit.png');
const purging = require('../assets/purging.png');
const coughing = require('../assets/coughing.png');
const sprain = require('../assets/sprain.png');

const FirstAidTips = () => {
    return (
        <ScrollView >
            <View style={styles.container}>
                {/* Upper Container */}
                <View style={styles.upperContainer}>
                    {/* Title */}
                    <Text style={styles.title}>Training Tips</Text>
                </View>
                {/* Lower Container */}
                <View style={styles.lowerContainer}>
                    {/* Content */}
                    <View style={styles.content}>

                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Image
                                style={styles.img}
                                source={require('../assets/swelling.png')}
                                />
                            </View>
                            <View style={styles.tableCell}>
                                <Text style={styles.info}>Swelling</Text>
                            </View>
                        </View>

                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Image
                                style={styles.img}
                                source={require('../assets/cut.png')}
                                />
                            </View>
                            <View style={styles.tableCell}>
                                <Text style={styles.info}>Cut</Text>
                            </View>
                        </View>

                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Image
                                style={styles.img}
                                source={require('../assets/vomit.png')}
                                />
                            </View>
                            <View style={styles.tableCell}>
                                <Text style={styles.info}>Vomit</Text>
                            </View>
                        </View>

                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Image
                                style={styles.img}
                                source={require('../assets/purging.png')}
                                />
                            </View>
                            <View style={styles.tableCell}>
                                <Text style={styles.info}>Purging</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Image
                                style={styles.img}
                                source={require('../assets/coughing.png')}
                                />
                            </View>
                            <View style={styles.tableCell}>
                                <Text style={styles.info}>Coughing</Text>
                            </View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCell}>
                                <Image
                                style={styles.img}
                                source={require('../assets/sprain.png')}
                                />
                            </View>
                            <View style={styles.tableCell}>
                                <Text style={styles.info}>Sprain</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
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
        paddingBottom:5,
        alignItems: 'center',
        alignSelf: 'center',
    },
    heading: {
        fontSize: 15,
        paddingBottom: 2,
    },
    tableRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        width: '90%',
        borderColor: '#8b9e9b',
        borderWidth: 2,
        borderRadius: 15,
        height: 130,
    },
    tableCell: {
        flex: 1,
        alignItems: 'center',
    },
    img: {
        height: 120,
        objectFit: 'contain',
        
    },
    info: {
        fontSize: 25,
        fontWeight: '500',
        marginLeft: -40,
    },
});

export default FirstAidTips;