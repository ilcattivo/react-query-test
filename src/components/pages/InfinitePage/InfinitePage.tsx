import Grid from "@mui/material/Grid";
import { Layout } from "@/components/layouts/Layout";
import { TodosTable } from "./components/TodosTable";
import Container from "@mui/material/Container";

export const InfinitePage = () => {
  return (
    <Layout>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TodosTable />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};
