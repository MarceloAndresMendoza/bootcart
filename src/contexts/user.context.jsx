// ====================================================
// USER CONTEXT
// Author: Marcelo Mendoza
// Created: 2023-10-10
// Description: Creation of the user context to be used
//              in the application
// ====================================================
import { createContext, useReducer } from 'react';
import { userLogin, verifyToken, signUpUser } from './user.methods';
import swal from 'sweetalert';

// Creation of the context
export const UserContext = createContext();

// Creation of the reducer
const userReducer = (state, action) => {
    switch (action.type) {
        case 'USER_LOGGED':
            localStorage.setItem('authtoken', action.payload);
            return { ...state, isAuthenticated: true };
        case 'USER_LOGGED_OUT':
            localStorage.removeItem('authtoken');
            return { ...state, user: null, isAuthenticated: false };
        case 'USER_UPDATED':
            return { ...state, user: action.payload, isAuthenticated: true };
        case 'USER_GOT_INFO':
            if (action.payload) {
                return { ...state, user: action.payload, isAuthenticated: true };
            } else {
                return { ...state, user: action.payload, isAuthenticated: false };
            }
        case 'USER_CREATED':
            if (action.payload === 409) {
                swal({
                    title: 'Usuario ya existe',
                    text: 'El usuario ya existe, por favor intente con otro correo electrónico o inicie sesión.',
                    icon: 'warning',
                    buttons: ['OK'],
                    dangerMode: true,
                });
                return { ...state, user: null, isAuthenticated: false };
            }
            if (action.payload === 201) {
                swal({
                    title: 'Usuario creado',
                    text: 'El usuario ha sido creado con éxito, por favor inicie sesión.',
                    icon: 'success',
                    buttons: ['OK'],
                    dangerMode: false,
                });
                return { ...state, user: null, isAuthenticated: false };
            }
        default:
            return state;
    }
}

// Creation of the provider
export const UserProvider = ({ children }) => {
    const userInitialState = {
        isAuthenticated: false,
        user: null
    }
    const [userState, dispatch] = useReducer(userReducer, userInitialState)

    // Context's methods
    const login = async (email, password) => {
        const tokenRequest = await userLogin(email, password);
        if (tokenRequest === 500) {
            swal({
                title: 'Error del servidor',
                text: 'El servidor no responde, por favor intente de nuevo.',
                icon: 'error',
                buttons: ['OK'],
                dangerMode: true,
            });
            return;
        }
        if (tokenRequest === 404 || tokenRequest === 403) {
            swal({
                title: 'Datos incorrectos',
                text: 'El usuario no existe o la contraseña es incorrecta, por favor intente de nuevo.',
                icon: 'warning',
                buttons: ['OK'],
                dangerMode: true,
            });
            return;
        }
        if (tokenRequest) {
            dispatch({
                type: 'USER_LOGGED',
                payload: tokenRequest.data
            })
        };
    }
    const logout = () => { dispatch({ type: 'USER_LOGGED_OUT' }) };
    const getUserInfo = async () => {
        const verified = await verifyToken();
        dispatch({ type: 'USER_GOT_INFO', payload: verified })
    }
    const signUp = async (dataForm) => {
        const signedUp = await signUpUser(dataForm);
        dispatch ({ type: 'USER_CREATED', payload: signedUp })
    }

    return (
        <UserContext.Provider
            value={{
                isAuthenticated: userState.isAuthenticated,
                user: userState.user,
                login,
                logout,
                getUserInfo,
                signUp
            }}
        >
            {children}
        </UserContext.Provider>
    )
}
