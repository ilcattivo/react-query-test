import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTodos } from "src/api/query/todos/useTodos";
import { TodoRow } from "./TodoRow/TodoRow";
import { useTodosFilter } from "../TodosFilterContext";
import { TodoTab } from "@/types/todo";

export const TodosTable = () => {
  const { search, currentTab } = useTodosFilter();
  const {
    data: todos,
    isError,
    isLoading,
  } = useTodos({
    title: search || undefined,
    completed:
      currentTab === TodoTab.All ? undefined : currentTab === TodoTab.Completed,
  });

  if (isError) {
    return <span>Something went wrong</span>;
  }

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>ID</TableCell>
              <TableCell>Created by</TableCell>
              <TableCell>User ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos?.map((todo) => (
              <TodoRow key={todo.id} todo={todo} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
