import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:4000',
});

export const fetchGreeting = async () => {
  const response = await apiClient.get('/');
  return response.data;
};