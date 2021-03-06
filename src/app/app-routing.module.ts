import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authGaurd/authentication.guard';


const routes: Routes = [
  {path:'user-login',loadChildren: () => import('./module/user/user.module').then(mod=>mod.UserModule)},
  {path:'dept',loadChildren: () => import('./module/dept/dept.module').then(mod=>mod.DeptModule), canActivate: [AuthenticationGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
