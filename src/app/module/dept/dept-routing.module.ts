import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DeptComponent } from './dept/dept.component';

export const routes: Routes = [
    {
        path: '', redirectTo: "all", pathMatch: 'full'
    },
    { path: 'all', component: DeptComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DeptRoutingModule { }
