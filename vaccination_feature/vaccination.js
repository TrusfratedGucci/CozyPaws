import React, { useRef, useState } from "react";
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, TextInput,KeyboardAvoidingView, Platform } from 'react-native';

const vaccination = () => {
    const scrollViewRef = useRef();
    const [showThirdBox2_1, setShowThirdBox2_1] = useState(false);
    const [showThirdBox2_2, setShowThirdBox2_2] = useState(false);
    const [showThirdBox2_3, setShowThirdBox2_3] = useState(false);
    const [buttonText_1, setButtonText_1] = useState("See More");
    const [buttonText_2, setButtonText_2] = useState("See More");
    const [buttonText_3, setButtonText_3] = useState("See More");
    const [dateplaceholder, setDatePlaceholder] = useState("Date:");
    const [addDateButtonText, setAddDateButtonText] = useState("Add Records");
    const [date1, setDate1] = useState("");
    const [date2, setDate2] = useState("");
    const [date3, setDate3] = useState("");
    const [date4, setDate4] = useState("");
    const [date5, setDate5] = useState("");
    const [date6, setDate6] = useState("");
    const [date7, setDate7] = useState("");
    const [date8, setDate8] = useState("");
    const [date9, setDate9] = useState("");
    const [date10, setDate10] = useState("");
    const [date11, setDate11] = useState("");
    const [date12, setDate12] = useState("");


    // This function is called when the user scrolls within the ScrollView component.
const handleScroll = (event) => {
    // Extract the vertical scroll position from the event.
    const scrollPosition = event.nativeEvent.contentOffset.y;

    // Define the height of the upper container that you want to consider.
    // In this case, it's set to 0, indicating no additional height.
    const upperContainerHeight = 0; 

    // Check if the scroll position is less than the height of the upper container.
    if (scrollPosition < upperContainerHeight) {
        // If true, scroll the ScrollView back to the specified position.
        // This prevents the user from scrolling beyond a certain point.
        scrollViewRef.current.scrollTo({ x: 0, y: upperContainerHeight, animated: false });
    }
};





    
    // Function to toggle the visibility of the first set of content (show/hide).
const toggleThirdBox2_1 = () => {
    setShowThirdBox2_1(!showThirdBox2_1); // Toggle the state for visibility.
    setButtonText_1(showThirdBox2_1 ? "See More" : "See Less"); // Change button text based on visibility state.
};

// Function to toggle the visibility of the second set of content (show/hide).
const toggleThirdBox2_2 = () => {
    setShowThirdBox2_2(!showThirdBox2_2); // Toggle the state for visibility.
    setButtonText_2(showThirdBox2_2 ? "See More" : "See Less"); // Change button text based on visibility state.
};

// Function to toggle the visibility of the third set of content (show/hide).
const toggleThirdBox2_3 = () => {
    setShowThirdBox2_3(!showThirdBox2_3); // Toggle the state for visibility.
    setButtonText_3(showThirdBox2_3 ? "See More" : "See Less"); // Change button text based on visibility state.
};

// Function to toggle the text and behavior of a button related to date records.
const toggleAddDateButtonText = () => {
    // Determine the new text for the button based on the current text.
    const newButtonText = addDateButtonText === "Add Records" ? "Set Records" : "Add Records";
    
    // Update the state with the new button text.
    setAddDateButtonText(newButtonText);

    // If the new button text is "Set Records," perform additional actions (in this case, calling addDatePlaceholder).
    if (newButtonText === "Set Records") {
        addDatePlaceholder(); // Call addDatePlaceholder when setting date.
    }
};

// Function to set a placeholder for a date input (used in conjunction with toggleAddDateButtonText).
const addDatePlaceholder = () => {
    const newDatePlaceholder = "Date:"; // Change this to whatever default placeholder you want.
    setDatePlaceholder(newDatePlaceholder); // Update the state with the new date placeholder.
};


    return (
        <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS==='ios'? 'padding':null} enabled>
        <ScrollView
            ref={scrollViewRef}
            onScroll={handleScroll}
            scrollEventThrottle={16} //throttle adjustment
            style={styles.scrollContainer}>


            <View style={styles.upperContainer}></View>
            <View style={styles.lower1container}>
                <View>
                    <Text style={styles.headerText}>Vaccination Records</Text>
                </View>
                <View style={styles.lower2Container}>
                    <View style={styles.box1}>
                        <Text style={styles.headerText2}>Done</Text>
                        <View style={styles.box2}>
                            <View style={styles.nameContainer}>
                            <Text style={styles.text}>Name :</Text>
                                <TextInput style={styles.textInput} placeholder="Name" editable={addDateButtonText === "Set Records"} />
                            </View>
                            <View style={styles.dateContainer}>
                            <Text style={styles.text}>Date   :</Text>
                            <TextInput
                                style={[styles.inputText, styles.dateInput]}
                                placeholder="DD/MM/YYYY"
                                maxLength={10}
                                value={date1}
                                onChangeText={(text) => {
                                    // Remove non-numeric characters
                                    text = text.replace(/[^0-9]/g, '');
                            
                                    // Ensure the format is DD/MM/YYYY
                                    if (text.length <= 2) {
                                        // Max 2 characters for day
                                        text = text;
                                    } else if (text.length <= 4) {
                                        // Max 2 characters for day + slash + max 2 characters for month
                                        text = text.replace(/^(\d{2})(\d{0,2})/, '$1/$2');
                                    } else {
                                        // Max 2 characters for day + slash + max 2 characters for month + slash + max 4 characters for year
                                        text = text.replace(/^(\d{2})(\d{0,2})(\d{0,4}).*/, '$1/$2/$3');
                                    }
                                    setDate1(text);
                                }}
                                keyboardType="number-pad"
                            
                            />
                            </View>
                        </View>

                        <View style={styles.box2}>
                            <View style={styles.nameContainer}>
                            <Text style={styles.text}>Name :</Text>
                                <TextInput style={styles.textInput} placeholder="Name" editable={addDateButtonText === "Set Records"} />
                            </View>
                            <View style={styles.dateContainer}>
                            <Text style={styles.text}>Date   :</Text>
                            <TextInput
                                style={[styles.inputText, styles.dateInput]}
                                placeholder="DD/MM/YYYY"
                                maxLength={10}
                                value={date2}
                                onChangeText={(text) => {
                                    // Remove non-numeric characters
                                    text = text.replace(/[^0-9]/g, '');
                            
                                    // Ensure the format is DD/MM/YYYY
                                    if (text.length <= 2) {
                                        // Max 2 characters for day
                                        text = text;
                                    } else if (text.length <= 4) {
                                        // Max 2 characters for day + slash + max 2 characters for month
                                        text = text.replace(/^(\d{2})(\d{0,2})/, '$1/$2');
                                    } else {
                                        // Max 2 characters for day + slash + max 2 characters for month + slash + max 4 characters for year
                                        text = text.replace(/^(\d{2})(\d{0,2})(\d{0,4}).*/, '$1/$2/$3');
                                    }
                                    setDate2(text);
                                }}
                                keyboardType="number-pad"
                            
                            />
                            </View>
                        </View>
                        {showThirdBox2_1 && (
                            <>
                                    <View style={styles.box2}>
                                    <View style={styles.nameContainer}>
                            <Text style={styles.text}>Name :</Text>
                                <TextInput style={styles.textInput} placeholder="Name" editable={addDateButtonText === "Set Records"} />
                            </View>
                            <View style={styles.dateContainer}>
                            <Text style={styles.text}>Date   :</Text>
                            <TextInput
                                style={[styles.inputText, styles.dateInput]}
                                placeholder="DD/MM/YYYY"
                                maxLength={10}
                                value={date3}
                                onChangeText={(text) => {
                                    // Remove non-numeric characters
                                    text = text.replace(/[^0-9]/g, '');
                            
                                    // Ensure the format is DD/MM/YYYY
                                    if (text.length <= 2) {
                                        // Max 2 characters for day
                                        text = text;
                                    } else if (text.length <= 4) {
                                        // Max 2 characters for day + slash + max 2 characters for month
                                        text = text.replace(/^(\d{2})(\d{0,2})/, '$1/$2');
                                    } else {
                                        // Max 2 characters for day + slash + max 2 characters for month + slash + max 4 characters for year
                                        text = text.replace(/^(\d{2})(\d{0,2})(\d{0,4}).*/, '$1/$2/$3');
                                    }
                                    setDate3(text);
                                }}
                                keyboardType="number-pad"
                            
                            />
                            </View>
                                    </View>
                                    <View style={styles.box2}>
                                    <View style={styles.nameContainer}>
                            <Text style={styles.text}>Name :</Text>
                                <TextInput style={styles.textInput} placeholder="Name" editable={addDateButtonText === "Set Records"} />
                            </View>
                            <View style={styles.dateContainer}>
                            <Text style={styles.text}>Date   :</Text>
                            <TextInput
                                style={[styles.inputText, styles.dateInput]}
                                placeholder="DD/MM/YYYY"
                                maxLength={10}
                                value={date4}
                                onChangeText={(text) => {
                                    // Remove non-numeric characters
                                    text = text.replace(/[^0-9]/g, '');
                            
                                    // Ensure the format is DD/MM/YYYY
                                    if (text.length <= 2) {
                                        // Max 2 characters for day
                                        text = text;
                                    } else if (text.length <= 4) {
                                        // Max 2 characters for day + slash + max 2 characters for month
                                        text = text.replace(/^(\d{2})(\d{0,2})/, '$1/$2');
                                    } else {
                                        // Max 2 characters for day + slash + max 2 characters for month + slash + max 4 characters for year
                                        text = text.replace(/^(\d{2})(\d{0,2})(\d{0,4}).*/, '$1/$2/$3');
                                    }
                                    setDate4(text);
                                }}
                                keyboardType="number-pad"
                            
                            />
                            </View>
                                </View>
                            
                            </>
                                
                        )}
                        
                        <TouchableOpacity
                            style={styles.button}          // Style for the TouchableOpacity, defining its appearance.
                            onPress={toggleThirdBox2_1}    // Function to be called when the TouchableOpacity is pressed.
                        >
                            <Text style={styles.buttonText}>{buttonText_1}</Text>  
                        </TouchableOpacity>

                    </View>
                    <View style={styles.box3}>
                        <Text style={styles.headerText2}>Due</Text>
                        <View style={styles.box2}>
                        <View style={styles.nameContainer}>
                            <Text style={styles.text}>Name :</Text>
                                <TextInput style={styles.textInput} placeholder="Name" editable={addDateButtonText === "Set Records"} />
                            </View>
                            <View style={styles.dateContainer}>
                            <Text style={styles.text}>Date   :</Text>
                            <TextInput
                                style={[styles.inputText, styles.dateInput]}
                                placeholder="DD/MM/YYYY"
                                maxLength={10}
                                value={date5}
                                onChangeText={(text) => {
                                    // Remove non-numeric characters
                                    text = text.replace(/[^0-9]/g, '');
                            
                                    // Ensure the format is DD/MM/YYYY
                                    if (text.length <= 2) {
                                        // Max 2 characters for day
                                        text = text;
                                    } else if (text.length <= 4) {
                                        // Max 2 characters for day + slash + max 2 characters for month
                                        text = text.replace(/^(\d{2})(\d{0,2})/, '$1/$2');
                                    } else {
                                        // Max 2 characters for day + slash + max 2 characters for month + slash + max 4 characters for year
                                        text = text.replace(/^(\d{2})(\d{0,2})(\d{0,4}).*/, '$1/$2/$3');
                                    }
                                    setDate5(text);
                                }}
                                keyboardType="number-pad"
                            
                            />
                            </View>
                        </View>
                        <View style={styles.box2}>
                        <View style={styles.nameContainer}>
                            <Text style={styles.text}>Name :</Text>
                                <TextInput style={styles.textInput} placeholder="Name" editable={addDateButtonText === "Set Records"} />
                            </View>
                            <View style={styles.dateContainer}>
                            <Text style={styles.text}>Date   :</Text>
                            <TextInput
                                style={[styles.inputText, styles.dateInput]}
                                placeholder="DD/MM/YYYY"
                                maxLength={10}
                                value={date6}
                                onChangeText={(text) => {
                                    // Remove non-numeric characters
                                    text = text.replace(/[^0-9]/g, '');
                            
                                    // Ensure the format is DD/MM/YYYY
                                    if (text.length <= 2) {
                                        // Max 2 characters for day
                                        text = text;
                                    } else if (text.length <= 4) {
                                        // Max 2 characters for day + slash + max 2 characters for month
                                        text = text.replace(/^(\d{2})(\d{0,2})/, '$1/$2');
                                    } else {
                                        // Max 2 characters for day + slash + max 2 characters for month + slash + max 4 characters for year
                                        text = text.replace(/^(\d{2})(\d{0,2})(\d{0,4}).*/, '$1/$2/$3');
                                    }
                                    setDate6(text);
                                }}
                                keyboardType="number-pad"
                            
                            />
                            </View>
                        </View>
                        {showThirdBox2_2 && (
                            <>
                                <View style={styles.box2}>
                                <View style={styles.nameContainer}>
                            <Text style={styles.text}>Name :</Text>
                                <TextInput style={styles.textInput} placeholder="Name" editable={addDateButtonText === "Set Records"} />
                            </View>
                            <View style={styles.dateContainer}>
                            <Text style={styles.text}>Date   :</Text>
                            <TextInput
                                style={[styles.inputText, styles.dateInput]}
                                placeholder="DD/MM/YYYY"
                                maxLength={10}
                                value={date7}
                                onChangeText={(text) => {
                                    // Remove non-numeric characters
                                    text = text.replace(/[^0-9]/g, '');
                            
                                    // Ensure the format is DD/MM/YYYY
                                    if (text.length <= 2) {
                                        // Max 2 characters for day
                                        text = text;
                                    } else if (text.length <= 4) {
                                        // Max 2 characters for day + slash + max 2 characters for month
                                        text = text.replace(/^(\d{2})(\d{0,2})/, '$1/$2');
                                    } else {
                                        // Max 2 characters for day + slash + max 2 characters for month + slash + max 4 characters for year
                                        text = text.replace(/^(\d{2})(\d{0,2})(\d{0,4}).*/, '$1/$2/$3');
                                    }
                                    setDate7(text);
                                }}
                                keyboardType="number-pad"
                            
                            />
                            </View>
                                </View>
                                <View style={styles.box2}>
                                <View style={styles.nameContainer}>
                            <Text style={styles.text}>Name :</Text>
                                <TextInput style={styles.textInput} placeholder="Name" editable={addDateButtonText === "Set Records"} />
                            </View>
                            <View style={styles.dateContainer}>
                            <Text style={styles.text}>Date   :</Text>
                            <TextInput
                                style={[styles.inputText, styles.dateInput]}
                                placeholder="DD/MM/YYYY"
                                maxLength={10}
                                value={date8}
                                onChangeText={(text) => {
                                    // Remove non-numeric characters
                                    text = text.replace(/[^0-9]/g, '');
                            
                                    // Ensure the format is DD/MM/YYYY
                                    if (text.length <= 2) {
                                        // Max 2 characters for day
                                        text = text;
                                    } else if (text.length <= 4) {
                                        // Max 2 characters for day + slash + max 2 characters for month
                                        text = text.replace(/^(\d{2})(\d{0,2})/, '$1/$2');
                                    } else {
                                        // Max 2 characters for day + slash + max 2 characters for month + slash + max 4 characters for year
                                        text = text.replace(/^(\d{2})(\d{0,2})(\d{0,4}).*/, '$1/$2/$3');
                                    }
                                    setDate8(text);
                                }}
                                keyboardType="number-pad"
                            
                            />
                            </View>
                                </View>
                            </>
                        )}
                        <TouchableOpacity style={styles.button} onPress={toggleThirdBox2_2}>
                            <Text style={styles.buttonText}>{buttonText_2}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.box4}>
                        <Text style={styles.headerText2}>Upcoming</Text>
                        <View style={styles.box2}>
                        <View style={styles.nameContainer}>
                            <Text style={styles.text}>Name :</Text>
                                <TextInput style={styles.textInput} placeholder="Name" editable={addDateButtonText === "Set Records"} />
                            </View>
                            <View style={styles.dateContainer}>
                            <Text style={styles.text}>Date   :</Text>
                            <TextInput
                                style={[styles.inputText, styles.dateInput]}
                                placeholder="DD/MM/YYYY"
                                maxLength={10}
                                value={date9}
                                onChangeText={(text) => {
                                    // Remove non-numeric characters
                                    text = text.replace(/[^0-9]/g, '');
                            
                                    // Ensure the format is DD/MM/YYYY
                                    if (text.length <= 2) {
                                        // Max 2 characters for day
                                        text = text;
                                    } else if (text.length <= 4) {
                                        // Max 2 characters for day + slash + max 2 characters for month
                                        text = text.replace(/^(\d{2})(\d{0,2})/, '$1/$2');
                                    } else {
                                        // Max 2 characters for day + slash + max 2 characters for month + slash + max 4 characters for year
                                        text = text.replace(/^(\d{2})(\d{0,2})(\d{0,4}).*/, '$1/$2/$3');
                                    }
                                    setDate9(text);
                                }}
                                keyboardType="number-pad"
                            
                            />
                            </View>
                        </View>

                        <View style={styles.box2}>
                        <View style={styles.nameContainer}>
                            <Text style={styles.text}>Name :</Text>
                                <TextInput style={styles.textInput} placeholder="Name" editable={addDateButtonText === "Set Records"} />
                            </View>
                            <View style={styles.dateContainer}>
                            <Text style={styles.text}>Date   :</Text>
                            <TextInput
                                style={[styles.inputText, styles.dateInput]}
                                placeholder="DD/MM/YYYY"
                                maxLength={10}
                                value={date10}
                                onChangeText={(text) => {
                                    // Remove non-numeric characters
                                    text = text.replace(/[^0-9]/g, '');
                            
                                    // Ensure the format is DD/MM/YYYY
                                    if (text.length <= 2) {
                                        // Max 2 characters for day
                                        text = text;
                                    } else if (text.length <= 4) {
                                        // Max 2 characters for day + slash + max 2 characters for month
                                        text = text.replace(/^(\d{2})(\d{0,2})/, '$1/$2');
                                    } else {
                                        // Max 2 characters for day + slash + max 2 characters for month + slash + max 4 characters for year
                                        text = text.replace(/^(\d{2})(\d{0,2})(\d{0,4}).*/, '$1/$2/$3');
                                    }
                                    setDate10(text);
                                }}
                                keyboardType="number-pad"
                            
                            />
                            </View>
                        </View>
                        {showThirdBox2_3 && (
                            <>
                            <View style={styles.box2}>
                            <View style={styles.nameContainer}>
                            <Text style={styles.text}>Name :</Text>
                                <TextInput style={styles.textInput} placeholder="Name" editable={addDateButtonText === "Set Records"} />
                            </View>
                            <View style={styles.dateContainer}>
                            <Text style={styles.text}>Date   :</Text>
                            <TextInput
                                style={[styles.inputText, styles.dateInput]}
                                placeholder="DD/MM/YYYY"
                                maxLength={10}
                                value={date11}
                                onChangeText={(text) => {
                                    // Remove non-numeric characters
                                    text = text.replace(/[^0-9]/g, '');
                            
                                    // Ensure the format is DD/MM/YYYY
                                    if (text.length <= 2) {
                                        // Max 2 characters for day
                                        text = text;
                                    } else if (text.length <= 4) {
                                        // Max 2 characters for day + slash + max 2 characters for month
                                        text = text.replace(/^(\d{2})(\d{0,2})/, '$1/$2');
                                    } else {
                                        // Max 2 characters for day + slash + max 2 characters for month + slash + max 4 characters for year
                                        text = text.replace(/^(\d{2})(\d{0,2})(\d{0,4}).*/, '$1/$2/$3');
                                    }
                                    setDate11(text);
                                }}
                                keyboardType="number-pad"
                            
                            />
                            </View>
                        </View>
                        <View style={styles.box2}>
                        <View style={styles.nameContainer}>
                            <Text style={styles.text}>Name :</Text>
                                <TextInput style={styles.textInput} placeholder="Name" editable={addDateButtonText === "Set Records"} />
                            </View>
                            <View style={styles.dateContainer}>
                            <Text style={styles.text}>Date   :</Text>
                            <TextInput
                                style={[styles.inputText, styles.dateInput]}
                                placeholder="DD/MM/YYYY"
                                maxLength={10}
                                value={date12}
                                onChangeText={(text) => {
                                    // Remove non-numeric characters
                                    text = text.replace(/[^0-9]/g, '');
                            
                                    // Ensure the format is DD/MM/YYYY
                                    if (text.length <= 2) {
                                        // Max 2 characters for day
                                        text = text;
                                    } else if (text.length <= 4) {
                                        // Max 2 characters for day + slash + max 2 characters for month
                                        text = text.replace(/^(\d{2})(\d{0,2})/, '$1/$2');
                                    } else {
                                        // Max 2 characters for day + slash + max 2 characters for month + slash + max 4 characters for year
                                        text = text.replace(/^(\d{2})(\d{0,2})(\d{0,4}).*/, '$1/$2/$3');
                                    }
                                    setDate12(text);
                                }}
                                keyboardType="number-pad"
                            
                            />
                            </View>
                        </View>
                            </>
                        )}
                        <TouchableOpacity style={styles.button} onPress={toggleThirdBox2_3}>
                            <Text style={styles.buttonText}>{buttonText_3}</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.addButton} onPress={toggleAddDateButtonText}>
                        <Text style={styles.addButtonText}>{addDateButtonText}</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 0,  // Prevent automatic scrolling in certain scenarios.
    },

    upperContainer: {
        marginTop: 0,
        flex: 1,
        backgroundColor: '#649F95',
        height: 65,  // Set the height of the upper container.
    },

    lower1container: {
        backgroundColor: '#649F95',  // Background color for the first lower container.
    },

    headerText: {
        fontSize: 25,
        color: 'white',
        left: '22%',  // Position the header text to the left.
        bottom: 20  // Position the header text from the bottom.
    },

    lower2Container: {
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 40,
        paddingTop: 60,
        paddingBottom: 80,
        bottom: 0  // Align the lower2Container to the bottom.
    },

    text: {
        fontSize: 16,         
        lineHeight: 20,       // Line height, specifying the space between lines of text
        marginBottom: 10,     
        marginTop: 0,         
    },

    headerText1: {
        fontSize: 20,
        marginTop: 100,
        marginBottom: 10,
        textAlign: 'center',
    },

    headerText2: {
        fontSize: 20,
        marginTop: 20,
        marginBottom: 10,
        textAlign: 'center',
        bottom: 5
    },

    box1: {
        marginBottom: 10,
        marginTop: 5,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#EBEBEB',
        backgroundColor: '#EBEBEB',
        padding: 10,
    },

    box2: {
        marginBottom: 10,
        marginTop: 5,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: 'white',
        backgroundColor: 'white',
        padding: 10,
    },

    box3: {
        marginBottom: 10,
        marginTop: 40,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#EBEBEB',
        backgroundColor: '#EBEBEB',
        padding: 10,
    },

    box4: {
        marginBottom: 10,
        marginTop: 40,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#EBEBEB',
        backgroundColor: '#EBEBEB',
        padding: 10,
    },

    button: {
        backgroundColor: '#649F95',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        width: 100,
        alignSelf: 'center',
    },

    buttonText: {
        color: 'white',
        textAlign: 'center',
    },

    addButton: {
        backgroundColor: '#649F95',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        width: 150,
        alignSelf: 'center',
        top: 20  // Position the addButton from the top.
    },

    addButtonText: {
        color: 'white',
        textAlign: 'center',
    },

    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    datePlaceholders: {
        marginRight: 10,
        color: 'black',
        top: 3  // Position the datePlaceholders from the top.
    },

    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    namePlaceholders: {
        marginRight: 10,
        color: 'black',
        top: 3,
        bottom: 3,  // Position the namePlaceholders from the bottom.
    },

    textInput: {
        flex: 1,
        borderWidth: 0,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 5,
        bottom: 3,  // Position the textInput from the bottom.
        fontSize: 14,
    },

    dateInput: {
        flex: 1,
        paddingBottom: 6,
        marginLeft: 5,  // Add left margin to the dateInput.
    },
});

export default vaccination;
