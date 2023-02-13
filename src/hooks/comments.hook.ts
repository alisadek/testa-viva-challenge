import { useMemo } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { addComment, deleteComment, getComments, updateComment } from '../api/apis';

export const useComments = () => useQuery('comments', getComments);

export function useCommentsMutation() {
  const queryClient = useQueryClient();
  const invalidateComments = useMemo(
    () => ({
      onSuccess: () => {
        queryClient.invalidateQueries({
          predicate: query => query.queryKey.indexOf('comments') >= 0
        });
      }
    }),
    [queryClient]
  );

  return {
    add: useMutation(addComment, invalidateComments),
    update: useMutation(updateComment, invalidateComments),
    remove: useMutation(deleteComment, invalidateComments)
  };
}
