import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/navigation/menu.component';
import { EpisodeCreateComponent } from './components/admin/episode/create/episode-create.component';
import { ViewComponent } from './components/admin/episode/view/view.component';
import { JoinComponent } from './components/admin/join/join.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from '@angular/router';

const routes: Routes = [  
  { path: '', redirectTo:'/home', pathMatch:'full'},
  { path: 'home', component: HomeComponent},
  { path: 'joinus', component: JoinComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
