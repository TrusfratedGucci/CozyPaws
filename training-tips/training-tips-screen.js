import React from "react";
import { View, StyleSheet, Text, Image } from 'react-native';

// Import the image using require
const sit = require('../assets/sit.png');
const fetch = require('../assets/fetch.png');
const down = require('../assets/down.png');
const play = require('../assets/play.png');

const TrainingTips = () => {
    return (
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
                    {/* <View style={styles.box}>
                        <View>
                            <Image
                                style={styles.img}
                                source={require('../assets/play.png')}
                            />
                        </View>
                        <View>
                            <View style={styles.set}>
                                <Text style={styles.info} >Play</Text>
                                <Text style={styles.info} >Commands</Text>
                            </View>
                        </View>
                    </View> */}
                    <View style={styles.tableRow}>
                        <View style={styles.tableCell}>
                            <Image
                            style={styles.img}
                            source={require('../assets/play.png')}
                            />
                        </View>
                    <View style={styles.tableCell}>
                        <Text style={styles.info}>Play</Text>
                        <Text style={styles.info}>Commands</Text>
                    </View>
                    </View>
                    <View style={styles.tableRow}>
                    <View style={styles.tableCell}>
                        <Image
                        style={styles.img}
                        source={require('../assets/sit.png')}
                        />
                    </View>
                    <View style={styles.tableCell}>
                        <Text style={styles.info}>Sit</Text>
                        <Text style={styles.info}>Commands</Text>
                    </View>
                    </View>
                    <View style={styles.tableRow}>
                    <View style={styles.tableCell}>
                        <Image
                        style={styles.img}
                        source={require('../assets/down.png')}
                        />
                    </View>
                    <View style={styles.tableCell}>
                        <Text style={styles.info}>Lay Down</Text>
                        <Text style={styles.info}>Commands</Text>
                    </View>
                    </View>
                    <View style={styles.tableRow}>
                    <View style={styles.tableCell}>
                        <Image
                        style={styles.img}
                        source={require('../assets/fetch.png')}
                        />
                    </View>
                    <View style={styles.tableCell}>
                        <Text style={styles.info}>Fetch</Text>
                        <Text style={styles.info}>Commands</Text>
                    </View>
                    </View>

                    {/* <View style={styles.box}>
                        <View>
                            <Image
                                style={styles.img}
                                source={require('../assets/sit.png')}
                            />
                        </View>
                        <View>
                            <View style={styles.set}>
                                <Text style={styles.info} >Sit</Text>
                                <Text style={styles.info} >Commands</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <View>
                            <Image
                                style={styles.img}
                                source={require('../assets/down.png')}
                            />
                        </View>
                        <View>
                            <View style={styles.set}>
                                <Text style={styles.info} >Lay down</Text>
                                <Text style={styles.info} >Commands</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <View>
                            <Image
                                style={styles.img}
                                source={require('../assets/fetch.png')}
                            />
                        </View>
                        <View>
                            <View style={styles.set}>
                                <Text style={styles.info} >Fetch</Text>
                                <Text style={styles.info} >Commands</Text>
                            </View>
                        </View>
                    </View> */}
                </View>
            </View>
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
    // info: {
    //     fontSize: 20,
    //     fontWeight:'bold',
    //     // marginBottom: 10,
    //     // marginTop: -3,
    // },
    // img:{
    //     height: '100%',
    // },
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
        // width: 150,  // Adjust the width as needed
        height: 120, // Adjust the height as needed
        marginRight: 10,
        objectFit: 'contain',
    },
    info: {
        fontSize: 20,
        fontWeight: '500',
    },
    date_time: {
        fontSize: 14
    },
    box: {
        width: '90%',
        height: 130,
        marginBottom: 10,
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 15,
        borderColor: '#8b9e9b',
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default TrainingTips;