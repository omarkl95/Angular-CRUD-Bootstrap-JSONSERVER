import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TaskRequestModel } from '../modles/tasks-request-models';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private _http:HttpClient) {

   }
   getTasks() {
    return this._http.get(environment.apiUrl + '/tasks');
   }
   Add(body:TaskRequestModel){
    return this._http.post(environment.apiUrl + '/tasks/',body)
   }
   Edit(body:TaskRequestModel){
    return this._http.put(environment.apiUrl + '/tasks/'+body.id,body)

  }
  Delete(id:any){
    return this._http.delete(environment.apiUrl + `/tasks/${id}`)

  }
}
