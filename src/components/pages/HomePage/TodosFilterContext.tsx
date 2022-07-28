import { TodoTab } from "@/types/todo";
import { createContext, FC, ReactNode, useContext, useState } from "react";
import { useDidUpdateEffect } from "src/hooks/useDidUpdateEffect";

const TodosFilterContext = createContext<{
  search: string;
  currentTab: TodoTab;
  page: number;
  setSearch: (search: string) => void;
  setCurrentTab: (tab: TodoTab) => void;
  setPage: (page: number) => void;
}>({
  search: "",
  currentTab: TodoTab.All,
  page: 1,
  setSearch: () => {},
  setCurrentTab: () => {},
  setPage: () => {},
});

export const TodosFilterProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentTab, setCurrentTab] = useState<TodoTab>(TodoTab.All);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  useDidUpdateEffect(() => {
    setPage(1);
  }, [search, currentTab]);

  return (
    <TodosFilterContext.Provider
      value={{ search, currentTab, page, setSearch, setCurrentTab, setPage }}
    >
      {children}
    </TodosFilterContext.Provider>
  );
};

export const useTodosFilter = () => {
  return useContext(TodosFilterContext);
};
