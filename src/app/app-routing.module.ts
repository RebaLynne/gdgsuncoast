import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConductComponent } from './conduct/conduct.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'conduct', component: ConductComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}];
  /*{ path: '**', component: PageNotFoundComponent }];*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
