import axios from 'axios';
import { Comment, Document } from '../types';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  headers: {
    Accept: 'application/json'
  }
});

export const getDocuments = () => api.get<Document[]>('/documents').then(res => res.data);
export const getComments = () => api.get<Comment[]>('/comments').then(res => res.data);
export const addComment = (comment: Partial<Comment>) =>
  api.post<Comment>(`/comments`, comment).then(res => res.data);

export const updateComment = ({ id, ...updatedComment }: Partial<Comment>) =>
  api.put(`/comments/${id}`, updatedComment).then(res => res.data);
export const deleteComment = (id: string) => api.delete(`/comments/${id}`).then(res => res.data);
