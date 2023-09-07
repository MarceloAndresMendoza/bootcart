import { API_ENDPOINT } from "../config/env";
const ENDPOINT = API_ENDPOINT;

const checkTokenCookie = () => {
    return localStorage.getItem("authtoken");
}

export const getCurrentUserInfo = async () => {
    const localToken = checkTokenCookie();
    if (localToken === undefined) {
        const error = new Error('There is no token, login again.');
        throw error;
    };
    try {
        const response = await fetch(`${ENDPOINT}/userprofile`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'xaccesstoken': localToken
            },
        });
        if (response.status === 200) {
            return response.json();
        }
        if (response.status === 404) {
            return response.json();
        }
    } catch (error) {
        console.error(error)
        return null
    }
}