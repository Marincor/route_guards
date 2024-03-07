import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { guard1, guard2, multipleGuards } from 'src/guards/auth-guard.guard';

const routes: Routes = [
  {
   path: '', component: AppComponent,
   canActivate: [multipleGuards([guard1, guard2])]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
