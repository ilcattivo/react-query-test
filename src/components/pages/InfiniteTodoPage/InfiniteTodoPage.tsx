import { useTodo } from "@/api/query/todos/useTodo";
import { Layout } from "@/components/layouts/Layout";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";

export const InfiniteTodoPage = () => {
  const { query } = useRouter();
  const { data: todo, isLoading, isError } = useTodo(Number(query.todoId));

  return (
    <Layout>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h2>Todo Id: {query.todoId}</h2>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};
