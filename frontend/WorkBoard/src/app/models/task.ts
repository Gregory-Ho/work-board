export interface ITask {
  id: number;
  summary: string;
  dueDate: Date;
  created: Date;
  updated: Date;
  description: string;
  tags: Set<string>;
}
