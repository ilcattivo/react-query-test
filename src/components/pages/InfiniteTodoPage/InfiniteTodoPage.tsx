import { useTodo } from "@/api/query/todos/useTodo";
import Title from "@/components/atoms/Title";
import { Layout } from "@/components/layouts/Layout";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";

export const InfiniteTodoPage = () => {
  const { query } = useRouter();
  const { data: todo, isLoading, isError } = useTodo(Number(query.todoId));

  const renderContent = () => {
    if (isError) {
      return <span>Something went wrong</span>;
    }

    if (isLoading) {
      return <span>Loading...</span>;
    }

    return (
      <div>
        <Title>
          Todo: #{todo.id} {todo.title}
        </Title>
        <pre>{JSON.stringify(todo, null, 2)}</pre>
      </div>
    );
  };

  return (
    <Layout>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {renderContent()}
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};
