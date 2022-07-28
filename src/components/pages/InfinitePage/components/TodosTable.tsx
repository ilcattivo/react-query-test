import Paper from "@mui/material/Paper";
import { Fragment, useEffect } from "react";
import InfiniteLoader from "react-window-infinite-loader";
import { FixedSizeList } from "react-window";
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
      {/* <InfiniteLoader
        isItemLoaded={isItemLoaded}
        itemCount={data?.pages.length || 0}
        loadMoreItems={loadMoreItems}
      >
        {({ onItemsRendered, ref }) => (
          <FixedSizeList
            className="List"
            height={400}
            innerElementType={InnerTable}
            width={1100}
            itemCount={data?.pages.length || 0}
            itemSize={62.5}
            onItemsRendered={onItemsRendered}
            ref={ref}
          >
            {Item}
          </FixedSizeList>
        )}
      </InfiniteLoader> */}
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
