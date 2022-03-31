import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserLoginComponent } from './user-login/user-login.component';

export const routes: Routes = [
    {
        path: '', redirectTo: "login", pathMatch: 'full'
    },
    { path: 'login', component: UserLoginComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UserRoutingModule { }
