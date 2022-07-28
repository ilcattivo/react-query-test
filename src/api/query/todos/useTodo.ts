import { apiFetcher } from "@/services/ApiService";
import { Todo } from "@/types/todo";
import { useQuery } from "@tanstack/react-query";

export const getTodo = (todoId: number) =>
  apiFetcher<Todo>({
    method: "GET",
    url: `todo/${todoId}`,
  });

export const useTodo = (todoId: number) => {
  return useQuery({
    queryKey: ["todos", todoId],
    queryFn: () => getTodo(todoId),
    keepPreviousData: true,
  });
};
