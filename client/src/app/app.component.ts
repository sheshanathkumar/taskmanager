import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import NavbarComponent from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { HttpService } from './service/httpservice';
import { CommonModule, DatePipe } from '@angular/common';
import { CardComponent } from './component/card/card.component';
import { NewtaskComponent } from './component/newtask/newtask.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StatusComponent } from './component/status/status.component';
import { ContactComponent } from './component/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HomeComponent,
    CommonModule, NewtaskComponent, StatusComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taskmanager';
}
