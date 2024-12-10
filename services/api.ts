import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export const apiClient = axios.create({
  baseURL: 'https://api.tuservidor.com',
  headers: {
    'Content-Type': 'application/json',
  },
});
