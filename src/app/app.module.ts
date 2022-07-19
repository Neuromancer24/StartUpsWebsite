import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/navigation/menu.component';
import { EpisodeCreateComponent } from './components/admin/episode/create/episode-create.component';
import { ViewComponent } from './components/admin/episode/view/view.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from '@angular/router';

export class CustomReuseStrategy implements RouteReuseStrategy {
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return false;
  }
  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
  }
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return false;
  }
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle|null {
    return null;
  }
  shouldReuseRoute() {
    return false;
  }
}

@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    EpisodeCreateComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularEditorModule
  ],
  providers: [    
    {
      provide: RouteReuseStrategy,
      useClass: CustomReuseStrategy,
    }
  ],
  bootstrap: [HomeComponent,ViewComponent, MenuComponent]
})
export class AppModule { }
