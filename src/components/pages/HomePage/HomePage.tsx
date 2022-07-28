import Grid from "@mui/material/Grid";
import { Layout } from "@/components/layouts/Layout";
import { TodosTable } from "./components/TodosTable";
import { TodoFilters } from "./components/TodoFilters";
import Container from "@mui/material/Container";
import { TodosFilterProvider } from "./TodosFilterContext";
import { TodosPagination } from "./components/TodosPagination";

export const HomePage = () => {
  return (
    <TodosFilterProvider>
      <Layout>
        <TodoFilters />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TodosPagination />
              <TodosTable />
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </TodosFilterProvider>
  );
};
