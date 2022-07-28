import { apiFetcher } from "@/services/ApiService";
import { Todo } from "@/types/todo";
import { InfiniteData, useQuery, useQueryClient } from "@tanstack/react-query";

export const getTodo = (todoId: number) =>
  apiFetcher<Todo>({
    method: "GET",
    url: `todos/${todoId}`,
  });

export const useTodo = (todoId: number) => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ["todos", todoId],
    queryFn: () => getTodo(todoId),
    initialData: () => {
      const allTodos = queryClient.getQueryData(["infinite-todos"]) as
        | InfiniteData<Todo[]>
        | undefined;

      return allTodos?.pages.flat().find((todo) => todo.id === todoId);
    },
  });
};
