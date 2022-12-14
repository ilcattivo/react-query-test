import { apiFetcher } from "@/services/ApiService";
import { Todo } from "@/types/todo";
import { useQuery } from "@tanstack/react-query";

export type TodosParams = {
  title_like?: string;
  completed?: boolean;
  _page?: number;
};

export const getTodos = () =>
  apiFetcher<Todo[]>({
    method: "GET",
    url: "todos",
    params: {
      _limit: 20,
    },
  });

export const useTodos = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
};
