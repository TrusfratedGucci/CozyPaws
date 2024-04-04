import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';

const TrainingTips = () => {
    const [showDescription, setShowDescription] = useState({
        sit: false,
        down: false,
        fetch: false,
        play: false,
    });

    const toggleDescription = (buttonName) => {
        setShowDescription(prevState => ({
            ...prevState,
            [buttonName]: !prevState[buttonName]
        }));
    };

    const sitListItems = [
        'Start with your pet standing in front of you.',
        'Hold a treat close to their nose, then slowly move your hand up and back over their head. This will naturally cause them to sit down. ',
        'As soon as their bottom touches the ground, say "Sit" in a clear, upbeat voice and give them the treat.',
        'Repeat this process several times, gradually adding the verbal cue "Sit" before they sit down.',
        'Be patient and consistent, and always reward them for sitting promptly.',
      ];
    
    

    const layListItems = [
        'Begin with your pet in a sitting position.',
        'Hold a treat in your hand and let your pet see and smell it.',
        'Slowly lower the treat to the ground between their front paws, leading them into a lying down position.',
        'As soon as their elbows touch the ground, say "Down" in a positive tone and give them the treat.',
        'Practice this regularly, gradually phasing out the treat so they respond to the verbal cue alone.',
    ];
    
    

    const fetchListItems = [
        'Start indoors in a quiet space with minimal distractions.',
        'Begin by showing your pet their favorite toy and getting them excited about it.',
        'Toss the toy a short distance away and encourage them to fetch it by saying "Fetch" or using another consistent cue.',
        'When they retrieve the toy, praise them enthusiastically and reward them with a treat or another round of play.',
        'Gradually increase the distance you throw the toy and practice in different environments to reinforce the command.',
    ];

    const playListItems = [
        'Choose a specific word or phrase, such as "Let\'s play!" or "Time to have fun!""',
        'Use an excited and upbeat tone of voice to signal playtime.',
        'Engage your pet in their favorite games or activities, such as fetch, tug-of-war, or hide-and-seek.',
        'Incorporate toys or treats to keep the play session fun and rewarding for your pet.',
        'After playtime, use a calming cue like "All done" to signal the end of the session and help your pet transition back to a relaxed state.',
    ];

    return (
        <View style={styles.container}>
            <ScrollView style={styles.body}>
            <View style={styles.profileButtons}>
                    <Button
                        title= {
                                <View style={styles.buttonInside}>
                                    <View style={styles.profileButtonTextContainer}>
                                        <Text style={styles.profileButtonTextStyle}>Sit Command</Text>
                                    </View>
                                    
                                    <View style={styles.profileButtonImageContainer}>
                                        <Image 
                                                source={require('../assets/sit.png')} 
                                                style={styles.buttonImage} // Apply the icon styles
                                            />
                                    </View>

                                    
                                    
                                </View>
                        }
                        onPress={() => toggleDescription('sit')}
                        buttonStyle={styles.profileButtonStyle} // Apply button style
                        >  
                    </Button>

                    {showDescription.sit && (
                        <View style={styles.descriptionTextContainer}>
                            {sitListItems.map((item, index) => (
                                <Text key={index} style={styles.descriptionText}>
                                    • {item}
                                </Text>
                            ))}
                        </View>
                    )}


                    <Button
                            title= {
                                <View style={styles.buttonInside}>
                                <View style={styles.profileButtonTextContainer}>
                                    <Text style={styles.profileButtonTextStyle}>Lay Down Command</Text>
                                </View>
                                
                                <View style={styles.profileButtonImageContainer}>
                                    <Image 
                                            source={require('../assets/sandbox.png')}
                                            style={styles.buttonImage} // Apply the icon styles
                                        />
                                </View>
                                
                            </View>
                        }
                        onPress={() => toggleDescription('down')}
                        buttonStyle={styles.profileButtonStyle} // Apply button style
                        >  
                    </Button>

                    {showDescription.down && (
                        <View style={styles.descriptionTextContainer}>
                            {layListItems.map((item, index) => (
                                <Text key={index} style={styles.descriptionText}>
                                    • {item}
                                </Text>
                            ))}
                        </View>
                    )}

                    <Button
                            title= {
                                <View style={styles.buttonInside}>
                                <View style={styles.profileButtonTextContainer}>
                                    <Text style={styles.profileButtonTextStyle}>Fetch Command</Text>
                                </View>
                                
                                <View style={styles.profileButtonImageContainer}>
                                    <Image 
                                            source={require('../assets/bone.png')} 
                                            style={styles.buttonImage} // Apply the icon styles
                                        />
                                </View>
                                
                            </View>
                        }
                        onPress={() => toggleDescription('fetch')}
                        buttonStyle={styles.profileButtonStyle} // Apply button style
                        >  
                    </Button>

                    {showDescription.fetch && (
                        <View style={styles.descriptionTextContainer}>
                            {fetchListItems.map((item, index) => (
                                <Text key={index} style={styles.descriptionText}>
                                    • {item}
                                </Text>
                            ))}
                        </View>
                    )}

                    <Button
                            title= {
                                <View style={styles.buttonInside}>
                                <View style={styles.profileButtonTextContainer}>
                                    <Text style={styles.profileButtonTextStyle}>Play Command</Text>
                                </View>
                                
                                <View style={styles.profileButtonImageContainer}>
                                    <Image 
                                            source={require('../assets/boy.png')} 
                                            style={styles.buttonImage} // Apply the icon styles
                                        />
                                </View>
                                
                            </View>
                        }
                        onPress={() => toggleDescription('play')}
                        buttonStyle={styles.profileButtonStyle} // Apply button style
                        >  
                    </Button>

                    {showDescription.play && (
                        <View style={styles.descriptionTextContainer}>
                            {playListItems.map((item, index) => (
                                <Text key={index} style={styles.descriptionText}>
                                    • {item}
                                </Text>
                            ))}
                        </View>
                    )}

                    

                    
                    
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
    profileButtons: {
        borderRadius: 6, // Add border radius
        margin: 15,
        marginTop: -5,
        paddingBottom:50,
        // alignItems: 'center',
    },
    profileButtonStyle: {
        backgroundColor: '#5B8F86', // Change button background color
        borderColor: '#5B8F86', // Change button border color
        borderWidth: 1, // Add button border width
        borderRadius: 16, // Add button border radius
        height: 100, // Set button height
        marginVertical: 15,
        
        // width: 300,
    },
    profileButtonTextStyle: {
        color: 'white', // Change text color
        fontSize: 20,  
    },
    buttonInside: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        width: '100%', // Ensure the button takes the full width
    },
    profileButtonTextContainer: {
        flex: 1, // Take remaining space
        marginRight: 10, // Add some space between text and image
        marginLeft: 30, 
    },
    buttonImage: {
        width: 70,
        height: 70,
    },  
    descriptionTextContainer: {
        marginTop: -15,
        backgroundColor: '#DEEBE9', // Change button background color
        borderBottomRightRadius: 16, // Add button border radius
        borderBottomLeftRadius: 16,
        padding: 20,
        marginLeft:15,
        marginRight:15,
    }, 
    listItem: {
        marginBottom: 10, // Add some margin between list items to ensure they start from a new line
    },
});

export default TrainingTips;
