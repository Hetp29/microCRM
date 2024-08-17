import axios, { AxiosResponse } from 'axios'

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api'

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try {
        const response = await axios.post(`${API_BASE_URL}/register/`, {
            username: formData.get('username'),
            password: formData.get('password'),
        });
        console.log('User registered:', response.data);
    } catch(error) {
        console.error('Error during registration:', error);
    }
};