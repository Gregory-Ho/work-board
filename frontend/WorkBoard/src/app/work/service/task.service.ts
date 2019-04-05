import {Injectable} from "@angular/core";
import {Observable, throwError} from "rxjs";
import {ITask} from "../../models/task";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {CreateTaskModel} from '../create-modal/create-task-model';

@Injectable({
  providedIn: "root"
})
export class TaskService {

  private taskUrl = "http://localhost:8080/api/tasks";

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

  private errorHandler(error: HttpErrorResponse) {
    let errorMessage = `Status Code: ${error.status}\nError: ${error.message}`;
    return throwError(errorMessage);
  }
}
