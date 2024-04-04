import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LottieView from 'lottie-react-native';
import { signOut, deleteAccount, } from '../api/auth.js'

function DrawerContent(props) {
    const [logoutModalVisible, setLogoutModalVisible] = useState(false);
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);


    const handleLogout = () => {
        setLogoutModalVisible(true);
    };

    const handleDelete = () => {
        setDeleteModalVisible(true);
    };

    const confirmLogout = () => {
        const response = signOut();
        // navigate to start screen
        if (response) {
            setLogoutModalVisible(false);
            props.navigation.navigate('StartScreen');
        }
        
    };

    const confirmDelete = () => {
        // const navigation = useNavigation(); // Access the navigation object

            const response = deleteAccount();
            // navigate to start screen
            if (response) {
                setDeleteModalVisible(false);
                props.navigation.navigate('StartScreen');
            }
        
    };

    const cancelAction = () => {
        setLogoutModalVisible(false);
        setDeleteModalVisible(false);
    };

    const showConfirmation = (action) => {
        let title, message, onPress;
        if (action === 'logout') {
            title = 'Signout';
            message = 'Are you sure you want to sign out?';
            onPress = confirmLogout;
        } else if (action === 'delete') {
            title = 'Delete Account';
            message = 'Are you sure you want to delete your account?';
            onPress = confirmDelete;
        }
        Alert.alert(
            title,
            message,
            [
                { text: 'Cancel', style: 'cancel', onPress: cancelAction, color: '#FF0000' }, // Change color of Cancel button
                { text: action === 'logout' ? 'Sign Out' : 'Delete', onPress, style: 'destructive' }, // Change text based on action
            ],
            { cancelable: true }
        );
    };


    return (
        <View style={styles.drawerContent}>
            <LottieView source={require('../assets/drawerMenu.json')}style={styles.lottieView} 
               autoPlay 
               speed={0.8} 
               onAnimationFinish={() => console.log('Animation finished')} // Callback when animation finishes
               />       
            <View >
                <DrawerItem style={styles.deleteIcon}
                    icon={({ color, size }) => (
                        <Icon name="delete" color={'#649F95'} size={size} />
                    )}
                    label="Delete Account"
                    onPress={() => showConfirmation('delete')}
                />
                <DrawerItem 
                    icon={({ color, size }) => (
                        <Icon name="exit-to-app" color={'#649F95'} size={size} />
                    )}
                    label="Sign Out"
                     onPress={() => showConfirmation('logout')}
                />
            </View>
            {/* Add your logout confirmation modal here */}
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },

    deleteIcon: {
        marginTop: 100,
        marginBottom: 10,
        borderTopColor: '#dedede',
        borderTopWidth: 1,
        borderBottomColor: '#dedede',
        borderBottomWidth: 1,
    },

    lottieView: {
        width: 600,
        height: 600,
        marginLeft: -300,
        marginTop: -30,
        
    },

    
});

export default DrawerContent;
