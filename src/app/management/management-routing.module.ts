import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RaceDetailComponent, RaceListComponent } from './components';


const routes: Routes = [
  {
    path: '',
    component: RaceListComponent,
  },
  {
    path: 'list',
    component: RaceListComponent,
  },
  {
    path: 'race/:url',
    component: RaceDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }