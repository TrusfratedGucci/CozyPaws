import axios from 'axios';

const BASE_URL = 'http://13.50.102.133:3000';

export const fetchPetProfiles = async (token) => { 
    try {
        const response = await axios.get(`${BASE_URL}/pet/get-all-pets`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json' 
            }
        });

        return response.data; // Return the data for successful requests
    } catch (error) {
        if (error.response && error.response.status === 404) {
            console.log("No pet profiles found for this user");
            return null; // Or any other appropriate action
        } else {
            if (error.response && error.response.status === 404) {
                // Pet profile not found or has been deleted
                console.log('Pet profile not found or has been deleted');
            }
            console.error('Error fetching pet data:', error);
            throw error;
        }
    }
};




// Backend call to creating a new pet
export const createPet = async (petData, token) => { // Include token parameter
    console.log('petData ', petData);

    try {
        // Make an HTTP POST request to the backend
        const response = await fetch(`${BASE_URL}/pet/new-pet`, {
            method: 'POST',
            headers: {
                Accept: '*/*',
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            },
            body: petData,
        });

        const responseData = await response.json();

        if (response.status === 201) {
            console.log('Pet created successfully');
            return responseData.pet; // Return the created pet object
        } else {
            console.error('Error creating pet:', responseData);
            throw new Error(responseData.message); // Throw an error with the error message
        } 
    } catch (error) {
        console.error('Error creating pet:', error.message);
        throw error; // Re-throw the error for the caller to handle
    }
};



// Backend call to get data of specific pet 
export const fetchPetData = async (petID, token) => {
    try {
        const response = await axios.get(`${BASE_URL}/pet/${petID}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                
            }
        });
        console.log("Pet data", response.data)
        return response.data;
    } catch (error) {
        console.error('Error fetching pet data:', error);
        throw error;
    }
};

// Backend call to update data of specific pet 
export const updatePetData = async (petID, editedPetData, token) => {
    console.log("Updated pet data", editedPetData);
    try {
        const response = await fetch(`${BASE_URL}/pet/${petID}`, {
            method: 'PUT', // or 'PATCH' depending on your backend API
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data', // Ensure correct content type for FormData
            },
            body: editedPetData,
        });

        // Parse response body as JSON
        const responseData = await response.json();
        console.log('Edited pet data:', responseData);
        return responseData;
    } catch (error) {
        console.error('Error editing pet data:', error);
        throw error;
    }
};



// Backend call to fetch vaccination history for the specified pet
export const fetchVaccinationHistory = async (petId, token) => {
    try {
        const response = await axios.get(`${BASE_URL}/pet/vaccines/${petId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                
            }
        });
        console.log('Vaccine data:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching vaccination history:', error);
        throw error;
    }
};

// Backend call to add a new vaccine
export const addNewVaccine = async (newVaccineData, petId, token) => {
    try {
        console.log("Adding new vaccine:", newVaccineData); // Log new vaccine data
        console.log("Pet ID:", petId); // Log pet ID
        console.log("Token:", token); // Log token
        const response = await axios.post(`${BASE_URL}/pet/vaccines/${petId}`, newVaccineData, {
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

// Backend call to fetch heat cycle data and update last heat cycle date
export const fetchHeatCycleDataAndUpdateLastDate = async (petId, selectedDate, token) => {
    try {
        const response = await axios.post(`${BASE_URL}/pet/heat-cycle/${petId}`, {
            selectedDate
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response.data; // Return the response data
    } catch (error) {
        console.log(error);
        throw new Error('Error fetching or updating heat cycle data:', error);
    }
};


// Backend call to create medical history record of a specific pet
export const createMedicalHistoryRecord = async (petId, medicalRecordData, token) => {
    try {
        console.log(medicalRecordData);
        const response = await axios.post(`${BASE_URL}/pet/medical-history/${petId}`, medicalRecordData, {
            headers: {
                Authorization: `Bearer ${token}`,
                
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error creating medical history record:', error);
        throw error;
    }
};

// Backend call to get all medical history record of a specific pet
export const fetchMedicalHistoriesForPet = async (petId, token) => {
    try {
        const response = await axios.get(`${BASE_URL}/pet/medical-history/${petId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            console.log("No medical histories found for this pet");
            return null; // Or any other appropriate action
        } else {
            console.error('Error creating medical history record:', error);
            throw error;
        }
    }
};

// Function to delete a pet by ID
export const deletePetById = async (petId, token) => {
    try {
        const response = await axios.delete(`${BASE_URL}/pet/${petId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json' 
            }
        });

        if (response.status === 200) {
            console.log('Pet deleted successfully');
            return true;
        } else {
            console.error('Error deleting pet:', response.data);
            throw new Error(response.data.message); // Throw an error with the error message
        } 
    } catch (error) {
        console.error('Error deleting pet:', error);
        throw error; // Re-throw the error for the caller to handle
    }
};

export default {
    fetchPetProfiles,
    createPet,
    fetchPetData,
    updatePetData,
    fetchVaccinationHistory,
    addNewVaccine,
    fetchHeatCycleDataAndUpdateLastDate,
    createMedicalHistoryRecord,
    fetchMedicalHistoriesForPet,
    deletePetById,
    
};