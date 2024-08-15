import axios, { AxiosResponse } from 'axios'

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api'

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

export interface Record {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zipcode: string;
    created_at: string;
}

export const getRecords = async (): Promise<Record[]> => {
    const response: AxiosResponse<Record[]> = await apiClient.get('/records/');
    return response.data;
};

export const getRecordById = async (id: number): Promise<Record> => {
    const response: AxiosResponse<Record> = await apiClient.get(`/records/${id}/`);
    return response.data;
};

export const addRecord = async (record: Omit<Record, 'id' | 'created_at'>): Promise<Record> => {
    const response: AxiosResponse<Record> = await apiClient.post('/records/', record);
    return response.data;
};

export const updateRecord = async (id: number, record: Partial<Record>): Promise<Record> => {
    const response: AxiosResponse<Record> = await apiClient.put(`/records/${id}/`, record);
    return response.data;
};

export const deleteRecord = async (id: number): Promise<void> => {
    await apiClient.delete(`/records/${id}/`);
};