import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './Components/Routing/Users/users.component';
import { UserDetailsComponent } from './Components/Routing/User-details/user-details.component';
import { ErrorComponent } from './Components/Routing/error/error.component';


export const routes: Routes = [
    {path:"",redirectTo:"users",pathMatch:"full"},
    {path:"users",component:UsersComponent},
    {path:"users/:id",component:UserDetailsComponent},
    {path:"**",component:ErrorComponent},
];
