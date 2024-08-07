import { Routes } from '@angular/router';
import { UsersComponent } from './Components/Routing/students/users.component';
import { UserDetailsComponent } from './Components/Routing/student-details/user-details.component';
import { ErrorComponent } from './Components/Routing/error/error.component';
// import { UpdateStudentComponent } from './Components/update-student/update-student.component';
// import { AddStudentComponent } from './Components/add-student/add-student.component';

export const routes: Routes = [
    {path:"",redirectTo:"users",pathMatch:"full"},
    {path:"users",component:UsersComponent},
    // {path: "students/add",component:AddStudentComponent},
    {path:"users/:id",component:UserDetailsComponent},
    // {path: "students/:id/update",component:UpdateStudentComponent},
    {path:"**",component:ErrorComponent},
];
