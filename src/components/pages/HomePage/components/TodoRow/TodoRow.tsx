import { FC, Fragment, useState, useCallback } from "react";
import { Todo } from "@/types/todo";
import { TodoView } from "./components/TodoView";
import { TodoForm } from "./components/TodoForm";

type TodoRowProps = {
  todo: Todo;
};

export const TodoRow: FC<TodoRowProps> = ({ todo }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggleExpand = useCallback(() => {
    setExpanded((prev) => !prev);
  }, []);

  return (
    <Fragment>
      <TodoView todo={todo} expanded={expanded} onExpand={handleToggleExpand} />
      <TodoForm todo={todo} expanded={expanded} />
    </Fragment>
  );
};
