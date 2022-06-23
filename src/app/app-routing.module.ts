import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EpisodeCreateComponent } from './components/admin/episode/create/episode-create.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin/createepisode', component: EpisodeCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
