import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

// Backend call to get pet profiles of a specific user
export const fetchPetProfiles = async (token, userId) => { // Include userId parameter
    try {
        const response = await axios.get(`${BASE_URL}/petProfile/pets`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                userId: userId // Pass userId as a query parameter
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching pet data:', error);
        throw error;
    }
};

// Backend call to creating a new pet
export const createPet = async (petData, token) => { // Include token parameter
    try {
        const response = await axios.post(`${BASE_URL}/petProfile/pets`, petData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log('Pet created:', response.data);
        return response.data; // Return the created pet data
    } catch (error) {
        console.error('Error creating pet:', error);
        throw error; // Re-throw the error for the caller to handle
    }
};

// Backend call to get data of specific pet 
export const fetchPetData = async (petID, token) => {
    try {
        const response = await axios.get(`${BASE_URL}/petProfile/pets/${petID}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching pet data:', error);
        throw error;
    }
};

// Backend call to update data of specific pet 
export const updatePetData = async (petID, editedPetData, token) => {
    try {
        const response = await axios.put(`${BASE_URL}/petProfile/pets/${petID}`, editedPetData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log('Edited pet data:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error editing pet data:', error);
        throw error;
    }
};


// Backend call to fetch vaccination history for the specified pet
export const fetchVaccinationHistory = async (petId, token) => {
    try {
        const response = await axios.get(`${BASE_URL}/pets/${petId}/vaccines`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching vaccination history:', error);
        throw error;
    }
};

// Backend call to add a new vaccine
export const addNewVaccine = async (newVaccineData, petId, token) => {
    try {
        const response = await axios.post(`${BASE_URL}/pets/${petId}/vaccines`, newVaccineData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error adding vaccine:', error);
        throw error;
    }
};



export default { fetchPetProfiles, createPet, fetchPetData, updatePetData, fetchVaccinationHistory, addNewVaccine };