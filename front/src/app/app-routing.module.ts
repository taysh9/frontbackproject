import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatrixComponent } from './matrix/matrix/matrix.component';
import {ViewsComponent} from "./pages/views/views.component";
import { TaskTableComponent } from './task-table/task-table.component';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'task', component: TaskTableComponent},
  {path: 'matrix', component: MatrixComponent},
  {path:'signup', component:RegisterComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
