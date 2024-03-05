import React from "react";
import { View, StyleSheet, Text, Image } from 'react-native';

// Import the image using require
const img = require('../assets/Tayo.png');

const GoWithPet = () => {
    return (
        <View style={styles.container}>
            {/* Upper Container */}
            <View style={styles.upperContainer}>
                {/* Title */}
                <Text style={styles.title}>Go with your pet</Text>
            </View>

            {/* Lower Container */}
            <View style={styles.lowerContainer}>
                {/* Content */}
                <View style={styles.content}>
                    <View style={styles.box}>
                        <View>
                            <View style={styles.set}>
                                <Text style={styles.heading}>Name:</Text>
                                <Text style={styles.info}>Tayo Bear</Text>
                            </View>
                            <View style={styles.set}>
                                <Text style={styles.heading}>Location:</Text>
                                <Text style={styles.info}>Colombo 7</Text>
                            </View>
                            <View style={styles.set}>
                                <Text style={styles.heading}>Type:</Text>
                                <Text style={styles.info}>Cafe</Text>
                            </View>
                            <View style={styles.set}>
                                <Text style={styles.heading}>Telephone number:</Text>
                                <Text style={styles.info}>+94 77 199 2907</Text>
                            </View>
                            <View style={styles.set}>
                                <Text style={styles.heading}>Website:</Text>
                                <Text style={styles.info}>tayobear.com</Text>
                            </View>
                        </View>
                        <View>
                            <Image
                                style={styles.img}
                                source={require('../assets/Tayo.png')}
                            />
                        </View>
                    </View>
                    
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
        paddingBottom:5
    },
    heading: {
        fontSize: 15,
        paddingBottom: 2,
    },
    info: {
        fontSize: 17,
        fontWeight:'bold',
        marginBottom: 10,
        marginTop: -3,
    },
    img:{
        height: 320,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
    },
    date_time: {
        fontSize: 14
    },
    box: {
        width: '90%',
        height: 320,
        marginBottom: 10,
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 15,
        borderColor: '#eaeaea',
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});

export default GoWithPet;