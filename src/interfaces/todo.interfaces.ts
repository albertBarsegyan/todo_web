export enum TodoStatusVariants {
  'in_progress' = 'in_progress',
  'done' = 'done',
}

type TodoStatus = {
  name: TodoStatusVariants;
  id: number;
};

export interface ITodo {
  id: number;
  text: string;
  userId: number;
  status: TodoStatus;
}
