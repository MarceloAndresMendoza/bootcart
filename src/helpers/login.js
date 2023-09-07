import { API_ENDPOINT } from "../config/env";
const ENDPOINT = API_ENDPOINT;

export const login = async (username, password) => {
    try {
        const response = await fetch(`${ENDPOINT}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "email": username,
                "password": password
            })
        });
        if (response.status === 200) {
            const responseData = await response.text();
            localStorage.setItem('authtoken', responseData.replace(/"/g, '')); // Store the token in localStorage
            return true;
        }
        return false;
    } catch (error) {
        return false
    }
}
