import { Component } from '@angular/core';
import { HttpService } from '../../service/httpservice';
import { CommonModule } from '@angular/common';
import { Task } from '../../util/Task';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  employees = [];
  categories : any = [];
  tasks : Task[] = [];
  newTasks : Task[] = [];
  inProgressTasks : Task[] = [];
  holdTasks : Task[] = [];
  closedTasks : Task[] = [];
  totalCategory = new Array(4);

  constructor(private httpClient: HttpService) {

  }

  ngOnInit() {
    this.httpClient.getAllCategoryDetail().subscribe( (data) => {
      this.categories = data;
    } )

    this.httpClient.getAllTaskDetail().subscribe( (data) => {
      console.log(data);
      this.tasks = data;
    } )

    this.saperateTaskCategoryWise(this.tasks);
  }

  saperateTaskCategoryWise (tasks: Task[]) {
    tasks.forEach ( (x) => {
      if (x.category === 'hold') {
        this.holdTasks.push(x);
      } else if (x.category === 'in progress'){
        this.inProgressTasks.push(x);
      } else if (x.category === 'closed') {
        this.closedTasks.push(x);
      } else {
        this.newTasks.push(x);
      }
    } )

  } 






}
