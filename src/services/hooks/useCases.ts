import { useQuery } from 'react-query'
import { ref } from 'yup';
import { api } from '../api';

export async function getCases() {
  const { data } = await api.get('/cases')

  return data
}

export function useCases() {

  return useQuery('cases', () => getCases(), {
    staleTime: 1000 * 60 //5s
  })
}