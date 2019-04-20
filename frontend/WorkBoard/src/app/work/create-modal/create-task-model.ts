import {ITask} from '../../models/task';

export class CreateTaskModel implements ITask {

  public id = 0;
  public created = new Date();
  public updated = this.created;

  constructor(
    public summary: string,
    public description: string,
    public tags: string[],
    public dueDate: any
  ) {}

}
