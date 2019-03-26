export interface ITask {
  id: number;
  summary: string;
  dueDate: Date;
  description: string;
  tags: Array<string>;
}
