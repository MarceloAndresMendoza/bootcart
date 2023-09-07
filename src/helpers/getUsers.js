const ENDPOINT = process.env.API_ENDPOINT;

export const getUsers = async () => {
    try {
        const response = await fetch(`${ENDPOINT}/user`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'xaccesstoken': ''
            },
            // body: JSON.stringify({ key: 'value' })
        });
        if (!response.ok) {
            // Handle non-successful responses here
            throw new Error('Failed to fetch data');
        }
        return response;
    } catch (error) {
        console.error('Error: ', error)
        throw error;
    }
}