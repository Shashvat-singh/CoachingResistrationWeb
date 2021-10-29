import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCoachingComponent } from './add-coaching/add-coaching.component';
import { ListOfCoachingComponent } from './list-of-coaching/list-of-coaching.component';
import { LoginComponent } from './login/login.component';
import { ResisterComponent } from './resister/resister.component';
import { UpdateCoachingComponent } from './update-coaching/update-coaching.component';

const routes: Routes = [
  {
    path:"add",
    component:AddCoachingComponent
  },
  {
    path:"update/:id",
    component:UpdateCoachingComponent
  },
  {
    path:"list",
    component:ListOfCoachingComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"resister",
    component:ResisterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
