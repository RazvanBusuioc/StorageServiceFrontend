// axiosUtils.js
import axios from 'axios';

const instance = axios.create({
  // You can set global configurations here, such as baseURL, headers, etc.
  baseURL: 'http://localhost:3000', // Adjust the base URL according to your server
});

// Optional: Add request interceptors for global configurations

// Optional: Add response interceptors for global error handling

export const axiosInstance = instance;

// Example function to perform a POST request
export const postRequest = async (url, data, config = { headers: { 'Content-Type': 'multipart/form-data'}}) => {
    const response = await instance.post(url, data, config);
    return response.data;
};

export const deleteRequest = async (url, parameters, config = {}) => {
    const response = await instance.delete(url, {params: parameters}, config);
    return response.data;
};

export const getRequest = async (url, parameters) => {
    const response = await instance.get(url, {params: parameters});
    return response.data;
};