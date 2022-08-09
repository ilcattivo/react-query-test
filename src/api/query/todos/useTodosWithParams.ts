import { apiFetcher } from "@/services/ApiService";
import { Todo } from "@/types/todo";
import { useQuery } from "@tanstack/react-query";

export type TodosParams = {
  title_like?: string;
  completed?: boolean;
  _page?: number;
};

export const getTodos = (params?: TodosParams) =>
  apiFetcher<Todo[]>({
    method: "GET",
    url: "todos",
    params: {
      ...params,
      _limit: 20,
    },
  });

export const useTodos = (params?: TodosParams) => {
  return useQuery({
    queryKey: ["todos", params],
    queryFn: () => getTodos(params),
    keepPreviousData: true,
  });
};
