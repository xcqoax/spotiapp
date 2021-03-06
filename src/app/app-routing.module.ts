import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from '../app/components/home/home.component';
import { ArtistaComponent} from './components/artista/artista.component';
import { SearchComponent } from './components/search/search.component';

const ROUTES: Routes = [
  {path:'home', component: HomeComponent},
  {path:'search', component: SearchComponent},
  {path:'artist/:id', component: ArtistaComponent},
  {path:'', pathMatch: 'full', redirectTo:'home'},
  {path:'**', pathMatch: 'full', redirectTo:'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
