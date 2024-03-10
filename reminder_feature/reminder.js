import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Modal, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCirclePlus, faSquareXmark, faCalendar} from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-native-elements';
import DateTimePickerModal from '@react-native-community/datetimepicker';
import { fetchReminders, addReminder } from '../api/pet';

const Reminders = ({ route }) => {
    // const dummyReminders = [
    //     {
    //         reminderName: 'Feed the dog',
    //         reminderDesc: 'Remember to feed the dog at 8:00 AM',
    //         reminderDate: new Date(),
    //     },
    //     {
    //         reminderName: 'Take the cat to the vet',
    //         reminderDesc: 'Appointment with the vet at 10:00 AM',
    //         reminderDate: new Date(),
    //     },
    //     {
    //         reminderName: 'Give medicine to the bird',
    //         reminderDesc: 'Administer medicine to the bird in the evening',
    //         reminderDate: new Date(),
    //     },
    // ];
    const petID = route.params.petId;
    const [reminderName, setReminderName] = useState('');
    const [reminderDesc, setReminderDesc] = useState('');
    const [reminderDate, setReminderDate] = useState(new Date());
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [reminders, setReminders] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setReminderDate(date);
        hideDatePicker();
    };

    useEffect(() => {
        fetchReminders(petID) // Fetch reminders for the specific pet ID
            .then(data => setReminders(data))
            .catch(error => console.error('Error:', error));
    }, [petID]); // Include petID in the dependency array

    const handleAddReminder = async () => {
        try {
            await addReminder({ reminderName, reminderDesc, reminderDate });
            setReminderName('');
            setReminderDesc('');
            setReminderDate(new Date());
            setShowModal(false);
            fetchReminders(petID) // Fetch reminders for the specific pet ID
                .then(data => setReminders(data))
                .catch(error => console.error('Error:', error));
        } catch (error) {
            console.error('Error adding reminder:', error);
        }
    };
    

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => setShowModal(true)}> 
                        <FontAwesomeIcon icon={faCirclePlus} color="#5b8f86" size={50} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setShowModal(true)}>
                        <Text style={styles.addReminderText}> Add a New Reminder</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.reminderListCard}>
                    <Text style={styles.reminderListHeader}>Reminders</Text>
                    <FlatList 
                        data={reminders}
                        renderItem={({ item }) => (
                            <View style={styles.reminderStyle}>
                                <View >
                                    <Text style={styles.reminderNameStyle}>{item.reminderName}</Text>
                                </View>

                                <View >
                                    <Text style={styles.reminderDescStyle}>{item.reminderDesc}</Text>
                                </View>

                                <View>
                                  <Text>Date : {new Date(item.reminderDate).toLocaleDateString()}</Text>
                                </View>
                                
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showModal}
                    onRequestClose={() => setShowModal(false)}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <TouchableOpacity onPress={() => setShowModal(false)} style={styles.closeButton}>
                                <FontAwesomeIcon icon={faSquareXmark} style={{color: "#5b8f86"}} size={25} />
                            </TouchableOpacity>
                            <Text style={styles.inputTextHeader}>Title</Text>
                                <TextInput
                                    style={styles.modalInput}
                                    placeholder="Enter Reminder Title"
                                    value={reminderName}
                                    onChangeText={setReminderName}
                                />
                                <Text style={styles.inputTextHeader}>Description</Text>
                                <TextInput
                                    style={styles.modalInput}
                                    placeholder="Enter Reminder Description"
                                    value={reminderDesc}
                                    onChangeText={setReminderDesc}
                                />
                            <View style={styles.dateContainer}>
                                <View>
                                    <Text style={styles.inputTextHeader}>Date</Text>
                                    <TextInput
                                        style={[styles.modalInput, styles.dateInputText]}
                                        placeholder="Selected Date"
                                        value={reminderDate.toLocaleDateString()} // Display selected date
                                        editable={false} // Make it non-editable
                                    />
                                </View>
                                <View style={styles.datePickerContainer}>
                                    <TouchableOpacity style={styles.datePickerButton} onPress={showDatePicker}>
                                        <FontAwesomeIcon icon={faCalendar} style={styles.calendarIcon} />
                                    </TouchableOpacity>
                                    {isDatePickerVisible && (
                                        <DateTimePickerModal
                                        value={reminderDate} // Set the value prop to vaccineDate
                                        mode="date"
                                        display="spinner"
                                        onChange={(event, date) => handleConfirm(date)}
                                    />
                                        
                                    )}
                                </View>
                            </View>
                            <View style={styles.addButton}>
                                <Button
                                    title="Add Reminder"
                                    onPress={handleAddReminder}
                                    buttonStyle={styles.addButtonStyle}
                                    titleStyle={styles.addButtonText}
                                />
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#649F95',
    },
    body: {
        paddingTop: 55,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: 'white',
        padding: 20,
        paddingBottom: 40,
        marginTop: 70,
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    addReminderText: {
        marginLeft: 15,
        fontSize: 15,
        color: '#5B8F86',
    },
    reminderListCard: {
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#DEEAE8',
        backgroundColor: '#DEEAE8',
        padding: 30,
        marginTop: 20,
        flex: 1,
    },
    reminderListHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },
    reminderStyle: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
        marginBottom: 15,
    },
    reminderNameStyle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 10,
    },
    reminderDescStyle: {
        marginBottom: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        width: '80%',
    },
    modalInput: {
        height: 50,
        borderColor: '#DEEBE9',
        borderWidth: 1,
        backgroundColor: '#DEEBE9',
        paddingLeft: 10,
        marginBottom: 20,
        borderRadius: 16,
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    datePickerButton: {
        backgroundColor: '#5b8f86',
        borderRadius: 16,
        padding: 10,
        marginRight: 10,
    },
    calendarIcon: {
        color: 'white',
    },
    addButton: {
        marginTop: 20,
        alignItems: 'center',
    },
    addButtonStyle: {
        backgroundColor: '#5B8F86',
        borderColor: '#5B8F86',
        borderWidth: 1,
        borderRadius: 16,
        height: 50,
        width: 200,
    },
    addButtonText: {
        color: 'white',
        fontSize: 18,
    },
    inputTextHeader: {
        fontSize: 15,
        paddingBottom: 2,
        marginBottom: 5,
        marginLeft: 10,
        fontWeight: '600',
    },
    closeButton: {
        marginBottom: 20,
    },
    datePickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    datePickerButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#5b8f86',
        borderRadius: 16,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginTop: 15,
        marginRight: 10, // Add margin to the right of the icon
        marginLeft: 10,
    },
    datePickerButtonText: {
        color: 'white',
        
    },
    dateContainer:{
        // paddingRight: 120,
        flexDirection: 'row',
        // justifyContent:'space-between',
    },
    calendarIcon: {
        color: 'white',
    },
});

export default Reminders;
