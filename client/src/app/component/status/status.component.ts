import { Component } from '@angular/core';
import { Task } from '../../util/Task';
import { HttpService } from '../../service/httpservice';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Status } from '../../util/Status';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [CommonModule, FormsModule, SpinnerComponent],
  templateUrl: './status.component.html',
  styleUrl: './status.component.css'
})
export class StatusComponent {

  task: any;
  statusList: Status[] = [];
  currState: any;
  currTask = new Task();
  newStatus = "";

  allCategory = [[1, 'new'], [2, 'in progress'], [3, 'hold'], [4, 'closed']];
  availableCategory: any[] = [];

  catValue = 0;
  isLoading: boolean = true;

  constructor(private http: HttpService, private router: Router) {

    this.loadSpinner();
  }



  getStatusById(id: Number) {
    this.http.getStatusById(id).subscribe((data) => {
      this.statusList = data;
      this.statusList.sort((a, b) => {
        return Date.parse(b.time) - Date.parse(a.time)
      })
    })
  }


  ngOnInit() {

    if (this.router.lastSuccessfulNavigation?.extras.state != null) {
      this.currState = this.router.lastSuccessfulNavigation?.extras.state;
      this.task = this.currState.currentTask;
      this.currTask.id = this.task.id;
      this.currTask.author = this.task.author;
      this.currTask.category = this.task.category;
      this.currTask.title = this.task.title;
      this.currTask.subject = this.task.subject;
      this.currTask.priority = this.task.priority;
      this.currTask.time = this.task.time;
      this.getStatusById(this.currTask.id);
    }
    this.allCategory.filter(x => {
      if (x[1] != this.currTask.category) {
        var arr = new Array(2);
        arr[0] = x[0];
        arr[1] = x[1];
        this.availableCategory.push(arr);
      }
    })
  }

  showAddStatusIdForm() {
    var statusForm = document.getElementById('addStatusFormId');
    if (statusForm != null) {
      statusForm.style.display = 'flex';
    }
  }

  closeStatusForm() {
    var statusForm = document.getElementById('addStatusFormId');
    if (statusForm != null) {
      statusForm.style.display = 'none';
    }
  }

  addNewStatus(id: number) {
    this.isLoading = true;
    this.loadSpinner();
    const obj = {
      taskId: id,
      status: this.newStatus
    }

    console.log(obj)
    this.http.addNewStatusInTask(obj).subscribe(x => {
      console.log(x);
      var currStatus = new Status();
      if (x.code === 200) {
        currStatus.taskid = id;
        currStatus.status = this.newStatus;
        currStatus.time = '' + new Date();
      }
      this.statusList.push(currStatus);
      this.statusList.sort((a, b) => { return Date.parse(b.time) - Date.parse(a.time) });
      this.closeStatusForm();
    })

  }

  loadSpinner() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000)
  }

  onSelectChangeCategory(event: Event) {
    this.catValue = parseInt((event.target as HTMLSelectElement).value)
  }

  updateCategory() {
    this.isLoading = true;
    this.loadSpinner();
    if (this.catValue === 0) {
      window.alert("Please select a value!");
    } else {
      console.log(this.catValue, this.currTask.id);
      this.http.updateCategoryOfTask(this.catValue, this.currTask.id).subscribe(x => {
        console.log("response ", x);
        this.router.navigate(['/']);
      })
    }

  }


}
