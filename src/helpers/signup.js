import { API_ENDPOINT } from "../config/env";
const ENDPOINT = API_ENDPOINT;

export const signup = async (data) => {
    console.log(data)
    try {
        const response = await fetch(`${ENDPOINT}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        if (response.status === 201) {
            const responseData = await response.text();
            return true;
        }
        return false;
    } catch (error) {
        console.error(error)
        return false
    }
}
