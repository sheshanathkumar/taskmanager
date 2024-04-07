import { Component } from '@angular/core';
import { HttpService } from '../../service/httpservice';
import { CommonModule } from '@angular/common';
import { Task } from '../../util/Task';
import { CardComponent } from '../card/card.component';
import { Router } from '@angular/router';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardComponent, SpinnerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  employees = [];
  categories: any = [];
  tasks: Task[] = [];
  newTasks: Task[] = [];
  inProgressTasks: Task[] = [];
  holdTasks: Task[] = [];
  closedTasks: Task[] = [];

  isLoading : boolean = true;

  constructor(private httpClient: HttpService, private router: Router) {

  }

  ngOnInit() {

    this.httpClient.getAllCategoryDetail().subscribe((data) => {
      this.categories = data;
    })

    this.httpClient.getAllTaskDetail().subscribe((data) => {

      this.tasks = data;
      console.log("task data \n", this.tasks);
      this.saperateTaskCategoryWise(this.tasks);
    })
    console.log(this.holdTasks, this.newTasks);
  }

  saperateTaskCategoryWise(tasks: Task[]) {
    tasks.forEach((x) => {
      if (x.category === 'hold') {
        this.holdTasks.push(x);
      } else if (x.category === 'in progress') {
        this.inProgressTasks.push(x);
      } else if (x.category === 'closed') {
        this.closedTasks.push(x);
      } else {
        this.newTasks.push(x);
      }
    })
    this.holdTasks.sort((a, b) => { return Date.parse(b.time) - Date.parse(a.time) });
    this.newTasks.sort((a, b) => { return Date.parse(b.time) - Date.parse(a.time) });
    this.closedTasks.sort((a, b) => { return Date.parse(b.time) - Date.parse(a.time) });
    this.inProgressTasks.sort((a, b) => { return Date.parse(b.time) - Date.parse(a.time) });
  }


  getStatus(task : Task) {
    console.log(task)
    this.router.navigate(['/status'], {
      state: {currentTask: task}
    } );
  }




}
