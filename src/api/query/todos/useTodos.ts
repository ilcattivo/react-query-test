import { apiFetcher } from "@/services/ApiService";
import { Todo } from "@/types/todo";
import { useQuery } from "@tanstack/react-query";

type Params = {
  title?: string;
  completed?: boolean;
};

export const getTodos = (params?: Params) =>
  apiFetcher<Todo[]>({
    method: "GET",
    url: "todos",
    params: {
      title_like: params?.title,
      completed: params?.completed,
    },
  });

export const useTodos = (params?: Params) => {
  return useQuery({
    queryKey: ["todos", params],
    queryFn: () => getTodos(params),
    keepPreviousData: true,
  });
};
