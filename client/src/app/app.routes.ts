import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { NewtaskComponent } from './component/newtask/newtask.component';
import { StatusComponent } from './component/status/status.component';
import { ContactComponent } from './component/contact/contact.component';
import { SpinnerComponent } from './component/spinner/spinner.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { NotfoundComponent } from './component/notfound/notfound.component';

export const routes: Routes = [
    // { 'path': '', component: WelcomeComponent },
    { 'path': '', component: HomeComponent },
    { 'path': 'task', component: NewtaskComponent },
    { 'path': 'status', component: StatusComponent },
    { 'path': 'contact', component: ContactComponent },
    { 'path': 'notfound', component: NotfoundComponent },
];
