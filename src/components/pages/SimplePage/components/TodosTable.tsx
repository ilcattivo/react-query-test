import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TodoRow } from "./TodoRow/TodoRow";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Todo } from "@/types/todo";

export const TodosTable = () => {
  const { data, isError, isLoading } = useQuery(["todos"], () =>
    axios.get("http://localhost:3001/todos", {
      params: {
        _limit: 20,
      },
    })
  );

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
              <TableCell>ID</TableCell>
              <TableCell>Created by</TableCell>
              <TableCell>User ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.data?.map((todo: Todo) => (
              <TodoRow key={todo.id} todo={todo} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
