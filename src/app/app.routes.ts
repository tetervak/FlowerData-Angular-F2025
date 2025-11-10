import { Routes } from '@angular/router';
import {FlowerList} from './flower-list/flower-list';
import {FlowerDetails} from './flower-details/flower-details';

export const routes: Routes = [
  {path: 'flower-list', component: FlowerList},
  {path: 'flowers/:id', component: FlowerDetails},
  {path: '', redirectTo: 'flower-list', pathMatch: 'full'},
  {path: '**', redirectTo: 'flower-list'}
];
