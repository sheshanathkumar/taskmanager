import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { NewtaskComponent } from './component/newtask/newtask.component';

export const routes: Routes = [
{'path': '', component:HomeComponent},
{'path':'task', component:NewtaskComponent},

];
