import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { guard1, guard2, guard3, guard4, multipleGuards } from 'src/guards/auth-guard.guard';
import { authResolver } from 'src/resolvers/auth.resolve';

const routes: Routes = [
  {
   path: '', component: AppComponent,
   canActivate: [multipleGuards([guard1, guard2, guard3, guard4])],
   resolve: {
    auth: authResolver
   }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
