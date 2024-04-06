import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../util/constants';
import { Task } from '../util/Task';
import { Observable } from 'rxjs';
import { NewTask } from '../util/NewTask';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private getAllTaskUrl = Constant.GET_ALL_TASK_URL;
  private getAllCategoryUrl = Constant.GET_ALL_CATEGORY_URL;
  private getAllUsersUrl = Constant.GET_ALL_USER_URL ;
  private createNewTaskUrl = Constant.CREATE_NEW_TASK_URL;

  constructor( private http: HttpClient ) {   }

  getAllTaskDetail() :Observable<Task[]> {
    return this.http.get <Task[]>(this.getAllTaskUrl);
  }

  getAllCategoryDetail () {
    return this.http.get(this.getAllCategoryUrl)
  }


  getAllUsers () {
    return this.http.get(this.getAllUsersUrl);
  }

  createNewTask( task : NewTask) {
    return this.http.post(this.createNewTaskUrl, task);
  }

}
