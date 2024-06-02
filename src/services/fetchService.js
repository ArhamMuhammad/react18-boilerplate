// src/services/fetchService.js
const handleResponse = async (response) => {
    if (!response.ok) {
        const errorData = await response.json();
        const error = new Error(errorData.message || 'Something went wrong');
        error.status = response.status;
        throw error;
    }
    return response.json();
};

const fetchService = {
    get: async (url) => {
        const response = await fetch(url);
        return handleResponse(response);
    },

    post: async (url, data) => {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return handleResponse(response);
    },

    put: async (url, data) => {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return handleResponse(response);
    },

    delete: async (url) => {
        const response = await fetch(url, {
            method: 'DELETE',
        });
        return handleResponse(response);
    },
};

export default fetchService;
