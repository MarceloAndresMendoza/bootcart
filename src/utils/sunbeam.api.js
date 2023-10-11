// ==============================================
// SUNBEAM API HANDLERS
// Author: Marcelo Mendoza
// Created: 2023-11-10
// Description: Load, save and delete files from
//              the Sunbeam Fileserver API.
// ==============================================
const SUNBEAM_ENDPOINT = process.env.SUNBEAM_ENDPOINT;
const SUNBEAM_API_KEY = process.env.SUNBEAM_API_KEY;

const sunbeamApi = axios.create({
    baseURL: SUNBEAM_ENDPOINT,
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': SUNBEAM_API_KEY
    }
});

// Fetch a single image from the Sunbeam Fileserver API
export const fetchImage = async (imageId) => {
    try {
        const response = await sunbeamApi.get(`/files/?filename=${imageId}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

// Upload an image to the Sunbeam Fileserver API
export const uploadImage = async (image) => {
    try {
        const response = await sunbeamApi.post('/files', image);
        return response.data; // returns the image ID to save on the database
    } catch (error) {
        console.log(error);
    }
}

// Delete an image from the Sunbeam Fileserver API
export const deleteImage = async (imageId) => {
    try {
        const response = await sunbeamApi.delete(`/files/?filename=${imageId}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

