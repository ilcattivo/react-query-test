import { apiFetcher } from "@/services/ApiService";
import { Todo } from "@/types/todo";

export const getTodos = () =>
  apiFetcher<Todo[]>({
    method: "GET",
    url: "todos",
  });
