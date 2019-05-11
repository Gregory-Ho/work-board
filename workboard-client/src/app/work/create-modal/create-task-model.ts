import {ITask} from '../../models/task';
import {TaskStatus} from "../../models/task-status-enum";

export class CreateTaskModel implements ITask {

  public id = 0;
  public created = new Date();
  public updated = this.created;
  public status = TaskStatus.ACTIVE;

  constructor(
    public summary: string,
    public description: string,
    public tags: string[],
    public dueDate: any
  ) {}

}
