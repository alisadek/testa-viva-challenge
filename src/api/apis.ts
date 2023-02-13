import axios from 'axios';
import { Document } from '../types';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  headers: {
    Accept: 'application/json'
  }
});

export const getDocuments = () => api.get<Document[]>('/documents').then(res => res.data);
