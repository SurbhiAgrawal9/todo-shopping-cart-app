import axios from 'axios';

// Replace `API_URL` with the actual API URL you want to fetch data from
const API_URL = 'https://api.example.com';

export const fetchWeatherData = async () => {
    try {
        const response = await axios.get(`${API_URL}/weather`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch weather data');
    }
};

export const fetchNewsData = async () => {
    try {
        const response = await axios.get(`${API_URL}/news`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch news data');
    }
};

export const fetchMovieData = async () => {
    try {
        const response = await axios.get(`${API_URL}/movies`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch movie data');
    }
};
