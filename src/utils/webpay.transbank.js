import { axiosClient } from "../config/axios.api";

// body data:
const buyOrder = 'marceloandres-12345678';
const sessionId = 'bootcart-dev-12345678';
const testAmount = 1000;
const returnUrl = 'http://192.168.5.2:5173/confirm';

export const PostWebpayPlusOrder = async (buyOrder, sessionId, amount = testAmount) => {
    try {
        const response = await axiosClient.post('/payment', { buyOrder, sessionId, amount, returnUrl });
        return response.data
    } catch (error) {
        console.error(error.response.status);
        return error?.response?.status;
    }
}