import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

//backend call for signin
export const signIn = async (email, password) => {
    try {
        const response = await axios.post(`${BASE_URL}/signin`, {
            email,
            password
        });

        if (response.status === 200) {
            // Sign in successful
            // Store JWT token in AsyncStorage for future use
            await AsyncStorage.setItem('token', response.data.token);

            // Return true to indicate successful sign-in
            return true;
        } else {
            // Sign in failed
            // Return false to indicate failed sign-in
            return false;
        }
    } catch (error) {
        console.error('Error signing in:', error);
        // Return false to indicate failed sign-in
        return false;
    }
};


//backed call for signup
export const signUp = async (username, email, password) => {
    try {
        const response = await axios.post(`${BASE_URL}/signup`, {
            username,
            email,
            password
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


// Function to get token stored in AsyncStorage
const getToken = async () => {
    try {
        const token = await AsyncStorage.getItem('token'); // Retrieving token using the same key used for storing it
        return token;
    } catch (error) {
        console.error('Error getting token from AsyncStorage:', error);
        throw error;
    }
};


// Function to get userId from token stored in AsyncStorage
export const getUserId = async () => {
    try {
        const token = await getToken();
        if (token) {
            // If token exists, decode it to get userId
            const decodedToken = jwt_decode(token);
            return decodedToken.userId;
        } else {
            // If token doesn't exist, return null
            return null;
        }
    } catch (error) {
        console.error('Error getting userId from token:', error);
        throw error;
    }
};


//backed call for forgotpassword
export const forgotPassword = async (email) => {
    try {
        const response = await axios.post(`${BASE_URL}/forgot-password`, { email });

        if (response.status === 200) {
            // Request sent successfully
            // Return true to indicate successful request
            return true;
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
    try {
        const response = await axios.post(`${BASE_URL}/forgot-password/verify`, {
            verificationCode: verificationCode.join('')
        });

        if (response.status === 200) {
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
    try {
        const response = await axios.post(`${BASE_URL}/reset-password`, {
            token,
            newPassword,
        });

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

export default { signIn, signUp, getToken, getUserId, forgotPassword, verifyVerificationCode, resetPassword };
