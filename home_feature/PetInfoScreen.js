import React from "react";
import { View, StyleSheet, Text } from 'react-native';
import { Button } from "react-native-elements";

const PetInfoScreen = () => {
    return (
        <View style={styles.container}>
             <View style={styles.biggerCircle}></View>
            <View style={styles.upperContainer}></View>

            <View style={styles.lowerContainer}>
                <Text style={styles.headerText}>Pet Name</Text>
                <View style={styles.box}>
                <Text style = {styles.text}>Name:</Text>
                <Text style = {styles.text}>Date of Birth:</Text>
                <Text style = {styles.text}>Breed:</Text>
                <Text style = {styles.text}>Color:</Text>
                <Text style = {styles.text}>Achievements:</Text>
                <Text style = {styles.text}>Special Features:</Text>
                <Text style = {styles.text}>Allergies:</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                    title="Edit"
                    buttonStyle={styles.button}
                    titleStyle={styles.buttonText}
                    />
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
    },
    lowerContainer: {
        position: 'absolute',
        justifyContent: 'center', // Align children vertically in the center
        paddingHorizontal:20,
        left: 0,
        right: 0,
        bottom: 0,
        height: '90%', // Adjust the height as needed
        backgroundColor: 'white',
        borderTopLeftRadius: 20, // Adjust the border radius as needed
        borderTopRightRadius: 20, // Adjust the border radius as needed
    },

    text: {
        fontSize: 16, // Adjust the font size as needed
        lineHeight: 20, // Adjust the line height to increase the gap between lines
        marginBottom: 10, // Adjust the margin bottom to bring text items closer to the header text
        marginTop:10,
    },
    
    headerText: {
        fontSize: 20,
        marginBottom: 20, // Add some space between the header text and other text items
        textAlign:'center',
        marginLeft: 20,
        
    },

    box:{
        marginBottom: -20, // Add some space between the header text and other text items
        borderWidth: 2, // Border width
        borderRadius: 20, // Border radius
        borderColor:'#DEEBE9', // Border color
        padding: 30, // Padding inside the box
        backgroundColor: '#DEEBE9',
    },

    button:{
        backgroundColor: "white",
        
    },

    buttonText:{
        color: "#649F95",
        fontWeight: 'bold',
    },

    buttonContainer:{
        marginLeft: 250,
        marginBottom: -20,
        marginTop: 30,
    },

    biggerCircle: {
        position: 'absolute',
        top: -15,
        left: '27.2%',
        backgroundColor: '#DEEBE9',
        height: 180,
        width: 180,
        borderRadius: 90,
        zIndex: 3, // Higher zIndex to bring it to the front
    },

});

export default PetInfoScreen;
