import { Component } from '@angular/core';
import { HttpService } from '../../service/httpservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Task } from '../../util/Task';
import { NewTask } from '../../util/NewTask';

@Component({
  selector: 'app-newtask',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './newtask.component.html',
  styleUrl: './newtask.component.css'
})
export class NewtaskComponent {

  allUsers : any = [];
  selectedUser = 0;
  priority = [ [1, "Low"], [2, "Medium"],[3, "Moderate"],[4, "High"],[5, "Extream"] ];
  selectedPriority = 0;
  title = "";
  descr = "";
  newTask = new NewTask();


  constructor( private http : HttpService ) {}

  ngOnInit () {
    this.http.getAllUsers().subscribe( (data) => {
      console.log("from all users ", data);
      this.allUsers = data;
    } )
  }

  onSelectUserDropDown(event : Event) {
    this.selectedUser = parseInt ((event.target as HTMLSelectElement).value);
    console.log(this.selectedUser)
  } 

  onSelectPriorityDropDown(event : Event) {
    this.selectedPriority = parseInt ((event.target as HTMLSelectElement).value);
    console.log(this.selectedPriority);
  }

  createTaskObject () {
    this.newTask.title = this.title;
    this.newTask.descr = this.descr;
    this.newTask.author = this.selectedUser;
    this.newTask.priority = this.selectedPriority;
    console.log(this.newTask);

    this.http.createNewTask(this.newTask).subscribe( (x) => {
      console.log(x)
    });
  }


}
