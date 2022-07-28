import { TodoTab } from "@/types/todo";
import { createContext, FC, ReactNode, useContext, useState } from "react";

const TodosFilterContext = createContext<{
  search: string;
  currentTab: TodoTab;
  setSearch: (search: string) => void;
  setCurrentTab: (tab: TodoTab) => void;
}>({
  search: "",
  currentTab: TodoTab.All,
  setSearch: () => {},
  setCurrentTab: () => {},
});

export const TodosFilterProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentTab, setCurrentTab] = useState<TodoTab>(TodoTab.All);
  const [search, setSearch] = useState("");

  return (
    <TodosFilterContext.Provider
      value={{ search, currentTab, setSearch, setCurrentTab }}
    >
      {children}
    </TodosFilterContext.Provider>
  );
};

export const useTodosFilter = () => {
  return useContext(TodosFilterContext);
};
