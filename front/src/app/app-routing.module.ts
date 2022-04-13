import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewsComponent} from "./pages/views/views.component";

const routes: Routes = [
  {path: '', component: ViewsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
