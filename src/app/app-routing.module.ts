import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreAboutComponent } from './store-about/store-about.component';
import { StoreToysComponent } from './store-toys/store-toys.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'toys',
    pathMatch: 'full'
  },
  {
    path: 'toys',
    component: StoreToysComponent
  },
  {
    path: 'about',
    component: StoreAboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
