import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, Dimensions, Modal } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { fetchPetData, updatePetData } from '../api/pet';
import { getToken } from '../api/auth';
import { useNavigation } from '@react-navigation/native';


const PetInfoScreen= ({ route }) => {
    const petID = route.params.petID;
    const [petData, setPetData] = useState(null);
    const navigation = useNavigation(); // Access the navigation object

    const windowHeight = Dimensions.get('window').height;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = await getToken();
                const data = await fetchPetData(petID, token);
                setPetData(data);
            } catch (error) {
                console.error('Error fetching pet data:', error);
            }
        };
        fetchData();
    }, [
        petID, 
        petData
    ]);

    const handleEdit = () => {
        navigation.navigate('PetInfoEdit', { petID: petID });
    };

    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleDelete = () => {
        // Handle deletion logic here
        // Once deleted, you may navigate back or perform any other action
    };

    const formatDateOfBirth = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.profilePhotoContainer}>
                {console.log('Pet photo URL:', petData && petData.photo)}
                    {petData && petData.photo ? (
                        <Image source={{ uri: petData.photo }} style={styles.profilePhoto} />
                    ) : (
                        <FontAwesomeIcon icon={faPaw} style={styles.profilePhotoIcon} size={100} />
                    )}             
                </View>
            </View>

            <View style={[styles.body, { height: windowHeight -125 }]}>
                <View style={styles.detailCard}>
                    <View style={styles.name}>
                        <View>
                            <Text style={styles.inputTextHeader}>Name</Text>
                        </View>
                        <View>
                            <Text>{petData && petData.name}</Text>
                        </View>
                    </View>
                    <View style={styles.name}>
                        <View>
                            <Text style={styles.inputTextHeader}>Type</Text>
                        </View>
                        <View>
                            <Text>{petData && petData.type}</Text>
                        </View>
                    </View>
                    <View style={styles.name}>
                        <View>
                            <Text style={styles.inputTextHeader}>Breed</Text>
                        </View>
                        <View>
                            <Text>{petData && petData.breed}</Text>
                        </View>
                    </View>
                    <View style={styles.name}>
                        <View>
                            <Text style={styles.inputTextHeader}>Gender</Text>
                        </View>
                        <View>
                            <Text>{petData && petData.gender}</Text>
                        </View>
                    </View>
                    <View style={styles.name}>
                        <View>
                            <Text style={styles.inputTextHeader}>Date of Birth</Text>
                        </View>
                        <View>
                            <Text>{petData && formatDateOfBirth(petData.birthday)}</Text>
                        </View>
                    </View>
                    <View style={styles.buttonContainer1}>
                        <TouchableOpacity onPress={handleEdit}>
                            <Text style={styles.buttonText1}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonContainer2}>
                     <TouchableOpacity onPress={() => setShowDeleteModal(true)}>
                <Text style={styles.buttonText2}>Delete</Text>
            </TouchableOpacity>
            </View>

            {/* Delete Confirmation Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={showDeleteModal}
                onRequestClose={() => setShowDeleteModal(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalHeader}>Confirm Deletion</Text>
                        <Text>Are you sure you want to delete this pet?</Text>
                        <View style={styles.modalButtons}>
                            <TouchableOpacity onPress={() => setShowDeleteModal(false)}>
                                <Text style={styles.cancelButton}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleDelete}>
                                <Text style={styles.deleteButton}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
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
    header: {
        marginTop: 20,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    body: {
        paddingTop: 115,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: 'white',
        width: '100%',
        padding: 20,
        paddingBottom: 40,
        marginTop: -110,
        position: 'relative',
    },
    profilePhotoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: '#DEEBE9',
        overflow: 'hidden',
        zIndex: 1,
    },
    profilePhoto: {
        width: '100%',
        height: '100%',
    },
    profilePhotoIcon: {
        color: '#5B8F86',
    },
    inputTextHeader: {
        fontSize: 15,
        paddingBottom: 2,
        marginBottom: 10,
        marginLeft: 10,
        fontWeight: '600', // Make the text semibold
    },
    inputText: {
        height: 50,
        borderColor: '#DEEBE9',
        borderWidth: 1,
        backgroundColor: '#DEEBE9',
        paddingLeft: 10, // Add left padding
        marginBottom: 10, // Add bottom margin
        borderRadius: 16, // Add border radius
    },
    name: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        justifyContent: 'space-between',
    },
    birthdayInput: {
        flex: 1,
    },
    signInButton: {
        borderRadius: 6,
        margin: 15,
        marginTop: 15,
        alignItems: 'center',
    },
    signInButtonStyle: {
        backgroundColor: '#5B8F86',
        borderColor: '#5B8F86',
        borderWidth: 1,
        borderRadius: 16,
        height: 55,
        width: 300,
    },
    signInButtonTextStyle: {
        color: 'white',
        fontSize: 18,
    },
    addPhotoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        bottom: -10,
        zIndex: 12,
        alignSelf: 'center',
    },
    addPhotoLink: {
        color: '#5B8F86',
        fontSize: 15,
        fontWeight: '600',
    },
    detailCard: {
        marginBottom: -20, // Add some space between the header text and other text items
        borderWidth: 2, // Border width
        borderRadius: 20, // Border radius
        borderColor:'#DEEBE9', // Border color
        paddingTop: 50, 
        paddingBottom: 50, 
        paddingLeft: 20, 
        backgroundColor: '#DEEBE9',
    },
     buttonContainer1:{
        marginLeft:150,
        marginBottom: -20,
        marginTop: 30,
    },
    buttonContainer2:{
        marginLeft:225,
        marginBottom: -20,
    },
    buttonText1:{
        color: "#649F95",
        fontWeight: 'bold',
    },
    buttonText2:{
        color: "#D84F42",
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 30,
        width: '80%',
    },
    modalHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'Left',
    },
    modalInput: {
        height: 40,
        borderColor: '#DEEBE9',
        borderWidth: 1,
        backgroundColor: '#DEEBE9',
        paddingLeft: 10,
        marginBottom: 10,
        borderRadius: 10,
    },
    saveButton: {
        backgroundColor: '#649F95',
        borderRadius: 10,
        paddingVertical: 10,
        alignItems: 'center',
    },
    saveButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    email: {
        marginBottom: 15
    }, 
    closeButtonText: {
        fontSize: '3vw', // Adjust the font size relative to the viewport width
        fontWeight: 'bold',
        color: 'black',
    },
    cancelButton: {
        color: '#649F95',
        marginLeft:120,
        marginTop: 20,
    },
    deleteButton: {
        color: '#D84F42',
        marginLeft:180,
        marginTop: -19,
    },
});

export default PetInfoScreen;
