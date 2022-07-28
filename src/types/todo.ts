export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const enum TodoTab {
  All,
  Completed,
  Uncompleted,
}
