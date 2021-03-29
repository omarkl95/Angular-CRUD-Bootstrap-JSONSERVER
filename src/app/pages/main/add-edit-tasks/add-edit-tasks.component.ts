import { Component, OnInit } from '@angular/core';
import { TaskRequestModel } from 'src/app/modles/tasks-request-models';
import {  BsModalRef } from 'ngx-bootstrap/modal';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-add-edit-tasks',
  templateUrl: './add-edit-tasks.component.html',
  styleUrls: ['./add-edit-tasks.component.scss']
})
export class AddEditTasksComponent implements OnInit {
task:TaskRequestModel ={
  id: 0,
  title:'',
  desc:''
};

onClose:any;

  constructor(public BsModalRef:BsModalRef  ,private _TasksService:TasksService ) { }

  ngOnInit(): void {
    console.log(this.task)
  }

  onAddTask() {
    let confirmAdd = confirm ('Add task');
    if(confirmAdd){
      this._TasksService.Add(this.task).subscribe(taskadded => {
        console.log(taskadded);
        this.onClose(taskadded);
        this.BsModalRef.hide()
      }  , err=>{console.log(err)})
    }
  }

  onEditTask() {
    let confirmEdit = confirm ('Edit task');
    if(confirmEdit){
      this._TasksService.Edit(this.task).subscribe(taskUpdated => {
        console.log (taskUpdated);
        this.onClose (taskUpdated);
        this.BsModalRef.hide()
      }, err=>{console.log(err)})
    }
  }

}
