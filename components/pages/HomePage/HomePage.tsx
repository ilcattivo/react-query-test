import Grid from "@mui/material/Grid";
import { Layout } from "@/components/layouts/Layout";
import { TodosTable } from "./components/TodosTable";

export const HomePage = () => {
  return (
    <Layout>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TodosTable />
        </Grid>
      </Grid>
    </Layout>
  );
};
