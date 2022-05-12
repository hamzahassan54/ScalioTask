import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ErrorComponent } from './error/error.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
    component: HomeComponent

  },
  {
    path: 'result',
    loadChildren: () => import('./result-screen/result-screen.module').then(m => m.ResultScreenModule)
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: '**', pathMatch: 'full',
    component: PagenotfoundComponent
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }