import React, { useRef, useState, useEffect } from "react";
import { View, ScrollView, StyleSheet, Text, Image, TouchableOpacity, TextInput,Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const litterInfo = () => {
    const [fatherImage, setFatherImage] = useState('');
    const [motherImage, setMotherImage] = useState('');
    const [fatherInfo, setFatherInfo] = useState({ name: "", breed: "", color: "", achievements: "" });
    const [motherInfo, setMotherInfo] = useState({ name: "", breed: "", color: "", achievements: "" });
    const [editMode, setEditMode] = useState(false);
    const [showNextButton, setShowNextButton] = useState(false);

    const scrollViewRef = useRef();

    useEffect(() => {
        // Request permission to access the device's photo gallery
        (async () => {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert(
                    'Permission required',
                    'Please grant permission to access the photo gallery to proceed.',
                    [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
                );
            }
        })();
    }, []);

    const handleScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.y;
        const upperContainerHeight = 0; // Height of the upperContainer
        if (scrollPosition < upperContainerHeight) {
            scrollViewRef.current.scrollTo({ x: 0, y: upperContainerHeight, animated: false });
        }
    };

    const handleAddButtonPress = () => {
        if (editMode) {
            // Handle the logic for saving data
            console.log("Data saved!");
            // Once data is saved, toggle back to edit mode
            setEditMode(false);
            setShowNextButton(false);
        } else {
            // Switch to edit mode when "Save" button is pressed
            setEditMode(true);
            setShowNextButton(true);
        }
    };

    // const handleNextButtonPress = () => {
    //     // Handle the logic when the "Next" button is pressed
    //     console.log("Next button pressed!");
    //     // You can navigate to the next screen, perform validation, or any other action here
    //     // Example action: setEditingBox('mother');
    // };

    const handleImagePick = async (parent) => {
        if (editMode) {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
            });
    
            if (!result.canceled) {
                if (parent === 'father') {
                    setFatherImage(result.uri);
                } else if (parent === 'mother') {
                    setMotherImage(result.uri);
                }
            }
        
        }
    };
    const handleInputChange = (text, field, parent) => {
        if (editMode) { // Check if edit mode is enabled
            if (parent === 'father') {
                setFatherInfo(prevState => ({ ...prevState, [field]: text }));
            } else if (parent === 'mother') {
                setMotherInfo(prevState => ({ ...prevState, [field]: text }));
            }
        }
    };

    return (
        <ScrollView
            ref={scrollViewRef}
            onScroll={handleScroll}
            scrollEventThrottle={16} // Adjust throttle as needed
            style={styles.scrollContainer}
        >
            <View style={styles.upperContainer}></View>

            <View style={styles.lower1container}>
                <View>
                    <Text style={styles.headerText}>Litter Information</Text>
                </View>

                <View style={styles.lower2Container}>
                
                    <Text style={styles.headerText1}>Father</Text>
                <View style={styles.box1}>    
                    <TouchableOpacity style={styles.biggerCircle} onPress={() => handleImagePick('father')}>
                        {fatherImage && (
                            
                            <Image source={{ uri: fatherImage }} style={styles.photoIcon} />
                            
                        )}
                        {!fatherImage && (
                            <View style={styles.editIconContainer}>
                            <Image source={require('../assets/camera.png')} style={styles.editIcon} />
                            </View>
                        )}
                    </TouchableOpacity>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputLabel}>Name                :</Text>
                            <TextInput
                                style={styles.textInput}
                                value={fatherInfo.name}
                                onChangeText={(text) => handleInputChange(text, 'name', 'father')}
                                editable={editMode} // Make editable based on edit mode
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputLabel}>Breed                :</Text>
                            <TextInput
                                style={styles.textInput}
                                value={fatherInfo.breed}
                                onChangeText={(text) => handleInputChange(text, 'breed', 'father')}
                                editable={editMode} // Make editable based on edit mode
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputLabel}>Color                 :</Text>
                            <TextInput
                                style={styles.textInput}
                                value={fatherInfo.color}
                                onChangeText={(text) => handleInputChange(text, 'color', 'father')}
                                editable={editMode} // Make editable based on edit mode
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputLabel}>Achievements  :</Text>
                            <TextInput
                                style={styles.textInput}
                                value={fatherInfo.achievements}
                                onChangeText={(text) => handleInputChange(text, 'achievements', 'father')}
                                editable={editMode} // Make editable based on edit mode
                            />
                        </View>
                </View>    


                {/* {showNextButton && (
                    <TouchableOpacity style={styles.nextButton} onPress={handleNextButtonPress}>
                         <Text style={styles.nextButtonText}>Next</Text>
                    </TouchableOpacity>
                )} */}

                    <Text style={styles.headerText2}>Mother</Text>
                <View style={styles.box2}>     
                    <TouchableOpacity style={styles.biggerCircle} onPress={() => handleImagePick('mother')}>
                        {motherImage && (
                            <Image source={{ uri: motherImage }} style={styles.photoIcon} />
                        )}
                        {!motherImage && (
                            <View style={styles.editIconContainer}>
                            <Image source={require('../assets/camera.png')} style={styles.editIcon} />
                            </View>
                        )}
                    </TouchableOpacity>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputLabel}>Name                :</Text>
                            <TextInput
                                style={styles.textInput}
                                value={motherInfo.name}
                                onChangeText={(text) => handleInputChange(text, 'name', 'mother')}
                                editable={editMode} // Make editable based on edit mode
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputLabel}>Breed                :</Text>
                            <TextInput
                                style={styles.textInput}
                                value={motherInfo.breed}
                                onChangeText={(text) => handleInputChange(text, 'breed', 'mother')}
                                editable={editMode} // Make editable based on edit mode
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputLabel}>Color                 :</Text>
                            <TextInput
                                style={styles.textInput}
                                value={motherInfo.color}
                                onChangeText={(text) => handleInputChange(text, 'color', 'mother')}
                                editable={editMode} // Make editable based on edit mode
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputLabel}>Achievements  :</Text>
                            <TextInput
                                style={styles.textInput}
                                value={motherInfo.achievements}
                                onChangeText={(text) => handleInputChange(text, 'achievements', 'mother')}
                                editable={editMode} // Make editable based on edit mode
                            />
                        </View>
                </View>     
                    <TouchableOpacity style={styles.addButton} onPress={handleAddButtonPress}>
                        <Text style={styles.addButtonText}>{editMode ? 'Save' : 'Add Details'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    upperContainer: {
        flex: 1,
        backgroundColor: '#649F95',
        height: 60, // Adjust according to your content
        justifyContent: 'center',
        alignItems: 'center'
    },

    lower1container: {
        backgroundColor: '#649F95',
    
    },

    headerText: {
        fontSize: 25, // Adjust font size as needed
        color: 'white',
        left: '25%',
        bottom: 20
    },

    lower2Container: {
        backgroundColor: 'white',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 20,
        bottom: -1
    },

    text: {
        fontSize: 16,
        lineHeight: 25
    },

    inputContainer: {
        marginBottom: -20,
        flexDirection: 'row', // Align items in a row
        alignItems: 'center', // Align items vertically in the center
    },

    inputLabel: {
        fontSize: 16,
        marginTop:30,
        marginBottom: 20,
        minWidth: 30,
        
    },

    textInput: {
        marginTop:12,
        borderWidth: 1,
        borderColor: '#DEEAE8',
        borderRadius: 5,
        // paddingVertical: 5,
        // paddingHorizontal: 8,
        padding: -1,
        fontSize: 15,
        width: 140,
        marginLeft: 15
    },
    
    headerText1: {
        fontSize: 20,
        marginTop: 100, // Add some space between the header text and other text items
        marginBottom: 10,
        left: '3%',
        bottom: 60
    },
    
    headerText2: {
        fontSize: 20,
        marginTop: 40,
        marginBottom: 10,
        left: '3%',
        bottom: 60
    },
    
    box1: {
        marginBottom: 10,
        marginTop: 20,// Add some space between the header text and other text items
        borderWidth: 2,
        width: 317,
        flexGrow:1,
        borderRadius: 20,
        borderColor: '#DEEAE8',
        backgroundColor: '#DEEAE8',
        padding: 25,// Padding inside the box
        left: '3%',
        bottom: 75
    },
    
    box2: {
        flexGrow:1,
        marginBottom: 10,
        marginTop: 20,// Add some space between the header text and other text items
        borderWidth: 2,
        width: 317,
        borderRadius: 20,
        borderColor: '#DEEAE8',
        backgroundColor: '#DEEAE8',
        padding: 25,// Padding inside the box
        left: '3%',
        bottom: 75
    },
    
    biggerCircle: {
        left: '27.2%',
        borderWidth: 5,
        borderColor: '#649F95',
        borderRadius: 100,
        width: 130,
        height: 130,
        resizeMode: 'contain',
    },
    
    photoIcon: {
        borderRadius: 100,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    
    editIconContainer: {
        position: 'relative',
        width: 45,
        height: 45,
        borderRadius: 25,
        backgroundColor: '#649F95',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:80,
        top: 80
    },

    editIcon: {
        position: 'absolute',
        width: 38,
        height: 38,
        resizeMode: 'contain',
        zIndex: 1, // Ensure the icon is above the circular background
        marginLeft:80,
        top: 3
    },
    
    addButton: {
        backgroundColor: '#649F95', // Use your desired background color
        borderRadius: 50,
        paddingVertical: 15,
        paddingHorizontal: 50,
        marginHorizontal: 60, // Adjust horizontal margin as needed
        marginTop: 50, // Adjust vertical margin as needed
        alignItems: 'center',
        bottom: 70
    },
    
    addButtonText: {
        color: 'white',
        fontSize: 18,
    },

    // nextButton: {
    //     backgroundColor: '#649F95', // Use your desired background color
    //     borderRadius: 50,
    //     paddingVertical: 15,
    //     paddingHorizontal: 50,
    //     marginHorizontal: 60, // Adjust horizontal margin as needed
    //     marginTop: 10, // Adjust vertical margin as needed
    //     alignItems: 'center',
    //     bottom: 35
    // },
    // nextButtonText: {
    //     color: 'white',
    //     fontSize: 18,
    // },

    });
    
    export default litterInfo