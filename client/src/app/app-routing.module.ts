import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditChoresComponent } from './comp/edit-chores/edit-chores.component';
import { ViewChoresComponent } from './comp/view-chores/view-chores.component';
import { Err404Component } from './comp/err404/err404.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/edit_chores' },
  { path: 'edit_chores', component: EditChoresComponent },
  { path: 'view_chores', pathMatch: 'full', redirectTo: '/view_chores' },
  { path: 'view_chores', component: ViewChoresComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/404' },
  { path: '404', component: Err404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
