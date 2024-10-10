import axios from 'axios';

const API_URL = 'http://localhost:5000/api/customers';

export const createCustomer = async (customer) => {
    return await axios.post(API_URL, customer);
};

export const getCustomers = async () => {
    return await axios.get(API_URL);
};

export const updateCustomer = async (id, customer) => {
    return await axios.put(`${API_URL}/${id}`, customer);
};

export const deleteCustomer = async (id) => {
    return await axios.delete(`${API_URL}/${id}`);
};