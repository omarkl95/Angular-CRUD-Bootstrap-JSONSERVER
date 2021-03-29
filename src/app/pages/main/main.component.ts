import { Component, OnInit } from '@angular/core';
import {TasksService} from '../../services/tasks.service'
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AddEditTasksComponent } from './add-edit-tasks/add-edit-tasks.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  bsModalRef!: BsModalRef ;

tasks:any =[]
  constructor(private _TasksService:TasksService  ,private modalService: BsModalService) { }

  ngOnInit(): void {
    this.onGetAll();
  }

  onGetAll(){
    this._TasksService.getTasks().subscribe(data => {
      this.tasks =data;
      console.log(this.tasks)
    })
  }
  onAddNewTask(){
    this.bsModalRef = this.modalService.show(AddEditTasksComponent);
    this.bsModalRef.content.onClose=(added: any)=>{
      if(added){
        this.onGetAll();
      }
    }

    console.log("cliclked")
  }
  onEditTask(task:any) {
    console.log(task)
    this.bsModalRef = this.modalService.show(AddEditTasksComponent,{initialState:{task}});
    this.bsModalRef.content.onClose=(updated: any)=>{
      if(updated){
        this.onGetAll();
      }
    }
  }
  onDeleteTask(id:any) {
    let confirmDelete = confirm('are you sure');

    if (confirmDelete) {
      console.log(confirmDelete);
      this._TasksService.Delete(id).subscribe(data => {
        this.onGetAll()
      },err => console.log(err))
    }else{
      console.log(confirmDelete);

    }
    console.log("Delete")

  }

}
