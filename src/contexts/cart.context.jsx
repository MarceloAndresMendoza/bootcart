// =======================================
// SHOPPING CART CONTEXT
// Author: Marcelo Mendoza
// Created: 2023-10-13
// Description: Context provider for the
//              shopping cart
// =======================================
import { createContext, useReducer } from 'react';
import {
    saveCart,
    getCart,
    clearCart,
    addElement,
    updateElement,
    removeElement,
} from './cart.methods';

// Creation of the context
export const CartContext = createContext();

// Creation of the reducer
const cartreducer = (state, action) => {
    switch (action.type) {
        case 'CART_LOADED':
            return { ...state, elements: action.payload.elements, total: action.payload.total };
        case 'CART_CLEARED':
            return { ...state, elements: action.payload.elements, total: action.payload.total };
        case 'ELEMENT_ADDED':
            return { ...state, cart: action.payload };
        case 'ELEMENT_UPDATED':
            return { ...state, elements: action.payload.elements, total: action.payload.total };
        case 'ELEMENT_REMOVED':
            return { ...state, elements: action.payload.elements, total: action.payload.total  };
        default:
            return state;
    }
}

// Creation of the provider
export const CartProvider = ({ children }) => {
    // We need in the cart:
    // - the ID
    // - the quantity
    // - the image url
    // - the title
    // - the price
    // - the description
    // - the brand
    // - the category
    // Data will be saved from the backend at the moment of adding the product to the cart
    // and will be saved in the local storage. but also we need to update data whenever the
    // user access some cart modification, like changing the quantity of a product or removing
    // it from the cart.

    const cartInitialState = {
        cart: {
            elements: [],
            total: 0,
        }
    }

    const [cartState, dispatch] = useReducer(cartreducer, cartInitialState);

    const doLoadCart = () => {
        const savedCartItems = getCart();
        dispatch({
            type: 'CART_LOADED',
            payload: savedCartItems,
        });
    }

    const doClearCart = async () => {
        const savedCartItems = clearCart();
        if (savedCartItems) {
            dispatch({
                type: 'CART_CLEARED',
                payload: savedCartItems,
            });
        }
    }

    const doAddElementToCart = (product, quantity) => {
        const savedCartItems = addElement(product, quantity);
        dispatch({
            type: 'ELEMENT_ADDED',
            payload: savedCartItems,
        });
    }

    const doUpdateElementInCart = (element, quantity) => {
        const savedCartItems = updateElement(element, quantity);
        dispatch({
            type: 'ELEMENT_UPDATED',
            payload: savedCartItems,
        });
    }

    const doRemoveElementFromCart = (element) => {
        const savedCartItems = removeElement(element);
        dispatch({
            type: 'ELEMENT_REMOVED',
            payload: savedCartItems,
        });
    }

    return (
        <CartContext.Provider
            value={{
                total: cartState.total,
                elements: cartState.elements,
                doLoadCart,
                doClearCart,
                doAddElementToCart,
                doUpdateElementInCart,
                doRemoveElementFromCart,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}