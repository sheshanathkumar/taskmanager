import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import NavbarComponent from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { CommonModule } from '@angular/common';
import { NewtaskComponent } from './component/newtask/newtask.component';
import { StatusComponent } from './component/status/status.component';
import { ContactComponent } from './component/contact/contact.component';
import { SpinnerComponent } from './component/spinner/spinner.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { NotfoundComponent } from './component/notfound/notfound.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HomeComponent,
    CommonModule, NewtaskComponent, StatusComponent, ContactComponent,
    SpinnerComponent, WelcomeComponent, NotfoundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taskmanager';
  isLoading: boolean = true;

  constructor() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }

}
