import axios from 'axios';
import { Documents } from '../types';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`
});

export const getDocuments = () => api.get<Documents>('/documents').then(res => res.data);
