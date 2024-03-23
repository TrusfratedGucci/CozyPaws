import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'
// import { decodeJwtToken } from '../utility/utils'; // Assuming you have a utils folder with a jwt.js file
import { decode } from 'base64-js';


// // Function to decode JWT token manually
// const decodeJwtToken = (token) => {
//     try {
//         const payloadBase64 = token.split('.')[1];
//         const decodedPayload = decode(payloadBase64);
//         const payloadString = new TextDecoder().decode(decodedPayload);
//         return JSON.parse(payloadString);
//     } catch (error) {
//         console.error('Error decoding JWT token:', error);
//         throw error;
//     }
// };

const BASE_URL = 'http://192.168.1.9:3000';


// Function to get token stored in AsyncStorage
export const getToken = async () => {
    
    try {
        const token = await AsyncStorage.getItem('token'); // Retrieving token using the same key used for storing it
       
        if (token !== null) {
            // // Token retrieved successfully
            // console.log(token);
            return token;
            
        } else {
            // Token does not exist in AsyncStorage
            console.error('Token does not exist in AsyncStorage');
            return null;
        }
    } catch (error) {
        // Error occurred while retrieving token
        console.error('Error getting token from AsyncStorage:', error);
        throw error;
    }
};


export const signIn = async (email, password) => {
    try {
        console.log("Email:", email); // Log the email before making the request
        console.log("Password:", password); // Log the password before making the request
        const response = await axios.post('http://192.168.1.9:3000/auth/signin', {
            email,
            password
        }, {
            headers: {
                'Content-Type': 'application/json' // Specify JSON content type
            }
        });

        console.log('response ', response)

        if (response.status === 200) {
            // Sign in successful
            // Store JWT token in AsyncStorage for future use
            await AsyncStorage.setItem('token', response.data.token);

            // Log the token after it's stored
            console.log('Token stored:', response.data.token);

            // Return true to indicate successful sign-in
            return true;
        } else if (response.status === 401){
            // Sign in failed
            // Return false to indicate failed sign-in
            return false;
        }
    } catch (error) {
        // Check if the error is from Axios and has a response with a status code of 401
        if (error.response && error.response.status === 401) {
            // Handle the case where the user doesn't exist
            console.log('User not found')
            // Return false to indicate failed sign-in
            return false;
        } else {
            // Handle other errors
            console.error('Other error:', error);
            // Return false to indicate failed sign-in
            return false;
        }
    }
};





//backed call for signup
export const signUp = async (username, email, password) => {
    try {
        console.log("Email:", username); // Log the email before making the request
        console.log("Password:", email); // Log the password before making the request
        console.log("Password:", password);
        const response = await axios.post(`${BASE_URL}/auth/signup`, {
            username,
            email,
            password
        },{
            headers: {
                'Content-Type': 'application/json' // Specify JSON content type
            }
    });

        if (response.status === 201) {
            // Sign up successful
            // Store JWT token in AsyncStorage for future use (if needed)
            await AsyncStorage.setItem('token', response.data.token);

            // Return true to indicate successful sign-up
            return true;
        } else {
            // Sign up failed
            // Return false to indicate failed sign-up
            return false;
        }
    } catch (error) {
        console.error('Error signing up:', error);
        // Return false to indicate failed sign-up
        return false;
    }
};




export const forgotPassword = async (email) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/forgot-password`, { email });

        if (response.status === 200) {
            if (response.data.resetToken) {
                // Store the reset code in AsyncStorage
                await AsyncStorage.setItem('token', response.data.resetToken);

                // Log the token after it's stored
             console.log('Token stored:', response.data.resetToken);
                // Return true to indicate successful request
                return true;
            } else {
                // Handle case where reset code is null or undefined
                console.error('Reset code is null or undefined');
                // Return false or handle the error appropriately
                return false;
            }
        } else {
            // Request failed
            // Return false to indicate failed request
            return false;
        }
    } catch (error) {
        console.error('Error requesting password reset:', error);
        // Return false to indicate failed request
        return false;
    }
};



// Function to verify the verification code
export const verifyVerificationCode = async (verificationCode) => {
    console.log("Verification Code:", verificationCode);
    try {
        const joinedCode = verificationCode.join(''); // Join the array elements into a single string
        console.log("Joined Code:", joinedCode);
        const response = await axios.post(`${BASE_URL}/auth/forgot-password/verify`, {
            verificationCode: joinedCode
        });

        if (response.status === 200) {
            console.log("Yay! Verified");
            // Verification successful
            // Return true to indicate successful verification
            return true;
        } else {
            // Verification failed
            // Return false to indicate failed verification
            return false;
        }
    } catch (error) {
        console.error('Error verifying code:', error);
        // Return false to indicate failed verification
        return false;
    }
};


// Backend call to reset password
export const resetPassword = async (token, newPassword) => {
    console.log("Reset Code:", token);
    try {
        const response = await axios.post(`${BASE_URL}/auth/reset-password`, {
            token,
            newPassword,
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json' 
            }
        }
        
        );

        if (response.status === 200) {
            // Password reset successful
            // Return true to indicate successful password reset
            return true;
        } else {
            // Password reset failed
            // Return false to indicate failed password reset
            return false;
        }
    } catch (error) {
        console.error('Error resetting password:', error);
        // Return false to indicate failed password reset
        return false;
    }
};


// Function to clear token from AsyncStorage upon logout
export const clearToken = async () => {
    try {
        await AsyncStorage.removeItem('token');
    } catch (error) {
        console.error('Error clearing token from AsyncStorage:', error);
        throw error;
    }
};


// Function to handle logout
export const signOut = async () => {
    try {
        const token = await getToken();
        console.log('token',token)
        const response = await axios.post(
            `${BASE_URL}/auth/logout`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        if (response.status === 200) {
            // Logout successful
            // Clear token from AsyncStorage
            await clearToken();
            console.log('Cleared token:', await AsyncStorage.getItem('token'));
            console.log('Sign Out', 'You have been signed out successfully.');
            return true;
            
        } else {
            // Logout failed
            console.log('Sign Out', 'Failed to sign out. Please try again.');
            return false;
        }
    } catch (error) {
        console.error('Error logging out:', error);
        Alert.alert('Sign Out', 'An error occurred while signing out. Please try again.');
    }
};



// Function to delete user account
export const deleteAccount = async () => {
    try {
        const token = await getToken();
        const response = await axios.delete(`${BASE_URL}/auth/delete-account`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.status === 200) {
            // Account deletion successful
            // Clear token from AsyncStorage
            await clearToken();
            console.log('Account Deleted', 'Your account has been deleted successfully.');
            return true;
            
        } else {
            // Account deletion failed
           console.log('Account Deletion', 'Failed to delete your account. Please try again.');
           return false;
        }
    } catch (error) {
        console.error('Error deleting account:', error);
        Alert.alert('Account Deletion', 'An error occurred while deleting your account. Please try again.');
    }
};


export default { signIn, signUp, getToken, forgotPassword, verifyVerificationCode, resetPassword, clearToken, signOut, deleteAccount };
