import { apiFetcher } from "@/services/ApiService";
import { Todo } from "@/types/todo";
import { useInfiniteQuery } from "@tanstack/react-query";

const PAGE_SIZE = 20;

export const getTodos = (page: number) =>
  apiFetcher<Todo[]>({
    method: "GET",
    url: "todos",
    params: {
      _page: page,
      _limit: PAGE_SIZE,
    },
  });

export const useInfiniteTodos = () => {
  return useInfiniteQuery(
    ["infinite-todos"],
    ({ pageParam = 0 }) => getTodos(pageParam + 1),
    {
      getNextPageParam: (data, pages) =>
        data.length === PAGE_SIZE ? pages.length : false,
    }
  );
};
