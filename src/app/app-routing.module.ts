import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './signup/signup.component';
import { TachesComponent } from './taches/taches.component';

const routes: Routes = [
  {path:'',component:AuthComponent},
  {
    path:'signup',component: SignupComponent
  },
  {path:'taches',component:TachesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
