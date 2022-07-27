import {
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from "@tanstack/react-query";
import { apiFetcher } from "@/services/ApiService";
import { Todo } from "@/types/todo";
import { AxiosError } from "axios";

type UpdateTodoInput = Partial<Omit<Todo, "id" | "userId">>;

const updateTodo = (todoId: number, fieldsToUpdate: UpdateTodoInput) =>
  apiFetcher<Todo>({
    method: "PATCH",
    url: `todos/${todoId}`,
    data: fieldsToUpdate,
    headers: {
      "Content-Type": "application/json",
    },
  });

export const useUpdateTodo = (
  options?: UseMutationOptions<
    Todo,
    AxiosError,
    { todoId: number; data: UpdateTodoInput }
  >
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (input) => updateTodo(input.todoId, input.data),
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
    ...options,
  });
};
