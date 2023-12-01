import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimoComponent } from './primo/primo.component';
import { HelloUserComponent } from './hello-user/hello-user.component';

const routes: Routes = [
  { path: 'primo', component: PrimoComponent },
  { path: 'hellouser', component: HelloUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
