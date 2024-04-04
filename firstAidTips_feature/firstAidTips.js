import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';

const FirstAidTips = () => {
    const [showDescription, setShowDescription] = useState({
        swelling: false,
        cut: false,
        vomit: false,
        purging: false,
        sprain: false,
        coughing: false
    });

    const toggleDescription = (buttonName) => {
        setShowDescription(prevState => ({
            ...prevState,
            [buttonName]: !prevState[buttonName]
        }));
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.body}>
            <View style={styles.profileButtons}>
                    <Button
                        title= {
                                <View style={styles.buttonInside}>
                                    <View style={styles.profileButtonTextContainer}>
                                        <Text style={styles.profileButtonTextStyle}>Swelling</Text>
                                    </View>
                                    
                                    <View style={styles.profileButtonImageContainer}>
                                        <Image 
                                                source={require('../assets/dog-house.png')} 
                                                style={styles.buttonImage} // Apply the icon styles
                                            />
                                    </View>

                                    
                                    
                                </View>
                        }
                        onPress={() => toggleDescription('swelling')}
                        buttonStyle={styles.profileButtonStyle} // Apply button style
                        >  
                    </Button>

                    {showDescription.swelling && (
                        <View style={styles.descriptionTextContainer}>

                        <Text style={styles.descriptionText}>
                            Uh-oh, looks like your fur baby's got a bit of a swell going on! If it's not too serious, try soothing it with a makeshift ice pack - frozen peas in a sock work wonders! But if it's causing them distress, better buzz the vet pronto!
                        </Text>

                    </View>
                    )}

                    <Button
                            title= {
                                <View style={styles.buttonInside}>
                                <View style={styles.profileButtonTextContainer}>
                                    <Text style={styles.profileButtonTextStyle}>Cut</Text>
                                </View>
                                
                                <View style={styles.profileButtonImageContainer}>
                                    <Image 
                                            source={require('../assets/band-aid.png')}
                                            style={styles.buttonImage} // Apply the icon styles
                                        />
                                </View>
                                
                            </View>
                        }
                        onPress={() => toggleDescription('cut')}
                        buttonStyle={styles.profileButtonStyle} // Apply button style
                        >  
                    </Button>

                    {showDescription.cut && (
                        <View style={styles.descriptionTextContainer}>

                        <Text style={styles.descriptionText}>
                            Ouch! That's a nasty nick! First, stop the bleeding with a gentle squeeze and a clean cloth. Then, give it a wash with soap and water, followed by a dab of antiseptic if you've got it. If it's deep or won't stop bleeding, it's time for a trip to the vet!
                        </Text>

                    </View>
                    )}

                    <Button
                            title= {
                                <View style={styles.buttonInside}>
                                <View style={styles.profileButtonTextContainer}>
                                    <Text style={styles.profileButtonTextStyle}>Vomit</Text>
                                </View>
                                
                                <View style={styles.profileButtonImageContainer}>
                                    <Image 
                                            source={require('../assets/vomit.png')} 
                                            style={styles.buttonImage} // Apply the icon styles
                                        />
                                </View>
                                
                            </View>
                        }
                        onPress={() => toggleDescription('vomit')}
                        buttonStyle={styles.profileButtonStyle} // Apply button style
                        >  
                    </Button>

                    {showDescription.vomit && (
                        <View style={styles.descriptionTextContainer}>

                        <Text style={styles.descriptionText}>
                            Uh-oh, someone's doing the upchuck tango! Give their tummy a break by taking away the food and water for a bit. Once they're settled, offer some sips of water and gradually reintroduce bland noms like chicken and rice. But if the puke party keeps going or they seem really out of sorts, dial up the doc!
                        </Text>

                    </View>
                    )}

                    <Button
                            title= {
                                <View style={styles.buttonInside}>
                                <View style={styles.profileButtonTextContainer}>
                                    <Text style={styles.profileButtonTextStyle}>Purging</Text>
                                </View>
                                
                                <View style={styles.profileButtonImageContainer}>
                                    <Image 
                                            source={require('../assets/purging.png')} 
                                            style={styles.buttonImage} // Apply the icon styles
                                        />
                                </View>
                                
                            </View>
                        }
                        onPress={() => toggleDescription('purging')}
                        buttonStyle={styles.profileButtonStyle} // Apply button style
                        >  
                    </Button>

                    {showDescription.purging && (
                        <View style={styles.descriptionTextContainer}>

                        <Text style={styles.descriptionText}>
                            Yikes, someone's got the runs! Time to hit pause on the food train for a bit and keep the water flowing. When they're feeling up to it, whip up some bland eats like chicken and rice. But if the squirty situation doesn't improve or they're feeling down, it's vet time!
                        </Text>

                    </View>
                    )}

                    <Button
                            title= {
                                <View style={styles.buttonInside}>
                                <View style={styles.profileButtonTextContainer}>
                                    <Text style={styles.profileButtonTextStyle}>Sprain</Text>
                                </View>
                                
                                <View style={styles.profileButtonImageContainer}>
                                    <Image 
                                            source={require('../assets/bandage.png')} 
                                            style={styles.buttonImage} // Apply the icon styles
                                        />
                                </View>
                                
                            </View>
                        }
                        onPress={() => toggleDescription('sprain')}
                        buttonStyle={styles.profileButtonStyle} // Apply button style
                        >  
                    </Button>

                    {showDescription.sprain && (
                        <View style={styles.descriptionTextContainer}>

                        <Text style={styles.descriptionText}>
                            Ouchie, that looks like it hurts! Keep your pet on chill mode to avoid making it worse. Ice packs (or frozen peas in a sock - seriously, they work!) can help with swelling and discomfort. But if they're still limping or in a lot of pain, best to let the vet take a peek!
                        </Text>

                    </View>
                    )}

                    <Button
                            title= {
                                <View style={styles.buttonInside}>
                                <View style={styles.profileButtonTextContainer}>
                                    <Text style={styles.profileButtonTextStyle}>Coughing</Text>
                                </View>
                                
                                <View style={styles.profileButtonImageContainer}>
                                    <Image 
                                            source={require('../assets/kitty.png')} 
                                            style={styles.buttonImage} // Apply the icon styles
                                        />
                                </View>
                                
                            </View>
                        }
                        onPress={() => toggleDescription('coughing')}
                        buttonStyle={styles.profileButtonStyle} // Apply button style
                        >  
                    </Button>

                        {showDescription.coughing && (
                            <View style={styles.descriptionTextContainer}>

                                <Text style={styles.descriptionText}>
                                    Oh no, sounds like your buddy's got a case of the coughs! Keep an eye on them and try to figure out what's triggering it. Keep them comfy and calm, and if it's not getting better or seems really bad, give the vet a jingle for some expert advice!
                                </Text>

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
});

export default FirstAidTips;
