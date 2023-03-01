import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';
import { AddArticle, AddTag, EditArticle, EditTag } from './types';

export function useQuery(url: string, options?: RequestInit) {
  const fetcher = (url: any) =>
    fetch(url, {
      ...options,
    }).then((res) => res.json());

  const { data, error, isLoading } = useSWR(url, fetcher);

  return {
    data,
    isLoading,
    error,
  };
}

export function useMutation(url: string, options?: RequestInit) {
  const fetcher = (url: any) =>
    fetch(url, {
      ...options,
    }).then((res) => res.json());

  const { trigger, data, error } = useSWRMutation(url, fetcher);

  return {
    trigger,
    data,
    error,
  };
}

export function useAddTag({ name, createdBy, state }: AddTag) {
  const { trigger, data, error } = useMutation(`/api/v1/tags`, {
    method: 'POST',
    body: JSON.stringify({ name, created_by: createdBy, state }),
  });
  return {
    trigger,
    data,
    error,
  };
}

export function useGetTags() {
  const { data, isLoading, error } = useQuery(`/api/v1/tags`);
  return {
    data,
    isLoading,
    error,
  };
}

export function useEditTag({ id, name, modifiedBy, state }: EditTag) {
  const { trigger, data, error } = useMutation(`/api/v1/tags/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ name, modified_by: modifiedBy, state }),
  });
  return {
    trigger,
    data,
    error,
  };
}

export function useDeleteTag(id: string) {
  const { trigger, data, error } = useMutation(`/api/v1/tags/${id}`, {
    method: 'DELETE',
  });
  return {
    trigger,
    data,
    error,
  };
}

export function useAddArticle({
  tagId,
  title,
  desc,
  content,
  createdBy,
  coverImageUrl,
  state,
}: AddArticle) {
  const { trigger, data, error } = useMutation(`/api/v1/articles`, {
    method: 'POST',
    body: JSON.stringify({
      tag_id: tagId,
      title,
      desc,
      content,
      created_by: createdBy,
      cover_image_url: coverImageUrl,
      state,
    }),
  });
  return {
    trigger,
    data,
    error,
  };
}

export function useGetArticles() {
  const { data, isLoading, error } = useQuery(`/api/v1/articles`);
  return {
    data,
    isLoading,
    error,
  };
}

export function useGetArticleById(id: string) {
  const { data, error, isLoading } = useQuery(`/api/v1/articles/${id}`);

  return {
    data,
    isLoading,
    error,
  };
}

export function useEditArticle({
  id,
  tagId,
  title,
  desc,
  content,
  modifiedBy,
  coverImageUrl,
  state,
}: EditArticle) {
  const { trigger, data, error } = useMutation(`/api/v1/articles`, {
    method: 'POST',
    body: JSON.stringify({
      id,
      tag_id: tagId,
      title,
      desc,
      content,
      modified_by: modifiedBy,
      cover_image_url: coverImageUrl,
      state,
    }),
  });
  return {
    trigger,
    data,
    error,
  };
}

export function useDeleteArticle(id: string) {
  const { trigger, data, error } = useMutation(`/api/v1/articles/${id}`, {
    method: 'DELETE',
  });
  return {
    trigger,
    data,
    error,
  };
}

// export default {
//   useAddTag,
//   useGetTags,
//   useEditTag,
//   useDeleteTag,
//   useAddArticle,
//   useGetArticles,
//   useGetArticleById,
//   useEditArticle,
//   useDeleteArticle,
// };
