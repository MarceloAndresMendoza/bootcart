import { API_ENDPOINT } from "../config/env";
const ENDPOINT = API_ENDPOINT;

const checkTokenCookie = () => {
    return localStorage.getItem("authtoken");
}

export const tokenCheck = async (deleteLocalTokenOnFail = true) => {
    // This is only a commodity method to redirect the user to the correct
    // part of the app. The server will anyway reject any attempt to get data
    // if token is not valid.
    const localToken = checkTokenCookie();
    if (localToken === undefined) {
        return false
    };
    try {
        const response = await fetch(`${ENDPOINT}/checklogin`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'xaccesstoken': localToken
            },
        });
        if (response.status === 200) {
            return true;
        }
        deleteLocalTokenOnFail ?? localStorage.removeItem('authtoken');
        return false;
    } catch (error) {
        console.error(error)
        return false
    }
}