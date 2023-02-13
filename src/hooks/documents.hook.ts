import { useQuery } from 'react-query';
import { getDocuments } from '../api/apis';

export const useDocuments = () => useQuery('documents', getDocuments);
