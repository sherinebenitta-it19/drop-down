import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CurrentdateComponent } from './currentdate/currentdate.component';
import { DeskComponent } from './desk/desk.component';
import { SampleComponent } from './sample/sample.component';

const routes: Routes = [
  {
    component:DeskComponent,
    path:'desk'
  },
  {
    component:SampleComponent,
    path:'sample'
  },
  {
    component:AboutComponent,
    path:'about'
  },
  {
    component:CurrentdateComponent,
    path:'currentdate'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
