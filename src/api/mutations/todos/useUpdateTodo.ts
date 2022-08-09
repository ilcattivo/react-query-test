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
    ...options,

    /**
     * Variant 1 - refetch the data
     */
    // onSuccess: () => {
    //   queryClient.invalidateQueries(["todos"]);
    // },

    /**
     * Variant 2 - manually set the data after update without refetching
     */
    // onSuccess: (todo) => {
    //   queryClient.setQueriesData(["todos"], (old: Todo[] | undefined) => {
    //     if (!old) {
    //       return undefined;
    //     }

    //     return old.map((oldTodo) => (oldTodo.id === todo.id ? todo : oldTodo));
    //   });
    // },

    /**
     * Variant 3 - optimistic update
     */
    // onMutate: async (newTodo: { todoId: number; data: UpdateTodoInput }) => {
    //   // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
    //   await queryClient.cancelQueries(["todos"]);

    //   // Snapshot the previous value
    //   const previousTodos = queryClient.getQueryData<Todo[]>(["todos"]);

    //   // Optimistically update to the new value
    //   if (previousTodos) {
    //     queryClient.setQueriesData<Todo[]>(
    //       ["todos"],
    //       previousTodos.map((prevTodo) =>
    //         prevTodo.id === newTodo.todoId
    //           ? { ...prevTodo, ...newTodo.data }
    //           : prevTodo
    //       )
    //     );
    //   }

    //   return { previousTodos };
    // },
    // // If the mutation fails, use the context returned from onMutate to roll back
    // onError: (_err, _variables, context) => {
    //   if (context?.previousTodos) {
    //     queryClient.setQueryData<Todo[]>(["todos"], context.previousTodos);
    //   }
    // },
    // Always refetch after error or success:
    // onSettled: () => {
    //   queryClient.invalidateQueries(["todos"]);
    // },
  });
};
