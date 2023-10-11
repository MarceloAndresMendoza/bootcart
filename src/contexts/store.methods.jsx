// ==============================================
// STOREFRONT METHODS
// Author: Marcelo Mendoza
// Created: 2023-10-11
// Description: Connects to the backend to get,
//              create, update and delete products.
// ==============================================

import { axiosClient } from '../config/axios.api.js'

export const getProducts = async () => {
    try {
        const response = await axiosClient.get('/products');
        return response.data;
    } catch (error) {
        console.error(error.response.status);
        return null;
    }
}

export const getProductById = async (productId) => {
    try {
        const response = await axiosClient.get(`/products/${productId}`);
        return response.data;
    } catch (error) {
        console.error(error.response.status);
        return null;
    }
}

export const createProduct = async (productData) => {
    try {
        const response = await axiosClient.post('/products', productData);
        return response.data;
    } catch (error) {
        console.error(error.response.status);
        return null;
    }
}

export const updateProduct = async (productId, productData) => {
    try {
        const response = await axiosClient.put(`/products/${productId}`, productData);
        return response.data;
    } catch (error) {
        console.error(error.response.status);
        return null;
    }
}

export const deleteProduct = async (productId) => {
    try {
        const response = await axiosClient.delete(`/products/${productId}`);
        return response.data;
    } catch (error) {
        console.error(error.response.status);
        return null;
    }
}
