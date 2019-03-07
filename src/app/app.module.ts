import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HighlightDirective } from './directives/attribute/highlight/highlight.directive';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes/app.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryServiceService} from './services/in-memory-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HighlightDirective,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryServiceService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
