import { FC } from "react";
import TablePagination from "@mui/material/TablePagination";
import { useTodosFilter } from "../TodosFilterContext";

export const TodosPagination: FC = () => {
  const { page, setPage } = useTodosFilter();

  const handleChangePage = (_event: unknown, newPage: number) => {
    // pagination of TablePagination starts from 0
    setPage(newPage + 1);
  };

  return (
    <TablePagination
      rowsPerPageOptions={[20]}
      component="div"
      count={200}
      rowsPerPage={20}
      page={page - 1}
      onPageChange={handleChangePage}
    />
  );
};
