import { getTodos, TodosParams } from "@/api/query/todos/useTodos";
import { TodoTab } from "@/types/todo";
import { useQueryClient } from "@tanstack/react-query";
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useDidUpdateEffect } from "src/hooks/useDidUpdateEffect";

type ContextValues = {
  search: string;
  currentTab: TodoTab;
  page: number;
  filters: TodosParams;
  setSearch: (search: string) => void;
  setCurrentTab: (tab: TodoTab) => void;
  setPage: (page: number) => void;
};

const TodosFilterContext = createContext<ContextValues>({} as ContextValues);

export const TodosFilterProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const queryClient = useQueryClient();

  const [currentTab, setCurrentTab] = useState<TodoTab>(TodoTab.All);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  useDidUpdateEffect(() => {
    setPage(1);
  }, [search, currentTab]);

  const filters = useMemo<TodosParams>(() => {
    return {
      title_like: search || undefined,
      completed:
        currentTab === TodoTab.All
          ? undefined
          : currentTab === TodoTab.Completed,
      _page: page,
    };
  }, [currentTab, page, search]);

  useEffect(() => {
    const nextPageParams: TodosParams = {
      ...filters,
      _page: filters._page! + 1,
    };
    queryClient.prefetchQuery(["todos", nextPageParams], () =>
      getTodos(nextPageParams)
    );
  }, [filters, queryClient]);

  return (
    <TodosFilterContext.Provider
      value={{
        search,
        currentTab,
        page,
        filters,
        setSearch,
        setCurrentTab,
        setPage,
      }}
    >
      {children}
    </TodosFilterContext.Provider>
  );
};

export const useTodosFilter = () => {
  return useContext(TodosFilterContext);
};
