// ====================================================
// USER CONTEXT METHODS
// Author: Marcelo Mendoza
// Created: 2023-10-10
// Description: Creation of the user context methods to
//              be used in the application
// ====================================================

import { axiosClient } from '../config/axios.api.js'

export const userLogin = async (email, password) => {
    try {
        const response = await axiosClient.post('/login',
            { email: email, password: password },
        );
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const verifyToken = async () => {
    try {
        const token = localStorage.getItem('authtoken');
        if (token) {
            // If there is a token, set it as default on the headers
            // Send token in the header
            axiosClient.defaults.headers.common['x-access-token'] = token;
            const response = await axiosClient.get('/verify-token');
            return response.data
        } else {
            // Delete token from header
            delete axiosClient.defaults.headers.common['authorization'];
        }
    } catch (error) {
        return null
    }
}

export const signUpUser = async (signupFormData) => {
    try {
        const response = await axiosClient.post('/signup', signupFormData);
        return response?.status;
    } catch (error) {
        console.error(error.response.status);
        return error?.response?.status;
    }
}
