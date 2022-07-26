import { apiFetcher } from "@/services/ApiService";
import { Todo } from "@/types/todo";
import { useQuery } from "@tanstack/react-query";

export const getTodos = () =>
  apiFetcher<Todo[]>({
    method: "GET",
    url: "todos",
  });

export const useTodos = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
};
