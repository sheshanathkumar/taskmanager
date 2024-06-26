import { Component } from '@angular/core';
import { HttpService } from '../../service/httpservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Task } from '../../util/Task';
import { NewTask } from '../../util/NewTask';
import { SpinnerComponent } from '../spinner/spinner.component';
import { routes } from '../../app.routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newtask',
  standalone: true,
  imports: [CommonModule, FormsModule, SpinnerComponent],
  templateUrl: './newtask.component.html',
  styleUrl: './newtask.component.css'
})
export class NewtaskComponent {

  allUsers : any = [];
  selectedUser = "";
  priority = [ [1, "Low"], [2, "Medium"],[3, "Moderate"],[4, "High"],[5, "Extreme"] ];
  selectedPriority = "";
  title = "";
  descr = "";
  newTask = new NewTask();
  isLoading : boolean = true;

  constructor( private http : HttpService, private router : Router ) {}

  ngOnInit () {
    this.http.getAllUsers().subscribe( (data) => {
      console.log("from all users ", data);
      this.allUsers = data;
    } )
  }

  loadSpinner () {
    this.isLoading = true;
    setTimeout( () => {
      this.isLoading = false;
    }, 2000)
  }

  onSelectUserDropDown(event : Event) {
    this.selectedUser = (event.target as HTMLSelectElement).value;
    console.log(this.selectedUser)
  } 

  onSelectPriorityDropDown(event : Event) {
    this.selectedPriority = (event.target as HTMLSelectElement).value;
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
    this.loadSpinner();
    this.router.navigate(['/']);
  }


}
