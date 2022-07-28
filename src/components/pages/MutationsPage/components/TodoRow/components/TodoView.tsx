import { FC } from "react";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { Todo } from "@/types/todo";
import { useUser } from "@/api/query/users/useUser";

type TodoViewProps = {
  todo: Todo;
  expanded: boolean;
  onExpand: () => void;
};

export const TodoView: FC<TodoViewProps> = ({
  todo,
  expanded,
  onExpand: handleExpand,
}) => {
  const { data: author } = useUser(todo.userId);

  return (
    <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      <TableCell>
        <IconButton aria-label="expand row" size="small" onClick={handleExpand}>
          {expanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
      </TableCell>
      <TableCell component="th" scope="row">
        {todo.id}
      </TableCell>
      <TableCell>{author ? `@${author.username}` : ""}</TableCell>
      <TableCell>{todo.userId}</TableCell>
      <TableCell>{todo.title}</TableCell>
      <TableCell>
        {todo.completed ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
      </TableCell>
    </TableRow>
  );
};
