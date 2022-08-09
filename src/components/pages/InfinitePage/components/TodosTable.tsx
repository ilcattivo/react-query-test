import Paper from "@mui/material/Paper";
import { Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import { TodoRow } from "./TodoRow/TodoRow";
import TableRow from "@mui/material/TableRow";
import { useInfiniteTodos } from "@/api/query/todos/useInfiniteTodos";

export const TodosTable: React.FC = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
    isLoading,
  } = useInfiniteTodos();

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  if (isError) {
    return <span>Something went wrong</span>;
  }

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <Paper>
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
            {/* 
              TODO: rendering hundreds of items may slow down the user's device
              Consider using something like react-window + react-window-infinite-loader in real projects to add virtualization
            */}
            {data.pages.map((page, index) => (
              <Fragment key={index}>
                {page.map((todo) => (
                  <TodoRow todo={todo} key={todo.id} />
                ))}
              </Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <button
        ref={ref}
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage
          ? "Loading more..."
          : hasNextPage
          ? "Load More"
          : "Nothing more to load"}
      </button>
    </Paper>
  );
};
