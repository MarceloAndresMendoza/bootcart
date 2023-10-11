// ====================================================
// STORE CONTEXT
// Author: Marcelo Mendoza
// Created: 2023-10-11
// Description: Get and display the products from the
//              backend
// ====================================================
import { createContext, useReducer } from 'react';
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from './store.methods';

// Creation of the context
export const StoreContext = createContext();

// Creation of the reducer
const storeReducer = (state, action) => {
    switch (action.type) {
        case 'PRODUCTS_LOADED':
            return { ...state, products: action.payload };
        case 'PRODUCT_LOADED':
            return { ...state, product: action.payload };
        case 'PRODUCT_CREATED':
            return { ...state, product: action.payload };
        case 'PRODUCT_UPDATED':
            return { ...state, product: action.payload };
        case 'PRODUCT_DELETED':
            return { ...state, product: action.payload };
        default:
            return state;
    }
}

// Creation of the provider
export const StoreProvider = ({ children }) => {
    const storeInitialState = {
        products: [],
    }

    const [storeState, dispatch] = useReducer(storeReducer, storeInitialState);

    const loadProducts = async () => {
        const products = await getProducts();
        dispatch({
            type: 'PRODUCTS_LOADED',
            payload: products,
        });
    }

    const loadProduct = async (productId) => {
        const product = await getProductById(productId);
        dispatch({
            type: 'PRODUCT_LOADED',
            payload: product,
        });
    }

    const createNewProduct = async (productData) => {
        const product = await createProduct(productData);
        dispatch({
            type: 'PRODUCT_CREATED',
            payload: product,
        });
    }

    const updateExistingProduct = async (productId, productData) => {
        const product = await updateProduct(productId, productData);
        dispatch({
            type: 'PRODUCT_UPDATED',
            payload: product,
        });
    }

    const deleteExistingProduct = async (productId) => {
        const product = await deleteProduct(productId);
        dispatch({
            type: 'PRODUCT_DELETED',
            payload: product,
        });
    }

    return (
        <StoreContext.Provider
            value={{
                products: storeState.products,
                loadProducts,
                loadProduct,
                createNewProduct,
                updateExistingProduct,
                deleteExistingProduct,
            }}
        >
            {children}
        </StoreContext.Provider>
    );
}