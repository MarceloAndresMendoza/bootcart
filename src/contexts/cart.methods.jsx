// ================================================
// Storefront Cart Methods
// Author: Marcelo Mendoza
// Created: 2023-10-13
// Description: Saves the shopping cart in the
//              local storage. Each cart element
//              will contain the product id and the
//              quantity.
// ================================================
import Swal from "sweetalert2";
import { PostWebpayPlusOrder } from "../utils/webpay.transbank";

// Local storage methods
export const saveCart = (cart) => {
    const totalAmount = cart.reduce((accumulator, currentElement) => {
        return accumulator + currentElement.price * currentElement.quantity;
    }, 0);
    const cartToSave = {
        elements: cart,
        total: totalAmount,
    }
    localStorage.setItem('cart', JSON.stringify(cartToSave));
}

export const getCart = () => {
    const cart = localStorage.getItem('cart');
    const loadedCart = cart ? JSON.parse(cart) : [];
    const result =
    {
        elements: loadedCart.elements,
        total: loadedCart.total,
    }
    return result;
}

// Manage the cart
export const clearCart = (noConfirm = false) => {
    const cart = getCart();
    if (cart.elements === undefined) {
        Swal.fire('Carrito vacío', '', 'info')
        return getCart();
    }
    if (!noConfirm) {
    Swal.fire({
        title: '¿Realmente desea vaciar el carrito?',
        showDenyButton: true,
        confirmButtonText: 'Si',
        denyButtonText: `No`,
    }).then((result) => {
        if (result.isConfirmed) {
            saveCart([]);
            const payload = {
                elements: [],
                total: 0,
            };
            window.location.reload();
            return payload
        } else if (result.isDenied) {
            Swal.fire('Carrito no vaciado', '', 'info')
            return cart;
        }
    })} else {
        saveCart([]);
            const payload = {
                elements: [],
                total: 0,
            };
            window.location.reload();
            return payload
    }
}

export const addElement = (
    product,
    quantity = 1
) => {
    const cart = getCart();
    if (cart.elements) {
        return saveCart([...cart.elements, {
            id: product._id,
            quantity,
            imageUrl: product.images[0],
            title: product.title,
            price: product.price,
            description: product.shortDescription,
            brand: product.brand,
            category: product.category
        }]);
    } else {
        return saveCart([{
            id: product._id,
            quantity,
            imageUrl: product.images[0],
            title: product.title,
            price: product.price,
            description: product.shortDescription,
            brand: product.brand,
            category: product.category
        }]);
    }
}

export const updateElement = (element, quantityDelta) => {
    const loadedCart = getCart();
    const newCart = loadedCart.elements.map((currentElement) => {
        if (currentElement.id === element.id) {
            return {
                ...currentElement,
                quantity: currentElement.quantity + quantityDelta,
            }
        } else {
            return currentElement;
        }
    });
    saveCart(newCart)
    const totalAmount = newCart.reduce((accumulator, currentElement) => {
        return accumulator + currentElement.price * currentElement.quantity;
    }, 0);
    const payload = {
        elements: newCart,
        total: totalAmount,
    }
    return payload;
}

export const removeElement = (selectedElement) => {
    const loadedCart = getCart();
    const newCart = loadedCart.elements.filter((element) => {
        return element.id !== selectedElement.id;
    });
    saveCart(newCart);
    const totalAmount = newCart.reduce((accumulator, currentElement) => {
        return accumulator + currentElement.price * currentElement.quantity;
    }, 0);
    const payload = {
        elements: newCart,
        total: totalAmount,
    }
    return payload;
}