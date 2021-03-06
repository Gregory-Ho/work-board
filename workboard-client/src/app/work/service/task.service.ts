import {Injectable} from "@angular/core";
import {Observable, throwError} from "rxjs";
import {ITask} from "../../models/task";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {CreateTaskModel} from '../create-modal/create-task-model';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class TaskService {

  private taskUrl = `http://${environment.serverBaseURL}/api/tasks`;

  constructor(private httpClient: HttpClient) {
  }

  getTasks(): Observable<ITask[]> {
    return this.httpClient.get<ITask[]>(this.taskUrl).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.errorHandler)
    );
  }

  createTask(body: CreateTaskModel): Observable<ITask> {
    return this.httpClient.post<CreateTaskModel>(this.taskUrl, body).pipe(
      tap(data => console.log(`Sending Request To Create Task: ${JSON.stringify(data)}`)),
      catchError(this.errorHandler)
    );
  }

  getTaskById(id: number): Observable<ITask> {
    return this.httpClient.get<ITask>(`${this.taskUrl}/${id}`).pipe(
      catchError(this.errorHandler)
    );
  }

  updateTaskById(task: ITask): Observable<ITask> {
    return this.httpClient.put<ITask>(`${this.taskUrl}/${task.id}`, task).pipe(
      catchError(this.errorHandler)
    );
  }

  deleteTaskById(id: number): Observable<ITask> {
    return this.httpClient.delete<ITask>(`${this.taskUrl}/${id}`).pipe(
      catchError(this.errorHandler)
    );
  }

  private errorHandler(error: HttpErrorResponse) {
    const errorMessage = `Status Code: ${error.status}\nError: ${error.message}`;
    return throwError(errorMessage);
  }
}
