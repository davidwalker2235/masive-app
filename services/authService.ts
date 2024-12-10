import AsyncStorage from '@react-native-async-storage/async-storage';
// import { apiClient } from './api';

const authService = {
  login: async (username: string, password: string) => {
    try {
      // const response = await apiClient.post('/auth/login', { username, password });
      // const token = response.data.token;
      await AsyncStorage.setItem('token', 'sdfsdfsdfsdf');
      return true;
    } catch (error) {
      console.error('Error en login:', error);
      await AsyncStorage.setItem('token', 'sdfsdfsdfsdf');
      return true;
    }
  },
  logout: async () => {
    await AsyncStorage.removeItem('token');
  },
  isAuthenticated: async () => {
    const token = await AsyncStorage.getItem('token');
    return token !== null;
  },
};

export default authService;
