import { FC } from "react";
import { Todo } from "@/types/todo";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { useUser } from "@/api/query/users/useUser";

type TodoRowProps = {
  todo: Todo;
};

export const TodoRow: FC<TodoRowProps> = ({ todo }) => {
  const { data: author } = useUser(todo.userId);

  return (
    <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
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
