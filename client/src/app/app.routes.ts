import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { NewtaskComponent } from './component/newtask/newtask.component';
import { StatusComponent } from './component/status/status.component';
import { ContactComponent } from './component/contact/contact.component';

export const routes: Routes = [
    { 'path': '', component: HomeComponent },
    { 'path': 'task', component: NewtaskComponent },
    { 'path': 'status', component: StatusComponent },
    { 'path': 'contact', component: ContactComponent },
];
