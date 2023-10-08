import axios from 'axios';

const API_BASE_URL = 'https://dummyjson.com';

export const loginApi = async (username: String, password: String) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/login`, {
            username,
            password,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getUserDataApi = async (id: String) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/users/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getProductsApi = async (options: { limit: number; skip: number }) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/products?limit=${options.limit}&skip=${options.skip}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

