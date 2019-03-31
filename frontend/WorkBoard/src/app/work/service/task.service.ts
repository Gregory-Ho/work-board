import {Injectable} from "@angular/core";
import {Observable, throwError} from "rxjs";
import {ITask} from "../../models/task";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class TaskService {

  private taskUrl = "assets/tasks.json";

  constructor(private httpClient: HttpClient) {
  }

  getTasks(): Observable<ITask[]> {
    return this.httpClient.get<ITask[]>(this.taskUrl).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.errorHandler)
    );
  }

  private errorHandler(error: HttpErrorResponse) {
    let errorMessage = `Status Code: ${error.status}\nError: ${error.message}`;
    return throwError(errorMessage);
  }
}
