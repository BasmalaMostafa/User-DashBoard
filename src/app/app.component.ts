import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ErrorComponent } from './Components/Routing/error/error.component';
import { UsersComponent } from './Components/Routing/students/users.component';
import { HeaderComponent } from './Components/header/header.component';
import { UserDetailsComponent } from './Components/Routing/student-details/user-details.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ErrorComponent,UsersComponent,UserDetailsComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Task1';
}
