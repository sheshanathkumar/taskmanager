import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../util/constants';
import { Task } from '../util/Task';
import { Observable } from 'rxjs';
import { NewTask } from '../util/NewTask';
import { Status } from '../util/Status';
import { ModelApiResponse } from '../util/modelApiResponse';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private getAllTaskUrl = Constant.GET_ALL_TASK_URL;
  private getAllCategoryUrl = Constant.GET_ALL_CATEGORY_URL;
  private getAllUsersUrl = Constant.GET_ALL_USER_URL ;
  private createNewTaskUrl = Constant.CREATE_NEW_TASK_URL;
  private getStatusByIdUrl = Constant.GET_STATUS_BY_TASK_ID_URL;
  private addStatusInTaskUrl = Constant.ADD_NEW_STATUS_IN_TASK_URL;
  private updateCategoryOfTaskUrl = Constant.UPDATE_CATEGORY_OF_TASK_URL;

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

  getStatusById(taskId : Number) : Observable<Status[]> {
    let url = `${this.getStatusByIdUrl}${taskId}`;
    return this.http.get <Status[]>(url);
  }

  addNewStatusInTask ( status : any ) : Observable<ModelApiResponse> {
    return this.http.post<ModelApiResponse> (this.addStatusInTaskUrl, status);
  }
  
  updateCategoryOfTask( catId: number, taskId:number) : Observable<ModelApiResponse> {
    console.log("from http service-->", catId, taskId)
    let body = {
      catId: catId,
      taskId:taskId
    }
    return this.http.post<ModelApiResponse>(this.updateCategoryOfTaskUrl, body);
  }

}
